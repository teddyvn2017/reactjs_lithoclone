import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScollTop';

const Layout = ({children}) => {
  	return (
		<>
			<Header />
				<main>{children}</main>
			<Footer />
			<ScrollToTop />
		</>
  )
}

export default Layout