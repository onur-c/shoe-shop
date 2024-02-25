import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { CategoryContext } from "@/context/CategoryContext";

const Products = () => {
  const { filteredProducts } = useContext(CategoryContext);
  return (
    <div className="flex-[9] p-12 ">
      <div>
        <p>Search results for &quot;{"Nike"}&quot;</p>
      </div>
      <div className="flex flex-wrap gap-6 ">
        {filteredProducts?.map((product) => {
          return (
            <>
              <ProductCard product={product} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
