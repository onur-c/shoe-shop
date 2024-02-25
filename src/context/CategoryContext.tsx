import {
  Dispatch,
  FunctionComponent,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { ProductType, shoes as products } from "@/db/db";

type CategoryContextValueType = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  filteredProducts?: ProductType[];
};

type CategoryContextChildren = {
  children?: ReactNode;
};

export const CategoryContext = createContext<CategoryContextValueType>({
  input: "Adidas",
  setInput: () => {},
  category: "all",
  setCategory: () => {},
});

export const CategoryContextProvider: FunctionComponent<
  CategoryContextChildren
> = ({ children }) => {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("");
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(input.toLowerCase())
  );

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
