import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Home from "src/views/Home";
import Books from "src/views/Books";
import Book from "src/views/Book";
import Cart from "src/views/Cart";
import Register from "src/views/Register";
import Login from "src/views/Login";


import Header from "src/components/Header";
import UserProfileHeader from "src/components/UserProfileHeader";

import Footer from "src/components/Footer";
import { useEffect } from "react";

function Router() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [pathname]);
	return (
		<div className="App dark">
			<Header />
			<UserProfileHeader/>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/signup" element={<Register />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/cart" element={<Cart />} />

				<Route exact path="/books" element={<Books/>} />
				<Route exact path="/book/:id" element={<Book/>} />
			</Routes>
			<Footer />
		</div>
	);
}

export default Router;
