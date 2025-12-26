// app/test/loading.tsx

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      {/* The skeleton container matches the exact size and shape of our user card */}
      <div className="relative w-full max-w-sm animate-pulse rounded-3xl bg-white p-8 shadow-2xl">
        
        {/* Skeleton ISR Badge */}
        <div className="absolute right-4 top-4 h-5 w-16 rounded-full bg-slate-200" />

        {/* Skeleton Avatar */}
        <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-slate-200 ring-2 ring-slate-100" />

        {/* Skeleton Name */}
        <div className="mx-auto h-8 w-3/4 rounded-lg bg-slate-200" />
        
        {/* Skeleton Email */}
        <div className="mx-auto mt-3 h-4 w-1/2 rounded-lg bg-slate-100" />

        {/* Skeleton Grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
          <div className="space-y-2">
            <div className="h-3 w-12 rounded bg-slate-100" />
            <div className="h-4 w-20 rounded bg-slate-200" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-12 rounded bg-slate-100" />
            <div className="h-4 w-20 rounded bg-slate-200" />
          </div>
        </div>

        {/* Skeleton Footer */}
        <div className="mx-auto mt-8 h-3 w-2/3 rounded bg-slate-50" />
        
        {/* Accessibility Label (Hidden but present for screen readers) */}
        <span className="sr-only">Loading user profile...</span>
      </div>
    </div>
  );
}