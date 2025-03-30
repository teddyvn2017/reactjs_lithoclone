import React from 'react'
import logo_white from '../assets/img/logo_white.png';
import footer_payment from '../assets/img/footer_payment.webp';
import {RiMailSendLine} from 'react-icons/ri';


const Footer = () => {
  return (
    <footer className="w-full bg-[#222]">
		<div className="flex flex-row items-start justify-start py-24 px-8 lg:px-32
					flex-wrap gap-16 lg:gap-24">

			<div className="flex flex-col items-start gap-4 min-w-[130px]">
				<h4 className="mb-4 text-white">Catergories</h4>
				<ul className="flex flex-col gap-4 color__mauxamnhat text-sm min-w-[130px]">
					<li>
						<a href="#" className="transition-colors duration-300 hover:text-white">For men</a>
					</li>   
					<li>
						<a href="#" className="transition-colors duration-300 hover:text-white">For woman</a>
					</li>
					<li>
						<a href="#" className="transition-colors duration-300 hover:text-white">Accessories</a>
					</li>
					<li>
						<a href="#" className="transition-colors duration-300 hover:text-white">Collections</a>
					</li>
				</ul>
			</div>

			<div className="flex flex-col items-start gap-4 min-w-[130px]">
				<h4 className="mb-4 text-white">Company</h4>
				<ul className="flex flex-col gap-4 color__mauxamnhat text-sm w-full">
					<li>
						<a href="#" className="transition-colors duration-300 hover:text-white">About company</a>
					</li>
					<li>
						<a href="#" className="transition-colors duration-300 hover:text-white">Our services</a>
					</li>
					<li>
						<a href="#" className="transition-colors duration-300 hover:text-white">Job opportunities</a>
					</li>
					<li>
						<a href="#" className="transition-colors duration-300 hover:text-white">Contact us</a>
					</li>
				</ul>
			</div>

			<div className="flex flex-col items-start gap-4 min-w-[130px]">
				<h4 className="mb-4 text-white">Customer</h4>
				<ul className="flex flex-col gap-4 color__mauxamnhat text-sm w-full">
					<li>
						<a href="#" className="transition-colors duration-300 hover:text-white">Client support</a>
					</li>
					<li>
						<a href="#" className="transition-colors duration-300 hover:text-white">Pricing packages</a>
					</li>
					<li>
						<a href="#" className="transition-colors duration-300 hover:text-white">Company story</a>
					</li>
					<li>
						<a href="#" className="transition-colors duration-300 hover:text-white">Latest news</a>
					</li>
				</ul>
			</div>

			<div className="flex flex-col items-start gap-4 min-w-[130px]">
				<h4 className="mb-4 text-white">Company</h4>
				<ul className="flex flex-col gap-4 color__mauxamnhat text-sm w-full">
					<li>
						<a href="#" className="transition-colors duration-300 hover:text-white">About company</a>
					</li>
					<li>
						<a href="#" className="transition-colors duration-300 hover:text-white">Our services</a>
					</li>
					<li>
						<a href="#" className="transition-colors duration-300 hover:text-white">Job opportunities</a>
					</li>
					<li>
						<a href="#" className="transition-colors duration-300 hover:text-white">Contact us</a>
					</li>
				</ul>
			</div>

			<div className="flex flex-col items-start gap-4 flex-wrap">
				<h4 className="mb-4 text-white">Subscribe to newsletter</h4>
				<h4 className="text-sm text-wrap color__mauxamnhat">Enter your email address for receiving valuable newsletters.</h4>
				<div className="flex flex-col gap-4 relative items-start py-3 bg-white rounded-md pl-2">
					<input type="email" placeholder="Enter your email address" className="min-w-[260px] border-0" />
					<span className="absolute right-0 pr-2">
                        {/* <i className="ri-mail-send-line"></i> */}
                        <RiMailSendLine />
                    </span>
				</div>
			</div>
		</div>
		
		<div className="px-8 lg:px-32 py-8">
				<div className="border-t-[1px] border-[#a9a9a9] container mx-auto 
						flex flex-col md:flex-row md:justify-between md:flex-wrap items-center 
						gap-4 text-sm color__mauxamnhat pt-8">
					<img className="max-h-[36px] place-self-start" src={logo_white} alt="logo footer" />
					<div>© 2025 Litho is Proudly Powered by ThemeZaa</div>
					<img className="place-self-start" src={footer_payment} alt="payment" />
			</div>
		</div>		
		
	</footer>
  )
}

export default Footer