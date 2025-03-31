import React from 'react'
import saleoff1 from '../assets/img/saleoff01.png';
import saleoff2 from '../assets/img/saleoff02.png';
const SaleOff = () => {
  return (
    <section className="w-full py-24 bg-[#fff9f6]">
			<div className="flex flex-row flex-wrap items-center justify-center">
				<div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:w-1/2 py-16 px-8">
					<img 
						className="max-w-[280px] lg:max-w-[310px] w-full"
						src={saleoff1} alt="sale off wooden armchair" />
					<div className="flex flex-col md:gap-4 gap-1 items-start">
						
						<h4 className="text-sm md:text-base uppercase font-medium flat__off color__maudo">Flat 50% off</h4>
						<h2 className="color__mauden text-4xl lg:text-5xl mt-2 md:mt-4 font-normal">Wooden</h2>
						<h3 className="font-semibold color__mauden text-2xl">armchair</h3>
						<button id="btnDiscover" className="discover-button mt-2 text-[12px] md:text-sm lg:text-base px-4 lg:px-5 py-2.5">
							DISCOVER NOW
						</button>
					</div>
				</div>
				
				<div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:w-1/2 bg-[#f7edee] py-16 px-8 w-full">
					<img 
						className="max-w-[280px] lg:max-w-[310px] w-full"
						src={saleoff2} alt="sale off wooden armchair" />
					<div className="flex flex-col gap-1 items-start">						
						<h4 className="text-sm md:text-base uppercase font-medium flat__off color__maudo">Flat 40% off</h4>
						<h2 className="color__mauden text-4xl lg:text-5xl mt-2 md:mt-4 font-normal">Modern</h2>
						<h3 className="font-semibold color__mauden text-2xl">retro</h3>
						<h3 className="font-semibold color__mauden text-2xl">stool</h3>
						<button id="btnDiscover" className="discover-button mt-2 text-[12px] md:text-sm lg:text-base px-4 lg:px-5 py-2.5">
							DISCOVER NOW
						</button>
					</div>
				</div>
			</div>
		</section>
  )
}

export default SaleOff