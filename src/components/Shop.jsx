import React from 'react';
import home_shop01 from '../assets/img/home_shop01.webp';
import home_shop02 from '../assets/img/home_shop02.webp';
import home_shop03 from '../assets/img/home_shop03.webp';
import { RiArrowRightLine } from 'react-icons/ri';

const Shop = () => {
    return (
        <section className="home__shop bg-white w-full py-12">
			<div className="flex flex-col items-center justify-between
				md:flex md:flex-row md:flex-wrap 
				md:justify-center
				lg:justify-center
				xl:gap-12 xl:place-content-around
				gap-14 py-8 px-8 mx-auto xl:px-24">
					
					<div className="flex flex-row items-center group relative cursor-pointer">						
						<img className="max-w-[200px] md:max-w-[220px] transition-all duration-300 
									group-hover:opacity-50 group-hover:scale-90 relative z-10"
							src={home_shop01} alt="home_shop"  />
						
						{/* Nút mũi tên */}
						<div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
							<div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-[110px]">
								{/* <i className="ri-arrow-right-long-line text-white"></i> */}
                                <RiArrowRightLine className="text-white" />
							</div>
						</div>

						<div className="flex flex-col gap-0 ml-[-16px] relative z-12">
							<h3 className="color__maudo text-base mr-4 pb-2">INNOVATIVE</h3>
							<h2 className="color__mauden text-3xl mr-4">Modern</h2>
							<h3 className="color__mauden text-base font-semibold mr-4">chair</h3>
						</div>	
						
					</div>

					<div className="flex flex-row items-center group relative cursor-pointer">
						<img className="max-w-[200px] md:max-w-[220px] transition-all duration-300 
						group-hover:opacity-50 group-hover:scale-90 relative z-10"
							src={home_shop02} alt="home_shop"  />
						
						{/* Nút mũi tên */}
						<div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
							<div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-[110px]">
								{/* <i className="ri-arrow-right-long-line text-white"></i> */}
                                <RiArrowRightLine className="text-white" />
							</div>
						</div>

						<div className="flex flex-col gap-0 ml-[-16px] relative z-12">
							<h3 className="color__maudo text-base mr-4 pb-2">TRENDING</h3>
							<h2 className="color__mauden text-3xl mr-4">classNameic</h2>
							<h3 className="color__mauden text-base font-semibold mr-4">sofaset</h3>
						</div>	
					</div>

					<div className="flex flex-row items-center group relative cursor-pointer">
						<img className="max-w-[200px] md:max-w-[220px] transition-all duration-300 
								group-hover:opacity-50 group-hover:scale-90 relative z-10"
                            src={home_shop03} alt="home_shop"  />

						{/*  Nút mũi tên */}
						<div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
							<div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-[110px]">
								{/* <i className="ri-arrow-right-long-line text-white"></i> */}
                                <RiArrowRightLine className="text-white" />
							</div>
						</div>

						<div className="flex flex-col gap-0 ml-[-16px] relative z-12">
							<h3 className="color__maudo text-base mr-4 pb-2">DESIGNER</h3>
							<h2 className="color__mauden text-3xl mr-4">Wooden</h2>
							<h3 className="color__mauden text-base font-semibold mr-4">stools</h3>
						</div>	
					</div>
			</div>
		</section>
    )
}

export default Shop