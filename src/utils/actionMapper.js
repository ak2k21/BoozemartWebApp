import { addToCart } from "../screens/home/homeActions";

export const actionMapper = {
    addToCart: (props, inputValue) => addToCart(props, inputValue)
}