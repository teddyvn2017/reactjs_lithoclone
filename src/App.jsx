import './index.css';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {	

	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/trang-chu" element={<HomePage />} />
				<Route path="/gio-hang" element={<CartPage />} />
			</Routes>
		</Router>		
	)
}

export default App
