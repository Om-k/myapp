import { CommonParameters } from "@/types/commonParameters";
import Container from "../ui/Container";

interface HeadingProps {
  data: {
    Heading: string;
    SubHeading?: string;
    HasContent: boolean;
    CommonParameters: CommonParameters
  };
}

export default function Header({ data }: HeadingProps) {
  const { Heading, SubHeading, CommonParameters } = data;
  console.log("CommonParameters header", data);


  return (
    <section>
      <Container CommonParameters={CommonParameters} isHeader={true} >
        <div className="text-center">
          {/* Main Heading */}
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 ${SubHeading && 'mb-4'} tracking-tight`}>
            {Heading}
          </h2>

          {/* Sub-Heading / Description */}
          {SubHeading && (
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {SubHeading}
            </p>
          )}

        </div>
      </Container>
    </section>
  );
}