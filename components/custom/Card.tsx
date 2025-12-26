import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";
import { ICard } from "@/types/Card";

export const Card = ({
  Heading,
  Description,
  Image: strapiImage,
  Groups,
  ImageHeaderContainer = false,
  FullWidth = false,
}: ICard) => {
  const imageUrl = strapiImage?.url ? getStrapiMedia(strapiImage.url) : null;

  // --- Reusable Parts (To avoid repeating code) ---
  const renderDescription = Description && (
    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{Description}</p>
  );

  const renderGroups = Groups && Groups.length > 0 && (
    <div className="flex flex-wrap gap-2 mt-auto">
      {Groups.map((group) => (
        <span
          key={group.id}
          className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-100"
        >
          {group.Value}
        </span>
      ))}
    </div>
  );

  // =========================================
  // LAYOUT 1: FULL WIDTH (Horizontal on Desktop)
  // =========================================
  if (FullWidth) {
    return (
      <div className="h-full bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row">
        
        {/* LEFT SIDE: Rectangular Image Container */}
        {/* On mobile it's a banner (h-56), on desktop it's the left column (md:w-2/5) */}
        {imageUrl && (
          <div className="relative w-full h-56 md:w-2/5 md:h-auto shrink-0 p-6">
            <Image
              src={imageUrl}
              alt={Heading || ""}
              height={150}
              width={200}
              className="object-cover h-full w-full"
            />
          </div>
        )}

        {/* RIGHT SIDE: Content */}
        <div className="p-6 flex flex-col flex-grow">
          {Heading && <h3 className="text-2xl font-bold mb-3 text-gray-900">{Heading}</h3>}
          {renderDescription}
          {renderGroups}
        </div>
      </div>
    );
  }

  // =========================================
  // LAYOUT 2: STANDARD CARD (Vertical Stack)
  // =========================================
  return (
    <div className="h-full bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
      
      {/* Header / Image Section */}
      <div className="p-6 pb-0">
        {ImageHeaderContainer ? (
          // Small Icon Header Style
          <div className="flex items-center gap-4 mb-4">
            {imageUrl && (
              <div className="shrink-0 p-2 bg-gray-50 rounded-lg w-16 h-16 flex items-center justify-center relative border border-gray-50">
                <Image src={imageUrl} alt={Heading || ""} width={64} height={64} unoptimized className="object-contain" />
              </div>
            )}
            {Heading && <h3 className="text-xl font-bold text-gray-900">{Heading}</h3>}
          </div>
        ) : (
          // Big Banner Image Style
          <>
            {imageUrl && (
              <div className="w-full h-48 mb-4 overflow-hidden rounded-xl bg-gray-50 relative border border-gray-50">
                <Image src={imageUrl} alt={Heading || ""} fill unoptimized className="object-cover" />
              </div>
            )}
            {Heading && <h3 className="text-xl font-bold mb-2 text-gray-900">{Heading}</h3>}
          </>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 pt-2 flex flex-col flex-grow">
        {renderDescription}
        {renderGroups}
      </div>
    </div>
  );
};