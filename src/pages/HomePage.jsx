import React from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Shop from '../components/Shop';
const HomePage = () => {
	return (
		<Layout>
			<Hero />
			<Shop />
		</Layout>
	)
}

export default HomePage