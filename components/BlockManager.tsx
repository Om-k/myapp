// src/components/BlockManager.tsx
import Hero from "@/components/blocks/Hero";
import Stats from "@/components/blocks/Stats";
import Header from "./custom/Header";
import Partners from "./blocks/Partners";
import OurServices from "./blocks/OurServices";

// 1. Create a "Map" that links Strapi names to your React components
const COMPONENTS_MAP: any = {
  "blocks.hero": Hero,
  "blocks.expertise-you-can-trust": Stats,
  "shared.heading": Header,
  "blocks.partners": Partners,
  "blocks.our-services": OurServices
};

export default function BlockManager({ blocks }: { blocks: any[] }) {

  console.log("Gotten blocks",blocks);
  
  if (!blocks || blocks.length === 0) return <p>No content added yet.</p>;

  return (
    <>
      {blocks.map((block, index) => {
        // 2. Get the component from the map based on the Strapi __component name
        const SelectedComponent = COMPONENTS_MAP[block.__component];

        if (!SelectedComponent) {
          console.warn(`Missing React component for: ${block.__component}`);
          return null;
        }

        // 3. Render the component and pass all data as a 'data' prop
        return <SelectedComponent key={`${index}-${block.__component}`} data={block} />;
      })}
    </>
  );
}