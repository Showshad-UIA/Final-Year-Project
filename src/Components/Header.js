import React from "react";
import logo from "../img/logo.png";
import cart from "../img/cart-plus-solid.png";
import { motion } from "framer-motion";

import avator from "../img/avatar.png";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../Context/StateProvider";
import { actionType } from "../Context/Reducer";

const Header = () => {
	const firebaseAuth = getAuth(app);
	const provider = new GoogleAuthProvider();
	// const [{ user }, dispatch] = useStateValue();

	const login = async () => {
		const {
			user: { refreshToken, providerData },
		} = await signInWithPopup(firebaseAuth, provider);
		// dispatch({
		// 	type: actionType.SET_USER,
		// 	user: providerData[0],
		// });
	};
	return (
		<header className=" fixed z-50 w-screen  p-6 px-16">
			<div className="hidden md:flex w-full items-center justify-between p-4">
				<Link to="/" className="flex items-center gap-2">
					<img className="w-8 object-cover" src={logo} alt="logo" />
					<p className="text-headingColor text-xl font-bold">Fresh Goods App</p>
				</Link>

				<div className="flex items-center gap-8">
					<ul className=" flex items-center  gap-8">
						<li className=" text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
							Home
						</li>
						<li className=" text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out  cursor-pointer">
							Menu
						</li>
						<li className=" text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
							Blog
						</li>
						<li className=" text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
							Product
						</li>
						<li className=" text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
							Contact
						</li>
						<li className=" text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
							Login
						</li>
					</ul>

					<div className="flex justify-center items-center relative">
						<img
							className="w-7 ml-8  text-2xl text-textColor object-cover cursor-pointer "
							src={cart}
							alt=""
						/>
						<div className="w-6 h-5 rounded-full flex items-center justify-center absolute -top-2 -right-2 bg-red-600 ">
							<p className=" text-xs text-white font-semibold ">2</p>
						</div>
					</div>
					<div className="relative">
						<motion.img
							whileTap={{ scale: 0.6 }}
							src={avator}
							className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer"
							alt=""
							onClick={login}
						/>
					</div>
				</div>
			</div>
			<div className="flex md:hidden p-4 h-full w-full bg-blue-500"></div>
		</header>
	);
};

export default Header;
