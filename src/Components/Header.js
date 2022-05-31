import React from "react";
import logo from "./img/logo.png";

const Header = () => {
	return (
		<header className=" fixed z-50 w-screen bg-slate-300 p-6 px-16">
			<div className="hidden md:flex w-full bg-yellow-600 p-4">
				<img className="w-8 object-cover" src={logo} alt="logo" />
				<p className="text-headingColor text-xl font-bold">Fresh Goods App</p>

				<ul className=" flex items-center ml-auto gap-4">
					<li>Home</li>
					<li>Menu</li>
					<li>Blog</li>
					<li>Product</li>
					<li>Contact</li>
					<li>Login</li>
				</ul>
			</div>

			<div className="flex md:hidden p-4 h-full w-full bg-blue-500"></div>
		</header>
	);
};

export default Header;
