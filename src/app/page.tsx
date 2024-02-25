"use client";
import Header from "@/components/Header";
import Products from "@/components/Products";
import Sidebar from "@/components/Sidebar";
import { CategoryContextProvider } from "@/context/CategoryContext";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 ">
      <CategoryContextProvider>
        <Header />
        <div className="flex flex-1 ">
          <Sidebar />
          <Products />
        </div>
      </CategoryContextProvider>
    </main>
  );
}
