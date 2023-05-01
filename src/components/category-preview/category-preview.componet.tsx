import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.style";
import { CategoryItem } from "../../store/categories/category.types";
import { useNavigate } from "react-router-dom";

import ProductCart from "../product-card/product-card.component";
import { FC } from "react";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  const navigate = useNavigate();

  const onHandleCategoryTitle = () => navigate(title);
  return (
    <CategoryPreviewContainer>
      <h2 onClick={onHandleCategoryTitle}>
        <Title>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
