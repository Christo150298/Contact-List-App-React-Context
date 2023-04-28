import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import Formulario from "./views/formulario";
import Update from "./views/update";

import { Footer } from "./component/footer";

const Layout = () => {
    return(
        <div>
			<BrowserRouter basename={""}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/formulario" element={<Formulario />} />
						<Route path="/update/:theid" element={<Update />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
    );
};

export default Layout;