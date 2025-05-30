import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "src/views/Home";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

function Router() {
	return (
		<div className="App dark">
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default Router;
