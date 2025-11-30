import type { FC, MouseEventHandler } from "react";
import type { ProductCardProps } from "@/utils/interfaces";

export const ProductForm: FC<ProductCardProps> = ({ product, onClick }) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    onClick?.(product);
  };

  return (
    <div
      onClick={handleClick}
      className="
        flex flex-col overflow-hidden 
        rounded-3xl bg-white
        shadow-[0_20px_25px_-5px_rgba(0,0,0,0.10),0_8px_10px_-6px_rgba(0,0,0,0.10)]
        w-full h-full cursor-pointer
        hover:-translate-y-1 hover:shadow-[0_25px_35px_-10px_rgba(0,0,0,0.25)]
        transition
      "
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-[180px] w-full object-cover"
      />

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {product.name}
        </h3>
      </div>
    </div>
  );
};
