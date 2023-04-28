import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";

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
