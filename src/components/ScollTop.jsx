import { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";
const ScollTop = () => {

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY > 200);
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	},[]);

	const scrollToTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}

  	return (
		<button 
			onClick={scrollToTop}
			id="scrollToTopBtn" 
			className={`fixed bottom-20 right-10 bg-white text-gray-900 p-3 rounded-full 
					shadow-lg transition-all duration-500 w-[48px] h-[48px] cursor-pointer hover:bg-black hover:text-white z-50
					${isVisible ? "block" : "hidden"}`	}>
			<RiArrowUpLine size={24} />
		</button>
  	)
}

export default ScollTop

//window.addEventListener("scroll", ...)	Dùng useEffect để lắng nghe sự kiện scroll
// scrollToTopBtn.classList.remove("hidden") tuong duong setIsVisible(true)
// scrollToTopBtn.classList.add("hidden")	tuonf duong setIsVisible(false)