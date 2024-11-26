import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';
import { useSelector } from 'react-redux';
import Auth from './pages/Auth';
import User from './pages/User';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import { ToastContainer } from 'react-toastify';

const App = () => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	return (
		<>
			<Router>
				{/* <Navbar /> You can put Navbar here if you want it to appear on every page */}
				<Routes>
					{/* Using element prop to render components */}
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Auth />} />
					<Route path="/user" element={<User />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/wish" element={<WishlistPage />} />
				</Routes>
			</Router>
			<ToastContainer />
		</>
	);
};

export default App;

