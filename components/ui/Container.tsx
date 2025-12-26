import React from 'react';

export interface CommonParameters {
  InHeaderContainer: boolean;
  Padding: "Small" | "Medium" | "Big";
  Height: number;
  AutoHeight: boolean;
}

interface ContainerProps {
  children: React.ReactNode;
  isHeader?: boolean;
  className?: string;
  // Make commonParams optional and default to a standard setup
  CommonParameters?: Partial<CommonParameters>;
}

// Default values for the parameters
const defaultParams: CommonParameters = {
  InHeaderContainer: false,
  Padding: "Medium",
  Height: 0,
  AutoHeight: true,
};

const Container = ({
  children,
  isHeader = false,
  className = "",
  CommonParameters = {}
}: ContainerProps) => {
  // Merge the passed params with defaults
  const params = { ...defaultParams, ...CommonParameters };

  // Mapping Padding types to Tailwind classes
  const paddingMap = {
    Small: "py-6",   // Tight spacing
    Medium: "py-12", // Standard industry spacing
    Big: "py-24",    // Large hero-style spacing
  };

  // Logic for height
  const style = !params.AutoHeight && params.Height > 0
    ? { height: `${params.Height}px` }
    : {};

  return (
    <div
      style={style}
      className={`
        /* 1. Core Layout */
        max-w-7xl mx-auto 
        px-4 sm:px-6 lg:px-8 
        w-full
        
        /* 2. Dynamic Vertical Padding */
       ${paddingMap[params.Padding]}
        
        /* 3. InHeaderContainer Adjustment */
        /* If this block follows a header, reduce top padding to keep them connected */
        ${params.InHeaderContainer ? isHeader ? 'pb-4' : 'pt-4' : ''} 

        /* 4. Background (Optional: can be moved to Section wrapper) */
       

        /* 5. Custom Overrides */
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;