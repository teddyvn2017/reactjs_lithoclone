import React from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Shop from '../components/Shop';
import Products from '../components/Products';
import SaleOff from '../components/SaleOff';
import Blog from '../components/Blog';
import Partner from '../components/Partner';
const HomePage = () => {
	return (
		<Layout>
			<Hero />
			<Shop />
			<Products />
			<SaleOff />
			<Blog />
			<Partner />
		</Layout>
	)
}

export default HomePage