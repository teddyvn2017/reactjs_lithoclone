import React from 'react'
import Layout from '../layouts/Layout'; 
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart,updateQuantity } from "../redux/cartSlice";
// import { updateQuantity } from "../redux/cartSlice"; 
const CartPage = () => {

    // Lấy danh sách sản phẩm từ Redux store
    const cartItems = useSelector((state) => state.cart.cartItems || []);

    const dispatch = useDispatch();
    const handleQuantityChange = (id, newQuantity) => {
        // console.log("Updating quantity:", id, newQuantity);
        dispatch(updateQuantity({ id, quantity: parseInt(newQuantity, 10) }));
    };

    // Hàm tính tổng tiền
    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => {
            const itemTotal = item.salePrice ? item.salePrice * item.quantity : item.price * item.quantity;
            return total + itemTotal;
        }, 0).toFixed(2);
    };

    return (
        <Layout>
            <section className="w-full py-16 px-8 mt-16">
                <h2 className="text-2xl font-semibold text-left mb-8 text-gray-600">Giỏ hàng của bạn</h2>

                {
                    cartItems.length === 0 ? (
                    <p className="text-center">Chưa có sản phẩm nào trong giỏ hàng.</p>
                ) : (
                <div className="flex flex-col justify-center w-[80%] items-center">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Hình ảnh</th>
                                <th className="border border-gray-300 px-4 py-2">Tên sản phẩm</th>
                                <th className="border border-gray-300 px-4 py-2">Giá</th>
                                <th className="border border-gray-300 px-4 py-2">Số lượng</th>
                                <th className="border border-gray-300 px-4 py-2">Thành tiền</th>
                                <th className="border border-gray-300 px-4 py-2">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id} className="text-center">
                                {/* Hình ảnh */}
                                <td className="border border-gray-300 px-4 py-2">
                                    <img src={item.img1} alt={item.title} className="w-16 h-16 object-cover mx-auto" />
                                </td>

                                {/* Tên sản phẩm */}
                                <td className="border border-gray-300 px-4 py-2">{item.title}</td>

                                {/* Giá sản phẩm */}
                                <td className="border border-gray-300 px-4 py-2">
                                    {item.salePrice ? (
                                        <span className="text-red-500">{item.salePrice} $</span>
                                    ) : (
                                        `${item.price} $`
                                    )}
                                </td>

                                {/* Số lượng */}
                                <td className="border border-gray-300 px-4 py-2">
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}                                        
                                        className="w-16 text-center border border-gray-300 p-1 rounded"
                                    />
                                </td>
                                {/* Cột Thành tiền */}
                                <td className="border border-gray-300 px-4 py-2 font-semibold">
                                    {item.salePrice
                                        ? (item.salePrice * item.quantity).toFixed(2)
                                        : (item.price * item.quantity).toFixed(2)} $
                                </td>     
                                {/* Nút xóa */}
                                <td className="border border-gray-300 px-4 py-2">
                                    <button
                                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    {/* Subtotal */}
                    <div className="flex justify-end mt-6 w-full">
                        <div className="text-lg font-semibold">
                            Tổng tiền: <span className="text-[#f06f42]">{calculateSubtotal()} $</span>
                        </div>
                    </div>    
                </div>

                
            )
                
            }

            
            </section>
        </Layout>
    )
}

export default CartPage