import React from "react";
import { shoes } from "@/db/db";
import Image from "next/image";
import {
  ChevronLeftCircle,
  ChevronRightCircle,
  ShoppingBasket,
} from "lucide-react";

const ProductCard = () => {
  return (
    <div className="shadow-lg hover:scale-[1.03] transition w-[436px] h-[400px]  gap-2 border-solid rounded flex flex-col items-center justify-center relative">
      <div className="flex gap-1 items-center absolute top-0 right-0 p-2 text-yellow-100 bg-black rounded-bl-lg">
        <p className="line-through text-xs">{shoes[0].prevPrice}</p>
        <p className="font-bold text-xl">{shoes[0].newPrice}</p>
      </div>
      <div className="flex items-center absolute top-12 right-0 p-1 text-white bg-black rounded-bl-lg rounded-tl-lg">
        <p className="text-xs">{shoes[0].reviews}</p>
      </div>
      <div className="flex items-center absolute bottom-4 right-4 group p-3 text-white  bg-black rounded-full cursor-pointer hover:opacity-70 transition">
        <ShoppingBasket className=" transition" />
      </div>
      <div className="relative group">
        <div className="absolute flex justify-between items-center w-[calc(100%+80px)] -left-[40px] top-1/2">
          <ChevronLeftCircle className="cursor-pointer group-hover:opacity-100 opacity-0 transition" />
          <ChevronRightCircle className="cursor-pointer group-hover:opacity-100 opacity-0 transition" />
        </div>
        <Image
          src={shoes[0].img}
          alt={shoes[0].title}
          width={250}
          height={100}
        />
      </div>
      <h2 className="font-bold text-3xl">{shoes[0].title}</h2>
      <div className="flex gap-1 ">
        <button className="p-1 px-3 border rounded capitalize hover:border-black transition text-xs">
          #{shoes[0].company}
        </button>
        <button className="p-1 px-3 border rounded capitalize hover:border-black transition text-xs">
          #{shoes[0].color}
        </button>
        <button className="p-1 px-3 border rounded capitalize hover:border-black transition text-xs">
          #{shoes[0].category}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
