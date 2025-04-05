import axios from "axios";

const API_URL = "http://localhost:1337/api/products";

// Lấy danh sách sản phẩm
export const getProducts = async () => {

    try {
        const response = await axios.get(`${API_URL}?populate=*`);
        //const response = await axios.get(`${API_URL}?=populate=*`);        
        return response.data.data;        
    }
    catch (error) { 
        console.error("Lỗi khi gọi API Sanity:", error);
        return [];
    }
};