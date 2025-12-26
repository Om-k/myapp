export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default async function Test() {
  // artificial delay
  // await wait(3000);



  return (
    <main style={{ padding: "2rem" }}>
      <h1>Async Page Loaded 🚀</h1>
      <p>This page was loaded fast.</p>
    </main>
  );
}
