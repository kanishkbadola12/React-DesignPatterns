import { ReactNode, createContext, useEffect, useReducer } from "react";
import CartContainer from "./CartContainer";

type DataFetchedAction = {
    type: 'DATA_FETCHED';
    payload: Product[];
}

type AddItemAction = {
    type: 'ADD_ITEM';
    payload: number;
}

type RemoveItemAction = {
    type: 'REMOVE_ITEM';
    payload: number;
}

type CartAction = DataFetchedAction | AddItemAction | RemoveItemAction;

export type Product = {
    id: number,
    title: string,
    total: number,
    quantity: number,
}

export type CartProps = {
    items: Product[];
    addItem: (id: number) => void,
    removeItem: (id: number) => void,
}

export const CartContext = createContext({
    items: [],
    addItem: (id: number) => { },
    removeItem: (id: number) => { },
} as CartProps);

const cartReducer = (state: CartProps, action: CartAction) => {
    switch (action.type) {
        case 'DATA_FETCHED':
            return {
                ...state,
                items: action.payload
            }
        case 'ADD_ITEM':
            const addedIdx = state.items.findIndex(item => item.id === action.payload);
            const addedItem = state.items[addedIdx];

            const updatedAddedItem = {
                ...addedItem,
                total: addedItem.total + Math.floor(addedItem.total / addedItem.quantity),
                quantity: addedItem.quantity + 1
            };

            return {
                ...state,
                items: [
                    ...state.items.slice(0, addedIdx),
                    updatedAddedItem,
                    ...state.items.slice(addedIdx + 1)
                ]
            };
        case 'REMOVE_ITEM':
            const removedIdx = state.items.findIndex(item => item.id === action.payload);
            const removedItem = state.items[removedIdx];

            if (removedItem.quantity === 1) return state;
            
            const updatedRemovedItem = {
                ...removedItem,
                total: removedItem.total - Math.floor(removedItem.total / removedItem.quantity),
                quantity: removedItem.quantity - 1
            };
            
            return {
                ...state,
                items: [
                    ...state.items.slice(0, removedIdx),
                    updatedRemovedItem,
                    ...state.items.slice(removedIdx + 1)
                ]
            }
        default:
            return state;
    }
}

const Cart = (): ReactNode => {
    const addItem = (id: number) => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            payload: id
        });
    }

    const removeItem = (id: number) => {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            payload: id
        });
    }

    const intialState: CartProps = {
        items: [],
        addItem,
        removeItem,
    }

    const [cartState, dispatchCartAction] = useReducer(cartReducer, intialState);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/carts/1');
            const data = await response.json();

            dispatchCartAction({
                type: 'DATA_FETCHED',
                payload: data.products
            });

        } catch (err) { }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <CartContext.Provider value={cartState}>
            <CartContainer />
        </CartContext.Provider>
    )
}

export default Cart;