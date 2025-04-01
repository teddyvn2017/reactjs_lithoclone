import React from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Shop from '../components/Shop';
import Products from '../components/Products';
import SaleOff from '../components/SaleOff';
import Blog from '../components/Blog';
import Partner from '../components/Partner';
const HomePage = () => {

	useEffect(() => {
        document.title = "Trang chủ - Litho Furniture";
        // const metaDesc = document.querySelector('meta[name="description"]');
        // if (metaDesc) {
        //     metaDesc.content = "Chung toi cung cap noi that gia re, phong cach Chau Au, ben gi";
        // } else {
        //     const newMeta = document.createElement('meta');
        //     newMeta.name = "description";
        //     newMeta.content = "Chung toi cung cap noi that gia re, phong cach Chau Au, ben gi";
        //     document.head.appendChild(newMeta);
        // }
    },);

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