import type { MetaFunction } from "@remix-run/node";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import UserGreeting from "~/components/UserGreeting";
import admin from "~/utils/firebaseAdmin";

interface LoaderData {
  email: string | null;
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  // Vous devrez implémenter une manière de récupérer le token d'authentification de l'utilisateur
  // Cela peut impliquer de lire un cookie ou l'en-tête d'autorisation, comme dans protected.tsx
  try {
    // Similaire à la logique dans protected.tsx, mais vous pouvez choisir de rendre l'email null si non trouvé
    const token = request.headers.get("Authorization")?.split(" ")[1];
    if (token) {
      const decodedToken = await admin.auth().verifyIdToken(token);
      return json<LoaderData>({ email: decodedToken.email ?? null });
    }
    return json<LoaderData>({ email: null });
  } catch (error) {
    return json<LoaderData>({ email: null });
  }
};

export default function Index() {
  const { email } = useLoaderData<LoaderData>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <div>
        {email ? <UserGreeting email={email} /> : <p>Veuillez vous connecter pour voir les informations protégées.</p>}
      </div>
    </div>
  );
}
