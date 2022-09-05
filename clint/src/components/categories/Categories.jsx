import React from "react";
import Categorie from "./Categorie/Categorie";

const Categories = () => {
  return (
    <div className="container_bg py-24">
      <h2 className="text-4xl font-sans pb-12">Categories</h2>
      <div className="grid grid-cols-6 gap-4">
        <Categorie />
      </div>
    </div>
  );
};

export default Categories;
