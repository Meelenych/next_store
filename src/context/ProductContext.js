'use client';
import React, { createContext, useContext, useState } from 'react';
import { dummyItems } from '../assets/dummy';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	// Initialize your product state here
	const initialProducts = dummyItems;
	const [products, setProducts] = useState(initialProducts);

	return (
		<ProductContext.Provider value={{ products, setProducts }}>
			{children}
		</ProductContext.Provider>
	);
};

const useProduct = () => {
	const context = useContext(ProductContext);
	if (!context) {
		throw new Error('useProduct must be used within a ProductProvider');
	}
	return context;
};

export { ProductProvider, useProduct };
