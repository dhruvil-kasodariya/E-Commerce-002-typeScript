import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {
  fetchCategoriceSuccess,
  fetchCategoriceFailed,
} from "./category.action";

import { CATEGORIES_ACTION_TYPES } from "./category.types";

export function* fetchCategoriceAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriceSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriceFailed(error));
  }
}

export function* onFetchCategorice() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORICE_START,
    fetchCategoriceAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategorice)]);
}
