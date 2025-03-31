import React from 'react';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { RiShoppingBag3Line} from "react-icons/ri";
const Products = () => {

    const dispatch = useDispatch();
    const products = [
        {
          id: 1,
          img1: "/assets/img/decor_classic_01.jpg",
          img2: "/assets/img/decor_classic_02.jpg",
          title: "Hanging Light",
          price: 12,
          salePrice: null,
          sale: false
        },
        {
          id: 2,
          img1: "/assets/img/decor_classic_03.jpg",
          img2: "/assets/img/decor_classic_04.jpg",
          title: "Study Lamp",
          price: 12,
          salePrice: null,
          sale: false
        },
        {
          id: 3,
          img1: "/assets/img/decor_classic_05.jpg",
          img2: "/assets/img/decor_classic_06.jpg",
          title: "Classic Lamp",
          price: 20,
          salePrice: 12,
          sale: true
        },
        {
          id: 4,
          img1: "/assets/img/decor_classic_07.jpg",
          img2: "/assets/img/decor_classic_08.jpg",
          title: "Brown Crystal",
          price: 20,
          salePrice: 12,
          sale: true
        },
        {
          id: 5,
          img1: "/assets/img/decor_classic_09.jpg",
          img2: "/assets/img/decor_classic_10.jpg",
          title: "Wooden Stool",
          price: 12,
          salePrice: null,
          sale: false
        },
        {
          id: 6,
          img1: "/assets/img/decor_classic_12.jpg",
          img2: "/assets/img/decor_classic_13.jpg",
          title: "Aether Vasee",
          price: 12,
          salePrice: null,
          sale: false
        },
        {
          id: 7,
          img1: "/assets/img/decor_classic_13.jpg",
          img2: "/assets/img/decor_classic_14.jpg",
          title: "Wooden Bowl",
          price: 12,
          salePrice: null,
          sale: false
        },
        {
          id: 8,
          img1: "/assets/img/decor_classic_15.jpg",
          img2: "/assets/img/decor_classic_16.jpg",
          title: "Top With Pleated",
          price: 20,
          salePrice: 12,
          sale: true
        },
        {
          id: 9,
          img1: "/assets/img/decor_classic_17.jpg",
          img2: "/assets/img/decor_classic_18.jpg",
          title: "Fabric Table Lamp",
          price: 20,
          salePrice: 12,
          sale: true
        },
        {
          id: 10,
          img1: "/assets/img/decor_classic_19.jpg",
          img2: "/assets/img/decor_classic_20.jpg",
          title: "Texture Mirror",
          price: 12,
          salePrice: null,
          sale: false
        }];
    
    // cách làm cũ, đơn giản cho người mới
    // const [cart, setCart] = React.useState([]); //giỏ hàng  
    // const addToCart = (product) => {
    //     console.log("add to cart");
    //     setCart((prevCart) => {
    //         const existingItem = prevCart.find((item) => item.id === product.id);
    //         if (existingItem) {
    //             // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
    //             return prevCart.map((item) => {
    //                 item.id === product.id ? {...item, quantity: item.quantity + 1} : item;
    //             });
    //         }
    //         else {
    //             // Nếu sản phẩm chưa có trong giỏ hàng, thêm với quantity = 1
    //             return [...prevCart, { ...product, quantity: 1 }];
    //         }
    //     });
    // }  
    // Hàm gọi Redux action addToCart
    const handleAddToCart  = (product) => {
        dispatch(addToCart(product)); //// Gọi action addToCart từ Redux
    }

    return (
        <section className="w-full border-t-[1px] border-[#e2e2e2] bg-white pt-16">
			<div className="mt-14">
				<h4 className="color__maudo text-base mb-2 text-center">LIVING INTERIOR</h4>
				<h2 className="color__mauden text-3xl text-center font-semibold">New products</h2>
			</div>
						
			<div className="flex items-center justify-center gap-8 flex-row flex-wrap md:justify-center px-8	py-16">
				{/* item  */}
                {
                    products.map((product,index) => (
                        <div 
                            key={index} className="flex flex-col items-center">
					        
                            {/* Ảnh và nút, nhớ thêm overflow-hidden để không thấy button add to cart đi từ dưới lên */}
					        <div className="relative cursor-pointer group w-full max-w-[300px] lg:max-w-[260px] xl:max-w-[280px] overflow-hidden">
						    
                            {/*  ảnh chính  */}
                            <img className="w-full object-cover will-change-opacity transition-opacity duration-400 group-hover:opacity-0" 
                                src={product.img1}
                                alt={product.title} /> 

                            <img className="absolute inset-0 w-full h-auto object-cover opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                                src={product.img2} alt={product.title} />
						
                            {/* <!-- add to cart --> */}
                            <div className="flex flex-row justify-center items-center gap-2
                                        absolute bottom-0 left-0 right-0 bg-black text-white text-center py-3 opacity-0 
                                        translate-y-full transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                                onClick={() => handleAddToCart(product)}        
                                >
                                <RiShoppingBag3Line/> ADD TO CART
                            </div>
                            
                            {/*  sale off  */}

                            {
                                product.sale && (<div className="absolute left-[1rem] top-[1rem] uppercase text-white text-[10px]
                                        px-2 py-1 bg__mauxanhduong z-12 font-medium rounded-sm">
                                    Sale!
                                </div>)
                            }
                            
					    </div>
				
                        {/*  Thông tin sản phẩm  */}
                        <div className="py-4 text-center">
                            <h4 className="text-sm text-black py-2 font-medium">
                                {product.title}
                            </h4>
                            {
                                product.sale ? (
                                    <div className="flex flex-row justify-center gap-4">                                        
                                        <h5 className="text-sm text-gray-500 line-through">{product.price}</h5>
                                        <h5 className="text-sm text-gray-500">{product.salePrice}</h5>                                        
                                    </div>   
                                ) : (
                                    <h5 className="text-sm text-gray-500">{product.price}</h5>
                                )      
                            }
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