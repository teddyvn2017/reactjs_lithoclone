import React from 'react'

const ScollTop = () => {
  return (
    <button id="scrollToTopBtn" class="hidden fixed bottom-20 right-10 bg-white text-gray-900 p-3 rounded-full 
		shadow-lg transition-all duration-500 w-[48px] h-[48px] cursor-pointer hover:bg-black hover:text-white z-50">
        <i class="ri-arrow-up-line"></i>
    </button>
  )
}

export default ScollTop