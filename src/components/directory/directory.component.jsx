import React from "react";
import DirectoryItem from "../directory-item/directory-item.components";
import { categoryItems } from "../../data";
import { DirectoryContainer } from "./directory.sytle.jsx";

const Directory = () => {
  return (
    <DirectoryContainer>
      {categoryItems.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
