import PropTypes from 'prop-types';

import { useCartProvider } from '../hooks/useCartProvider';
import { CartContext } from './';


const CART_INITIAL_STATE = {
    items: []
}


export const CartProvider = ({ children }) => {

    const {
        addItem,
        addItemQuantity,
        removeItem,
        removeItemQuantity,
        resetCart,
        showCartWidget,
        state,
        toggleShowCartWidget
    } = useCartProvider(CART_INITIAL_STATE);

    return (
        <CartContext.Provider value={{
            ...state,
            addItem,
            removeItem,
            resetCart,
            showCartWidget,
            toggleShowCartWidget,
            addItemQuantity,
            removeItemQuantity
        }}>
            { children }
        </CartContext.Provider>
    )
};


CartProvider.propTypes = {
    children: PropTypes.element.isRequired
}