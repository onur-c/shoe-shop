import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { CategoryContext } from "@/context/CategoryContext";

const Products = () => {
  const { input, filteredProducts } = useContext(CategoryContext);
  return (
    <div className="flex-[9] p-12 ">
      <div className="mb-6 h-8 text-center text-3xl font-bold">
        {input ? (
          <div>
            <p>Search results for &quot;{input}&quot;</p>
          </div>
        ) : (
          <div>All Products</div>
        )}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredProducts?.map((product) => {
          return (
            <>
              <ProductCard product={product} key={Date.now()} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
