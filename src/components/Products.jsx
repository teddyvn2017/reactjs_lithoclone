import React from 'react'
import { RiShoppingBag3Line} from "react-icons/ri";
const Products = () => {

    const products  = [
        { img1: 'asset/img/decor_classic_01.jpg', img2: 'asset/img/decor_classic_02.jpg', title: 'Hanging Light', price: '$20', salePrice: '$12', sale: true },
        { img1: 'asset/img/decor_classic_03.jpg', img2: 'asset/img/decor_classic_04.jpg', title: 'Study Lamp', price: '$20', salePrice: '$12', sale: false },
        { img1: 'asset/img/decor_classic_05.jpg', img2: 'asset/img/decor_classic_06.jpg', title: 'Classic Lamp', price: '$20', salePrice: '$12', sale: true },
        { img1: 'asset/img/decor_classic_07.jpg', img2: 'asset/img/decor_classic_08.jpg', title: 'Brown Crystal', price: '$20', salePrice: '$12', sale: false },
        { img1: 'asset/img/decor_classic_09.jpg', img2: 'asset/img/decor_classic_10.jpg', title: 'Wooden Stool', price: '$20', salePrice: '$12', sale: true },
        { img1: 'asset/img/decor_classic_11.jpg', img2: 'asset/img/decor_classic_12.jpg', title: 'Aether Vase', price: '$20', salePrice: '$12', sale: false },
        { img1: 'asset/img/decor_classic_13.jpg', img2: 'asset/img/decor_classic_14.jpg', title: 'Wooden Bowl', price: '$20', salePrice: '$12', sale: true },
        { img1: 'asset/img/decor_classic_15.jpg', img2: 'asset/img/decor_classic_16.jpg', title: 'Top With Pleated', price: '$20', salePrice: '$12', sale: false },
        { img1: 'asset/img/decor_classic_17.jpg', img2: 'asset/img/decor_classic_18.jpg', title: 'Fabric Table Lamp', price: '$20', salePrice: '$12', sale: true },
        { img1: 'asset/img/decor_classic_19.jpg', img2: 'asset/img/decor_classic_20.jpg', title: 'Texture Mirror', price: '$20', salePrice: '$12', sale: false },
        { img1: 'asset/img/decor_classic_21.jpg', img2: 'asset/img/decor_classic_22.jpg', title: 'Vintage Chair', price: '$25', salePrice: '$18', sale: true },
        { img1: 'asset/img/decor_classic_23.jpg', img2: 'asset/img/decor_classic_24.jpg', title: 'Modern Shelf', price: '$30', salePrice: '$22', sale: false },
        { img1: 'asset/img/decor_classic_25.jpg', img2: 'asset/img/decor_classic_26.jpg', title: 'Sculpture', price: '$35', salePrice: '$28', sale: true },
        { img1: 'asset/img/decor_classic_27.jpg', img2: 'asset/img/decor_classic_28.jpg', title: 'Table Lamp', price: '$25', salePrice: '$20', sale: false },
        { img1: 'asset/img/decor_classic_29.jpg', img2: 'asset/img/decor_classic_30.jpg', title: 'Wall Clock', price: '$30', salePrice: '$22', sale: true },
    ];

    return (
        <section className="w-full border-t-[1px] border-[#e2e2e2] bg-white pt-16">
			<div className="mt-14">
				<h4 className="color__maudo text-base mb-2 text-center">LIVING INTERIOR</h4>
				<h2 className="color__mauden text-3xl text-center font-semibold">New products</h2>
			</div>
						
			<div className="flex items-center justify-center gap-8 flex-row flex-wrap md:justify-center px-8	py-16">
				{/* item  */}

                {
                    products.map((imageItems,index) => (
                        <div class="flex flex-col items-center">
					    {/* Ảnh và nút, nhớ thêm overflow-hidden để không thấy button add to cart đi từ dưới lên */}
					        <div class="relative cursor-pointer group w-full max-w-[300px] lg:max-w-[260px] xl:max-w-[280px] overflow-hidden">
						{/*  ảnh chính  */}
                            <img class="w-full object-cover will-change-opacity transition-opacity duration-400 group-hover:opacity-0" 
                                src="asset/img/decor_classic_05.jpg" alt="Hanging Light" /> 
                            <img class="absolute inset-0 w-full h-auto object-cover opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                                src="asset/img/decor_classic_06.jpg" alt="Hanging Light" />
						
                            {/* <!-- add to cart --> */}
                            <div class="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-3 opacity-0 
                                        translate-y-full transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                <i class="ri-shopping-bag-3-line"></i> ADD TO CART
                            </div>
                            
                            {/* <!-- sale off --> */}
                            <div class="absolute left-[1rem] top-[1rem] uppercase text-white text-[10px]
                                        px-2 py-1 bg__mauxanhduong z-12 font-medium rounded-sm">
                                Sale!
                            </div>
					    </div>
				
                            {/* <!-- Thông tin sản phẩm --> */}
                        <div class="py-4 text-center">
                            <h4 class="text-sm text-black py-2 font-medium">Classic Lamp</h4>
                            <div class="flex flex-row justify-between">
                                <h5 class="text-sm text-gray-500 line-through">$20</h5>
                                <h5 class="text-sm text-gray-500">$12</h5>
                            </div>                                
                            </div>
				        </div>
                    ))
                }
								
			</div>			
			
			<div className="flex flex-col items-center">					
				<a href="#" className="border border-[#222] px-6 py-2 text-[#222] text-base uppercase tracking-wider
									transition-all duration-300 hover:bg-[#222] hover:text-white">
					More Collection
				</a>
			</div>
			

		</section>
    )
}

export default Products