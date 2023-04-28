import { Fragment, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.componet";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import { CategoryContainer } from "./category.style";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [product, setProduct] = useState(categoriesMap[category]);
  useEffect(() => {
    setProduct(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <Fragment>
      <h1>{category.toUpperCase()}</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {product &&
            product.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
