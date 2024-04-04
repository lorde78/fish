// app/routes/submit.tsx
import { ActionFunction, LoaderFunction, redirect, json } from "@remix-run/node";

// Cette fonction `loader` redirigera les requêtes GET vers la racine ou une autre page.
export const loader: LoaderFunction = async ({ request }) => {
  return redirect("/");
};

// Cette fonction `action` traite les soumissions de formulaire POST.
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const description = formData.get("description");

  console.log("Form Data:", { title, description });

  // Ici, effectuez les opérations nécessaires avec les données du formulaire.
  // Par exemple, sauvegarder dans une base de données, envoyer un email, etc.

  // Après le traitement, vous pouvez rediriger l'utilisateur ou retourner une réponse JSON.
  // Pour cet exemple, nous allons simplement retourner une réponse JSON pour confirmer la réception.
  return json({ success: true, message: "Form submitted successfully", title, description });
};
