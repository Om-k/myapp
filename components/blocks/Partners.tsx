// 'use client'
import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";
import Container from "../ui/Container";
import { CommonParameters } from "@/types/commonParameters";

interface PartnerItem {
  id: number;
  Content: string;
  Logo?: {
    url: string
  };
}

interface PartnersProps {
  data: {
    PartnersList: PartnerItem[];
    CommonParameters: CommonParameters;
  };
}

const loaderProp = ({ src }: { src: any }) => {
  return src;
}

export default function Partners({ data }: PartnersProps) {
  const { PartnersList } = data;

  console.log("CommonParameters", data);


  return (
    <section>
      <Container CommonParameters={data.CommonParameters} >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PartnersList.map((item) => {
              const logoUrl = getStrapiMedia(item.Logo?.url || "");

              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  {/* Logo Container */}
                  <div className="relative h-20 w-full mb-6 flex items-center justify-center">
                    {logoUrl ? (
                      <Image
                        src={logoUrl}
                        alt={"Partner Logo"}
                        // fill
                        height={150}
                        width={150}
                        className="object-contain"
                      //  unoptimized
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse" />
                    )}
                  </div>

                  {/* Content */}
                  <p className="text-center text-sm text-gray-600 leading-relaxed line-clamp-4">
                    {item.Content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}