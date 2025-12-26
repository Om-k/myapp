// app/test/page.tsx

async function getDelayedData() {
  // 1. The 'no-store' flag tells Next.js: "Do NOT pre-render this page at build time"
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', { 
    cache: 'no-store' 
  });

  // 2. Add your artificial delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return res.json();
}

export default async function TestPage() {
  const data = await getDelayedData();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Data Loaded: {data.title} 🚀</h1>
    </main>
  );
}