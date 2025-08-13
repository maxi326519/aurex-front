import React from "react";

interface CategoryButtonProps {
  name: string;
  icon: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center mb-2">
        <span className="text-2xl">{icon}</span>
      </div>
      <span className="text-sm text-center">{name}</span>
    </div>
  );
};

export default CategoryButton;
