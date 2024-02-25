"use client";
import { CircleUser, Footprints, Search, ShoppingBasket } from "lucide-react";
import Link from "next/link";
import React, { ChangeEventHandler, useContext } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { CategoryContext } from "@/context/CategoryContext";

const Header = () => {
  const { input, setInput } = useContext(CategoryContext);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };
  return (
    <header className="flex items-center justify-between h-20 px-20">
      <Link className="flex gap-1" href={"/"}>
        <Footprints size={24} strokeWidth={2.5} />
        <span className="font-bold">ShoeShop</span>
      </Link>
      <div className="flex items-center gap-1.5 flex-1 max-w-[400px]">
        <Label htmlFor="search-input">
          <Search />
        </Label>
        <Input
          id="search-input"
          placeholder="Search..."
          onChange={handleChange}
          value={input}
        />
      </div>

      <div className="flex gap-8">
        <button className="hover:opacity-50 transition">
          <ShoppingBasket />
        </button>
        <button className="hover:opacity-50 transition">
          <CircleUser />
        </button>
      </div>
    </header>
  );
};

export default Header;
