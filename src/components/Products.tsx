import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="flex-[9] p-12 ">
      <div>
        <p>Search results for &quot;{"Nike"}&quot;</p>
      </div>
      <div className="flex flex-wrap gap-6 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
