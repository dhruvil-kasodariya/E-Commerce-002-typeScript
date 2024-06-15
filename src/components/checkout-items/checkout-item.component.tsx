import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { CartItem as TCartItem } from "../../store/cart/cart.type";
import {
  RemoveButton,
  Value,
  Arrow,
  Quantity,
  ItemLeble,
  ImageContainer,
  CheckoutItemContainer,
} from "./checkout-item.styles";
import { FC, memo } from "react";

type CheckOutProps = {
  cartItem: TCartItem;
};

const CheckoutItem: FC<CheckOutProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <ItemLeble>{name}</ItemLeble>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>

        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <ItemLeble>{price}</ItemLeble>
      <ItemLeble>{price * quantity}</ItemLeble>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
