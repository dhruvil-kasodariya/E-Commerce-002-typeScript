import { CategoryItem } from "../categories/category.types";
export enum CART_ACTION_TYPE {
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
  IS_CART_OPEN = "cart/IS_CART_OPEN",
  SET_CART_COUNT = "cart/SET_CART_COUNT",
  SET_CART_TOTAL = "cart/SET?CART_TOTAL",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
