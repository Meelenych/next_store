'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { dummyItems } from '../assets/dummy';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	// Initialize your product state here
	const initialProducts = dummyItems;
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('http://localhost:5000/products')
			.then(response => response.json())
			.then(data => {
				console.log('products:', data);
				setProducts(data);
				setLoading(false);
			})
			.catch(error => {
				console.error('Error fetching all products', error);
				throw error; // rethrow the error for further handling
			});
	}, []);

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
