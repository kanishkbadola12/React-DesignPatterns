import { useContext } from "react";
import { CartContext, Product} from "./Cart";

type CartItemProps = { 
    item: Product;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const { addItem, removeItem } = useContext(CartContext);
    
    return (
        <div className="cart-item">
            <div>{item.title}</div>
            <div>{Math.floor(item.total)}</div>
            <div className="cart-item-cta">
                <button onClick={() => addItem(item.id)}>+</button>
                <div>{item.quantity}</div>
                <button onClick={() => removeItem(item.id)}>-</button>
            </div>
        </div>
    )
}

export default CartItem;