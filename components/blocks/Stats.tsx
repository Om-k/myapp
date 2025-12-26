import Container from "../ui/Container";

// components/blocks/Stats.tsx
export default function Stats({ data }: { data: any }) {
  return (
    <section>
      <Container CommonParameters={data.CommonParameters}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mb-16 text-center italic">
            {data.Heading}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {data.ExpertiseYouCanTrustList.map((item: any) => (
              <div key={item.id} className="text-center group">
                <div className="text-5xl font-black text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                  {item.Value}
                </div>
                <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
                  {item.Text}
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>

    </section>
  );
}