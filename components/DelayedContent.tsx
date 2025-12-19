// components/DelayedContent.tsx
export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default async function DelayedContent() {
  await wait(2000); // The 2-second delay happens here

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Async Page Loaded 🚀</h1>
      <p>This page was loaded after 2 seconds.</p>
    </main>
  );
}