import { Form } from "@remix-run/react";


export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="bg-blue-500 text-white p-4 m-4 border rounded shadow-lg">Welcome to Remix</h1>
      <Form action="/submit" method="post" className="space-y-4 bg-white p-6 rounded-md shadow m-4">
        <input className="mb-2 p-2 border rounded shadow-inner w-full" name="title" type="text" placeholder="Title" />
        <textarea className="mb-2 p-2 border rounded shadow-inner w-full" name="description" placeholder="Description"></textarea>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
      </Form>
    </div>
  );
}
