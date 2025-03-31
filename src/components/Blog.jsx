import React from 'react'
import blog1 from '../assets/img/blog01.webp';
import blog2 from '../assets/img/blog02.webp';
import blog3 from '../assets/img/blog03.webp';
import blog4 from '../assets/img/blog04.webp';

const Blog = () => {
  return (
    <section className="w-full py-16 px-8 border-b-[1px] border-[#e9e9e9] bg-white">			
			<div className="flex flex-col items-center gap-4">
				<h4 className="uppercase font-normal text-base color__maudo">Update Blog</h4>
				<h2 className="lg:text-5xl text-4xl color__mauden font-semibold">Latest blogs</h2>
			</div>

			<div className="flex flex-row justify-center flex-wrap items-center gap-8 mt-12 px-8">
				<div className="flex-col gap-2 w-min">
					<img 
						className="max-w-[280px] md:max-w-[300px] lg:max-w-[320px] rounded-sm row-span-2"
						src={blog1} alt="blog" />

					<div className="mt-[12px] items-start">
						<a href="#" className="row-span-2 row-start-2 text-base md:text-xl transition-colors duration-300 hover:text-[#f06f42] leading-5">
							The best way to predict the future is to create it
						</a>
						<article className=" mt-1 text-gray-700 text-sm lg:text-bases">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </article>
					</div>
				</div>

				<div className="flex-col gap-2 w-min">
					<img className="max-w-[280px] md:max-w-[300px] lg:max-w-[320px]" src={blog2} alt="blog" />
					<div className="mt-[12px] items-start">
						<a href="#" className=" text-base md:text-xl transition-colors duration-300 hover:text-[#f06f42] leading-5">
							Winners make a habit of facturing positive
						</a>
						<article className=" mt-1 text-gray-700 text-sm lg:text-bases">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </article>
					</div>
				</div>

				<div className="flex-col gap-2 w-min">
					<img className="max-w-[280px] md:max-w-[300px] lg:max-w-[320px]" src={blog3} alt="blog" />
					<div className="mt-[12px] items-start">
						<a href="#" className=" text-base md:text-xl transition-colors duration-300 hover:text-[#f06f42] leading-5">
							Computers are to design as microwaves are to cooking
						</a>
						<article className=" mt-1 text-gray-700 text-sm lg:text-bases">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </article>
					</div>
				</div>

				<div className="flex-col gap-2 w-min">
					<img 
						className="max-w-[280px] md:max-w-[300px] lg:max-w-[320px]" src={blog4} alt="blog" />
					<div className="mt-[12px] items-start">						
						<a href="#" className="  text-base md:text-xl transition-colors duration-300 hover:text-[#f06f42] leading-5">A company is only as good as the people it keeps</a>													
						<article className="row-span-2 mt-1 text-gray-700 text-sm lg:text-bases">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </article>
					</div>
				</div>
			</div>
		</section>
  )
}

export default Blog