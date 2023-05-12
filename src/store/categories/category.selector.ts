import { createSelector } from "reselect";
import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";
import { RootState } from "../store";

const selectCategoryReducer = (state: RootState): CategoriesState =>
  state.categories;

//memoririce
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMapzero = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectSearchString = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.searchString;
  }
);

export const selectSelectedPriceRange = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.priceRange;
  }
);

export const selectCategoriesMapWithSearch = createSelector(
  [selectCategoriesMapzero, selectSearchString],
  (categoriesWithSearch, searchString) =>
    Object.keys(categoriesWithSearch).length !== 0
      ? {
          hats: categoriesWithSearch.hats.filter((item) =>
            item.name.startsWith(searchString)
          ),
          jackets: categoriesWithSearch.jackets.filter((item) =>
            item.name.startsWith(searchString)
          ),
          mens: categoriesWithSearch.mens.filter((item) =>
            item.name.startsWith(searchString)
          ),
          sneakers: categoriesWithSearch.sneakers.filter((item) =>
            item.name.startsWith(searchString)
          ),
          womens: categoriesWithSearch.womens.filter((item) =>
            item.name.startsWith(searchString)
          ),
        }
      : categoriesWithSearch
);

export const selectCategoriesMapWithPriceRange = createSelector(
  [
    selectCategoriesMapWithSearch,
    (state: RootState) => state.categories.priceRange,
  ],
  (categoriesWithPriceRange, priceRange) => {
    return priceRange.value.length
      ? priceRange.value === "clear"
        ? categoriesWithPriceRange
        : {
            hats: categoriesWithPriceRange.hats.filter(
              (item) =>
                item.price >= priceRange.startValue &&
                item.price <= priceRange.endValue
            ),
            jackets: categoriesWithPriceRange.jackets.filter(
              (item) =>
                item.price >= priceRange.startValue &&
                item.price <= priceRange.endValue
            ),
            mens: categoriesWithPriceRange.mens.filter(
              (item) =>
                item.price >= priceRange.startValue &&
                item.price <= priceRange.endValue
            ),
            sneakers: categoriesWithPriceRange.sneakers.filter(
              (item) =>
                item.price >= priceRange.startValue &&
                item.price <= priceRange.endValue
            ),
            womens: categoriesWithPriceRange.womens.filter(
              (item) =>
                item.price >= priceRange.startValue &&
                item.price <= priceRange.endValue
            ),
          }
      : categoriesWithPriceRange;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategoriesMapWithPriceRange],
  (categoriesMap) => categoriesMap
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
