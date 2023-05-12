import { AnyAction } from "redux";
import { Category, PriceRange } from "./category.types";
import {
  fetchCategoriceFailed,
  fetchCategoriceStart,
  fetchCategoriceSuccess,
  searchStringAction,
  priceRangeAction,
} from "./category.action";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly searchString: string;
  readonly priceRange: PriceRange;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
  searchString: "",
  priceRange: {
    value: "",
    label: "",
    startValue: 0,
    endValue: 2000000,
  },
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: AnyAction
): CategoriesState => {
  if (fetchCategoriceStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (fetchCategoriceSuccess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false };
  }

  if (fetchCategoriceFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }
  if (searchStringAction.match(action)) {
    return { ...state, searchString: action.payload };
  }
  if (priceRangeAction.match(action)) {
    return { ...state, priceRange: action.payload };
  }

  return state;
};
