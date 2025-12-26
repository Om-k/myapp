export default function Loading() {
  // ~2.5 MB of data
  // const bigData = new Array(2_500_000).fill("x").join("");

    // ~1.1 MB of data
  // const bigData = new Array(1_100_000).fill("x").join("");

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
      }}
    >
      Loading async page... ⏳
      {/* prevent tree-shaking */}
      {/* <span style={{ display: "none" }}>{bigData}</span> */}
    </div>
  );
}
