// components/blocks/Hero.tsx
import Link from 'next/link';

export default function Hero({ data }: { data: any }) {
  const videoUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.Background[0]?.url}`;
  
  // Assuming Strapi returns ButtonValue for text and potentially a ButtonLink

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 backdrop-blur-[2px]" />

      <div className="relative z-20 text-center px-6 max-w-5xl">
        {data.FloatingTextDisplay && (
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.2em] text-white uppercase bg-blue-600/80 backdrop-blur-md rounded-full shadow-lg shadow-blue-900/20">
            {data.FloatingText}
          </span>
        )}
        
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[1.05] tracking-tight">
          {data.Title}
        </h1>
        
        <p className="text-lg md:text-2xl text-zinc-200 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          {data.SubTitle}
        </p>

        {/* --- NEW PROFESSIONAL BUTTON --- */}
        {data.ButtonValue && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href=""
              className="group relative px-8 py-4 bg-white text-zinc-950 font-bold rounded-full overflow-hidden transition-all duration-300 hover:pr-12 active:scale-95 shadow-2xl"
            >
              <span className="relative z-10">{data.ButtonValue}</span>
              
              {/* Arrow icon that appears on hover */}
              <svg 
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            
            
          </div>
        )}
      </div>

      {/* Subtle bottom gradient for smoother transition to next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
    </section>
  );
}