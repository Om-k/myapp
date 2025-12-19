import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-6 font-sans transition-colors dark:bg-zinc-950">
      {/* Header Section */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Stream Testing <span className="text-blue-600">Hub</span>
        </h1>
        <p className="mt-3 text-zinc-500 dark:text-zinc-400">
          Select a route to test React 19 Streaming & Loading states.
        </p>
      </div>

      {/* Navigation Grid */}
      <div className="grid w-full max-w-sm gap-4 sm:max-w-md sm:grid-cols-1">
        <TestLink
          href="/test"
          title="Static Delay"
          description="Tests 3s delay with static/dynamic rendering."
          color="hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10"
        />

        <TestLink
          href="/test2"
          title="Manual Suspense"
          description="Tests nested components and streaming chunks."
          color="hover:border-purple-500 hover:bg-purple-50/50 dark:hover:bg-purple-900/10"
        />

        <TestLink
          href="/fetch"
          title="Dynamic Fetch"
          description="Forces 'no-store' cache with artificial lag."
          color="hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10"
        />

        <TestLink
          href="/fetchSSG" 
          title="Dynamic Fetch ISR"
          description="Uses ISR to fetch a new random profile every 60 seconds."
          color="hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10"
        />
      </div>

      {/* Footer / Status */}
      <footer className="mt-12 text-xs font-medium uppercase tracking-widest text-zinc-400">
        Next.js 16 • React 19 • Local Testing
      </footer>
    </div>
  );
}

// Reusable Link Component for a clean UI
function TestLink({ href, title, description, color }: { href: string; title: string; description: string, color: string }) {
  return (
    <Link
      href={href}
      className={`group block rounded-2xl border border-zinc-200 bg-white p-5 transition-all active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 ${color}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
            {title}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {description}
          </p>
        </div>
        <span className="text-xl transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}