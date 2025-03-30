import React, {useEffect, useState,useRef } from 'react'
import ghe1 from '../assets/img/ghe1.png';
import ghe2 from '../assets/img/ghe2.png';
import ghe3 from '../assets/img/ghe3.png';
import { RiCircleFill,RiArrowRightLine,RiArrowLeftLine } from 'react-icons/ri';
import gsap from 'gsap';


const imgGhe = [ghe1,ghe2,ghe3];

const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const imgRef = useRef(null);

    useEffect(() => {
        // Khi currentIndex thay đổi, thực hiện animation fade  
        gsap.fromTo(imgRef.current, 
            {opacity: 0,scale:0.95},{opacity: 1,scale:1,duration: 1, ease: "power2.out"});
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imgGhe.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imgGhe.length) % imgGhe.length);
    };

    return (
        <section className="hero pt-[80px] pb-8 md:pb-[80px] font-roboto overflow-hidden">
			<div 
				className="mx-auto flex flex-col gap-8 
						justify-center items-center px-8 pt-16						
						md:flex-row relative">
						{/* chú ý lg:min-w-[480px] để hiệu ứng không bị giật lag thì cố định chiều rộng */}
				<div className="text-center min-h-[180px] md:w-auto md:text-left md:ml-auto md:justify-end 
							lg:min-w-[400px]">
					<h4 className="text-neutral-500 text-[12px] 
							uppercase font-light md:text-xl lg:mb-8" id="heading">Decoration Design</h4>
					<h1 id="title" className="text-4xl text-neutral-800 font-medium pt-2 md:font-bold md:text-5xl lg:text-6xl xl:text-8xl">Woodend</h1>
					<h2 id="subtitle" className="text-3xl text-neutral-800 md:text-4	xl lg:text-5xl mt-2">lithology</h2>					
					{/* shadow-[0px_10px_20px_rgba(0,0,0,0.1)] : x y blur color */}
					<button id="btnDiscover" className="lg:mt-10 text-[12px] px-4 py-3 bg-white text-gray-700 font-normal 
						shadow-[0px_10px_20px_rgba(0,0,0,0.1)]  
						hover:shadow-[0px_15px_40px_rgba(0,0,0,0.15)] 
						w-fit transition-shadow duration-300 mt-4 md:text-sm cursor-pointer">
						{/* DISCOVER NOW */}
					</button>					
				</div>
	
				<div className="relative w-full flex justify-center items-center min-h-[480px] md:w-1/2">
					{/*  hình tròn nhỏ  */}
					<div id="small_circle" className="rounded-full absolute z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 
							min-w-[340px] min-h-[340px] md:min-w-[380px] md:min-h-[380px]
							lg:min-w-[420px] lg:min-h-[420px] xl:min-w-[500px] xl:min-h-[500px]
							bg__hongnhat"></div>					
					{/*  hình tròn lớn  */}
    				<div id="large_circle" className="absolute bottom-[-620px] left-1/2 -translate-x-1/2 w-[940px] h-[940px] 
								linear__gradient1 rounded-full -z-10 lg:translate-x-0
								md:w-[740px] md:h-[740px] md:top-[-200px] md:left-[520px]
								lg:w-[1400px] lg:h-[1400px]								
								lg:top-[-340px] lg:left-[180px]
								xl:left-[250px]
								2xl:left-[310px]
								">
					</div>
					<div className="absolute z-[13] flex flex-col w-[240px] md:w-[260px] xl:w-[360px] justify-center">
						
						<img 
                            ref = {imgRef}
							src={imgGhe[currentIndex]} alt="ghe" id="gheImage" />

							{/* hình tròn giá */}
							<div id="price_circle" className="rounded-full absolute top-12 right-0 bg__maudo 
								text-white text-base text-center w-[70px] h-[70px] lg:w-[90px] lg:h-[90px]
								z-[12]	md:right-0 md:top-10 lg:top-[-2rem] lg:right-[-1rem]
								lg:text-xl flex flex-col justify-center uppercase leading-5">
								<span className="md:text-sm lg:text-base">Only</span>
								<span className="md:text-2xl lg:text-3xl">$89</span>
							</div>
					</div>					
				</div>
				
				<div id="prev" className="prev-btn ml-4 lg:ml-8" onClick={handlePrev}>										
                    <RiArrowLeftLine />
				</div>
				<div id="next" className="next-btn mr-4 lg:mr-8" onClick={handleNext}>
                    <RiArrowRightLine />
				</div>
				<div id="pagination" className="absolute bottom-0 md:bottom-[-24px] left-1/2 -translate-x-1/2 flex flex-grow gap-4">					
                    {/* <RiCircleFill classNameName="active" />
                        <RiCircleFill classNameName="text-gray-500" />
                        <RiCircleFill classNameName="text-gray-500" /> 
                        gạch chân không quan tâm giá trị tên file ảnh chỉ quan tâm chỉ số index thứ tự của ảnh
                    
                    */}

                    {
                        imgGhe.map((_, index) => (
                            <RiCircleFill key={index} className={index === currentIndex ? "active" : "text-gray-500"} />
                    ))}
				</div>
			</div>
		</section>
    )
}

export default Hero