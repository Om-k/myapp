// app/portfolio/page.tsx
import { Suspense } from 'react';
import PortfolioSkeleton from '@/components/PortfolioSkeleton';
import DelayedHello from '@/components/DelayedContent';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* This renders INSTANTLY */}
      <nav className="p-4 border-b bg-gray-50">
        <div className="max-w-6xl mx-auto font-bold">My Portfolio</div>
      </nav>
      
      <main className="max-w-6xl mx-auto">
        <Suspense fallback={<PortfolioSkeleton />}>
          {/* This component will "Suspend" for 3 seconds */}
          <DelayedHello /> 
        </Suspense>
      </main>
      
      {/* This also renders INSTANTLY (if using PPR/cacheComponents) */}
      <footer className="p-10 bg-gray-900 text-white mt-20">
        <div className="max-w-6xl mx-auto">Footer Content</div>
      </footer>
    </div>
  );
}