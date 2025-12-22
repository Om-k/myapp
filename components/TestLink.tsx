import Link from 'next/link';

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

export default TestLink