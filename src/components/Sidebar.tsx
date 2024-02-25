import React from "react";
import { Filters } from "./Filters";

const Sidebar = () => {
  return (
    <div className="flex-[1.25] p-4 border-r border-r-border shadow-md ">
      <Filters />
    </div>
  );
};

export default Sidebar;
