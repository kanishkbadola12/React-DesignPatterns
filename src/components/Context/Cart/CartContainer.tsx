import { ReactNode, useContext } from "react";
import { CartContext, Product } from "./Cart";
import CartItem from "./CartItem";

const CartContainer = (): ReactNode => {
    const { items } = useContext(CartContext);

    const calculateTotalPrice = (items: Product[]) => {
        return Math.floor(items.reduce((acc, item) => acc + item.total, 0));
    }

    return (
        <div className="cart-container">
            <div>Total price: {calculateTotalPrice(items)}</div>
            {items.map((item) => {
                return <CartItem key={item.id} item={item}  />
            })}
        </div>
    )

}

export default CartContainer;