import React, { ReactNode } from "react";

interface HorizontalScrollProps {
  title: string;
  children: ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  title,
  children,
}) => {
  return (
    <section className="my-8">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="relative">
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
