import React from 'react';

interface BrandCardProps {
  name: string;
  logo: string;
}

const BrandCard: React.FC<BrandCardProps> = ({ name, logo }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-40 flex-shrink-0 mx-2 p-4 flex flex-col items-center">
      <div className="h-20 w-full flex items-center justify-center mb-3">
        <span className="text-xl font-bold">{logo}</span>
      </div>
      <h3 className="text-sm font-medium mb-2">{name}</h3>
      <button className="bg-primary text-white text-xs py-1 px-3 rounded-md">
        Ver productos
      </button>
    </div>
  );
};

export default BrandCard;