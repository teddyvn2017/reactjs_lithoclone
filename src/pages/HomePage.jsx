import React from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Shop from '../components/Shop';
import Products from '../components/Products';
const HomePage = () => {
	return (
		<Layout>
			<Hero />
			<Shop />
			<Products />
		</Layout>
	)
}

export default HomePage