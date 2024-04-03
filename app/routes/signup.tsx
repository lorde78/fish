// app/routes/signup.tsx
import { ActionFunction, json, redirect } from '@remix-run/node'; // Import from '@remix-run/node'
import { useActionData } from '@remix-run/react'; // Client-side hooks
import { auth } from '~/utils/firebase'; // Adjust this path as needed
import { createUserWithEmailAndPassword } from "firebase/auth";

// Define a type for the action data to include potential error messages
type ActionData = {
  errorMessage?: string;
};

// Define the action function with explicit typing for the request parameter
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  if (typeof email === 'string' && typeof password === 'string') {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to the home page or dashboard upon successful signup
      return redirect('/login'); // Change this to your desired route
    } catch (error) {
      // TypeScript-friendly error handling
      const errorMessage: string = error instanceof Error ? error.message : "An unknown error occurred";
      return json<ActionData>({ errorMessage });
    }
  } else {
    return json<ActionData>({ errorMessage: 'Email and Password are required.' }, { status: 400 });
  }
};

// The signup form component
export default function Signup() {
  const actionData = useActionData<ActionData>();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form method="post" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" name="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" name="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        {actionData?.errorMessage && <div className="text-red-500 mb-4">{actionData.errorMessage}</div>}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Sign Up
        </button>
      </form>
    </div>
  );
}
