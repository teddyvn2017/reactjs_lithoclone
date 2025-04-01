import { useState, useEffect } from "react";
import logo_orange from '../assets/img/logo_orange.webp';
import {
	RiSearchLine,
	RiShoppingBag3Line,
	RiCloseCircleLine,
	RiArrowDropDownLine,
	RiMenu3Line,
	RiCloseLine,
  } from "react-icons/ri";

import { useSelector } from "react-redux";	
import { Link } from "react-router-dom";

const Header = () => {

	const [isScrolled, setIsScrolled] = useState(false);	
	const [isMenuOpen, setIsMenuOpen] = useState(false);	
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

	const cartItems = useSelector((state) => state.cart.cartItems || []); 
	const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		}
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, []);


	return (
		<header className={`fixed w-full top-0 left-0 z-50 py-4 min-h-[68px] transition-colors duration-300 px-8
			${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
			<nav className="mx-auto flex flex-row justify-between items-center">
				{/*  chieu cao 36 + 16*2 = 68px */}
				<Link to="/"><img src={logo_orange} alt="logo" className="max-h-[36px]" /></Link>				
				
				{/* Menu cho Desktop */}
				<div className="flex flex-row gap-8">				
					<div className="flex flex-row gap-8">
						<ul className="hidden md:flex gap-8">
							<li>
								<a href="/" className="link-menu active">Home</a>
							</li>
							<li><a href="#" className="link-menu">About Us</a></li>				
							<li className="relative group" id="products-menu">
								<a href="#"
									id="products-link"
									className="link-menu flex items-center gap-2" role="button">
								Products
								
								<RiArrowDropDownLine id="dropdown-icon" className="text-lg transform transition-transform duration-300 group-hover:rotate-180" />
								</a>						  
								<ul id="submenu-desktop" className="flex flex-col gap-4 absolute left-0 mt-4 w-40 bg-white 
										shadow-lg py-4 px-8 pb-4
										transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible
										focus-within:opacity-100 focus-within:visible z-20"> 
								<li><a href="#" className="hover:text-[#f06f42] transition-colors duration-300">Chair</a></li>
								<li><a href="#" className="hover:text-[#f06f42] transition-colors duration-300">Table</a></li>
								<li><a href="#" className="hover:text-[#f06f42] transition-colors duration-300">Lamp</a></li>
								</ul>
							</li>
					
							<li><a href="#" className="link-menu">Contact</a></li>
						</ul>
						{/* ri-{tên-icon}-{kiểu-icon} → Ri{TênIcon}{KiểuIcon}  */}
						{/* <i class="ri-search-line"></i>  */}
						{/* vd:RiSearchLine */}
						<div className="flex flex-row gap-4">
							<div className="flex flex-row gap-6 text-[20px]">							
								<RiSearchLine id="btnSearch" className="cursor-pointer" />
								<div className="shopping-bag-container">
									<Link to="/gio-hang">
										<RiShoppingBag3Line id="btnCart" className="shopping-bag cursor-pointer" />
									</Link>
									{

										totalQuantity > 0 && (
											<span className="cart-count">{totalQuantity}</span>
										)
									}
									{/* <span className="cart-count">0</span>	 */}
								</div>
							</div>
					
							{/* <div className="md:hidden relative w-8 h-8 cursor-pointer flex items-center justify-center" id="menu-toggle">
								<div className="absolute bg-black w-3 h-0.5 top-2 transition-all duration-300" id="bar-top"></div>
								<div className="absolute bg-black w-6 h-0.5 transition-all duration-300" id="bar-middle"></div>
								<div className="absolute bg-black w-3 h-0.5 bottom-2 transition-all duration-300" id="bar-bottom"></div>
							</div> */}

							{/* Nút mở menu */}

							<button 
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="md:hidden p-2 text-xl"
							>
								{isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
							</button>		

							{/* form search */}
							<div
								id="frmSearch" 
								className="fixed flex-col gap-8 inset-0 bg-[#fff] opacity-0 
									transition-all -translate-y-full duration-500 h-1/3 w-full overflow-hidden ">
								
								<div className="flex flex-col items-center justify-center 	
											gap-4 px-8 py-12 relative size-max mx-auto max-w-[90%]">
									<h4 className="text-base text-gray-950 text-center">What are you looking for?</h4>
									<div className="relative">
										<input
											type="text"
											placeholder="Enter your keywords..."
											className="w-full h-12 pl-4 pr-10 border-b border-gray-400 focus:outline-none text-lg"
										/>
										<button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
											<i className="ri-search-line text-xl"></i>
										</button>									
									</div>
									{/* <i id="btnClose" className="ri-close-circle-line absolute top-4 right-0 cursor-pointer text-2xl"></i> */}
									<RiCloseCircleLine id="btnClose" className="absolute top-4 right-0 cursor-pointer text-2xl" />
								</div>																						
							</div>
						</div>
					</div>								
				</div>									
											
				{/* Menu cho Mobile */}
				<div
					className={`menu__mobile md:hidden fixed top-[68px] right-0 bg-white w-2/3 transition-all 
								duration-500 ease-in-out transform uppercase h-screen shadow-lg p-4
								${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
				>
					<ul className="flex flex-col md:flex-row gap-8 shadow-[rgba(0,0,0,0.1)_-4px_0px_10px] py-4 pl-8">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">About Us</a>
						</li>
						<li>
							<div 
								onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
								id="mobile-products-toggle" 
								className="flex items-center cursor-pointer gap-8">
								
								<a href="#" role="button">Products</a>		
								<RiArrowDropDownLine id="mobile-arrow-product" 
									className={`text-xl transition-transform duration-300 ${isSubMenuOpen ? "rotate-180" : "rotate-0"}`} />
							</div>
							{/*  Submenu  */}
							<ul id="mobile-submenu"
								className={`flex-col pl-4 mt-2 space-y-2 transition-all duration-500 ${isSubMenuOpen ? "block" : "hidden"}`}>
								<li><a href="#" className="block py-1 hover:text-blue-500">Chair</a></li>
								<li><a href="#" className="block py-1 hover:text-blue-500">Table</a></li>
								<li><a href="#" className="block py-1 hover:text-blue-500">Lamp</a></li>
							</ul>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
  )
}

export default Header