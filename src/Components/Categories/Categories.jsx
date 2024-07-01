import React from "react";
import Container from "../Shared/Container/Container";
import { categories } from "./categariesData";
import CategorieBox from "./CategorieBox";

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-start justify-between  overflow-x-auto">
        {categories.map((item) => (
          <CategorieBox
            lable={item.label}
            icon={item.icon}
            key={item.icon}
          ></CategorieBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
