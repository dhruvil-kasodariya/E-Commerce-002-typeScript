import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryItems } from "../../data.js";
import {
  BackgroundImage,
  DirectoryItemContainer,
  DirectoryBodyContainer,
} from "./directory-item.style";

type CategoryItemProps = {
  category: CategoryItems;
};

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBodyContainer>
        <h2> {title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
