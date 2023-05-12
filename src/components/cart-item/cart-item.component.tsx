import { FC, memo } from "react";
import { CartItem as TCartItem } from "../../store/cart/cart.type";
import {
  CartItemContainer,
  ItemDetails,
  Name,
  Price,
} from "./cart-item.styles";
type CartItemProps = {
  cartItem: TCartItem;
};
const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} * ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
