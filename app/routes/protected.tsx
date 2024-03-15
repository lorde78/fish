// app/routes/protected.tsx
// import { LoaderFunction, useLoaderData } from "remix";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import UserGreeting from "~/components/UserGreeting";

import { json } from "@remix-run/node";
import admin from "~/utils/firebaseAdmin";

interface LoaderData {
    email: string;
}

export const loader: LoaderFunction = async ({ request }) => {
    const token = request.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
        throw new Response("Unauthorized", { status: 401 });
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        if (!decodedToken.email) {
            throw new Response("Email not found", { status: 400 });
        }
        return json<LoaderData>({ email: decodedToken.email });
    } catch (error) {
        throw new Response("Unauthorized", { status: 401 });
    }
};


export default function ProtectedRoute() {
    const data = useLoaderData<LoaderData>();

    return <UserGreeting email={data.email} />;
}
