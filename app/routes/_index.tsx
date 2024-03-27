import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="bg-blue-500 text-white p-4 m-4 border rounded shadow-lg">Welcome to Remix</h1>
      <div>
      </div>
    </div>
  );
}
