'use client';
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			const itemId = action.payload._id;
			return {
				...state,
				[itemId]: (state[itemId] || 0) + 1,
			};
		default:
			return state;
	}
};

const CartProvider = ({ children }) => {
	const [cartItems, dispatch] = useReducer(cartReducer, {});

	const addToCart = item => {
		dispatch({ type: 'ADD_TO_CART', payload: item });
	};

	return (
		<CartContext.Provider value={{ cartItems, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
};

export { CartProvider, useCart };
