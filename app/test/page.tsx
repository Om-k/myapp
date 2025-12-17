const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default async function Test() {
  await wait(3000);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Async Page Loaded 🚀</h1>
      <p>This page was loaded after 3 seconds.</p>
    </main>
  );
}
