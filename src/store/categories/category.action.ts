import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import {
  CATEGORIES_ACTION_TYPES,
  Category,
  PriceRange,
} from "./category.types";

export type FetchcategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORICE_START>;

export type FetchCategoriceSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORICE_SUCCESS,
  Category[]
>;

export type FetchCategoriceFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORICE_FAILED,
  Error
>;

export type SearchStringAction = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.SEARCH_STRING_SUCCESS,
  string
>;

export type PriceRangeAction = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.SELECTED_PRICE_RANGE,
  PriceRange
>;

export const fetchCategoriceStart = withMatcher(
  (): FetchcategoriesStart =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORICE_START)
);

export const fetchCategoriceSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriceSuccess =>
    createAction(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORICE_SUCCESS,
      categoriesArray
    )
);

export const fetchCategoriceFailed = withMatcher(
  (error: Error): FetchCategoriceFailed =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORICE_FAILED, error)
);

export const searchStringAction = withMatcher(
  (searchString: string): SearchStringAction =>
    createAction(CATEGORIES_ACTION_TYPES.SEARCH_STRING_SUCCESS, searchString)
);

export const priceRangeAction = withMatcher(
  (priceRange: PriceRange): PriceRangeAction =>
    createAction(CATEGORIES_ACTION_TYPES.SELECTED_PRICE_RANGE, priceRange)
);
