"use client";
import {
  Dispatch,
  FunctionComponent,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { ProductType, shoes as products } from "@/db/db";

type CategoryContextValueType = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  category: {
    type: string;
    value: string;
  };
  setCategory: Dispatch<
    SetStateAction<{
      type: string;
      value: string;
    }>
  >;
  filteredProducts?: ProductType[];
};

type CategoryContextChildren = {
  children?: ReactNode;
};

export const CategoryContext = createContext<CategoryContextValueType>({
  input: "Adidas",
  setInput: () => {},
  category: {
    type: "category",
    value: "all",
  },
  setCategory: () => {},
});

export const CategoryContextProvider: FunctionComponent<
  CategoryContextChildren
> = ({ children }) => {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState({
    type: "category",
    value: "all",
  });

  useEffect(() => {
    let filteredArr = products.filter((product) =>
      product.title.toLowerCase().includes(input.toLowerCase())
    );
    if (category.type === "category") {
      filteredArr = filteredArr.filter((product) => {
        if (category.value === "all") {
          return true;
        } else {
          return product.category === category.value;
        }
      });
    } else if (category.type === "price") {
      filteredArr = filteredArr.filter((product) => {
        if (category.value === "all") {
          return true;
        } else {
          return (
            Number(product.newPrice.split("$").join("")) <=
              Number(category.value) + 50 &&
            Number(category.value) <=
              Number(product.newPrice.split("$").join(""))
          );
        }
      });
    } else if (category.type === "color") {
      filteredArr = filteredArr.filter((product) => {
        if (category.value === "all") {
          return true;
        } else {
          return category.value === product.color;
        }
      });
    }
    setFilteredProducts(filteredArr);
  }, [category.type, category.value, input]);

  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

  const value: CategoryContextValueType = {
    input,
    setInput,
    category,
    setCategory,
    filteredProducts,
  };

  return (
    <CategoryContext.Provider value={{ ...value }}>
      {children}
    </CategoryContext.Provider>
  );
};
