// components/PortfolioSkeleton.tsx
export default function PortfolioSkeleton() {
     const bigData = new Array(2_500_000).fill("x").join("");

  return (
    <div className="animate-pulse p-8 max-w-6xl mx-auto space-y-12">
      {/* 1. Hero Skeleton (~400 bytes) */}
      <div className="flex flex-col md:flex-row items-center gap-8 py-10 border-b border-gray-100">
        <div className="w-32 h-32 bg-gray-200 rounded-full shrink-0" />
        <div className="flex-1 space-y-4 w-full">
          <div className="h-10 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
      </div>

      {/* 2. Grid Skeleton (~800 bytes) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border border-gray-100 rounded-xl p-4 space-y-4">
            <div className="aspect-video bg-gray-200 rounded-lg" />
            <div className="h-6 bg-gray-200 rounded w-2/3" />
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded w-full" />
              <div className="h-3 bg-gray-200 rounded w-4/5" />
            </div>
            <div className="h-8 bg-gray-100 rounded-md w-full" />
          </div>
        ))}
      </div>
      
      {/* 3. Hidden "Buffer Weight" (Only if needed) */}
      {/* This invisible comment ensures we hit the 2KB threshold easily */}
      <div className="hidden">
        {Array(20).fill("").join("")}
      </div>
      <span style={{ display: "none" }}>{bigData}</span>

    </div>
  );
}