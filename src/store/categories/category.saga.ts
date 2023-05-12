import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { usdRate } from "../../api/exchangeApi";
import {
  fetchCategoriceSuccess,
  fetchCategoriceFailed,
} from "./category.action";

import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";

export function* fetchCategoriceAsync() {
  try {
    const {
      data: {
        rates: { INR: usdRates },
      },
    } = yield* call(usdRate);
    const categoriesArrayWithUsd = yield* call(getCategoriesAndDocuments);
    const categoriesArray: Category[] = categoriesArrayWithUsd.map(
      (category: Category) => ({
        ...category,
        items: category.items.map((item) => ({
          ...item,
          price: Math.floor(item.price * usdRates),
        })),
      })
    );
    yield* put(fetchCategoriceSuccess(categoriesArray as Category[]));
  } catch (error) {
    yield* put(fetchCategoriceFailed(error as Error));
  }
}

export function* onFetchCategorice() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORICE_START,
    fetchCategoriceAsync
  );
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategorice)]);
}
