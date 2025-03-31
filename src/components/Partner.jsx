import React from 'react'
import logo1 from '../assets/img/logo1.jpg';
import logo2 from '../assets/img/logo2.jpg';
import logo3 from '../assets/img/logo3.jpg';
import logo4 from '../assets/img/logo4.jpg';

const Partner = () => {
  return (
    <section class="bg-white w-full">
			<div class="container max-w-[800px] flex items-center justify-around 
						flex-row md:gap-12 gap-16 lg:gap-16 px-8 py-16 md:py-10 mx-auto flex-wrap">
				<img src={logo1} alt="logo01" />
				<img src={logo2} alt="logo02" />
				<img src={logo3} alt="logo03" />
				<img src={logo4} alt="logo04" />
			</div>
		</section>
  )
}

export default Partner