import React from "react";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  image,
  discount,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-48 flex-shrink-0 mx-2">
      <div className="h-32 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">{image}</span>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium mb-1">{title}</h3>
        <div className="flex items-center">
          <span className="text-lg font-bold">${price.toFixed(2)}</span>
          {discount && (
            <span className="ml-2 text-xs line-through text-gray-500">
              ${(price / (1 - discount / 100)).toFixed(2)}
            </span>
          )}
        </div>
        {discount && (
          <span className="text-xs text-primary font-bold">
            {discount}% OFF
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
