import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdFastfood } from "react-icons/md";

const catagories = [
	{
		id: 1,
		name: "beef",
		urlParamName: "Chicken",
	},
	{
		id: 2,
		name: "Curry",
		urlParamName: "Curry",
	},
	{
		id: 3,
		name: "Rice",
		urlParamName: "Rice",
	},
	{
		id: 4,
		name: "Fruits",
		urlParamName: "Fruits",
	},
	{
		id: 5,
		name: "Drinks",
		urlParamName: "Drinks",
	},
	{
		id: 6,
		name: "Dessert",
		urlParamName: "Dessert",
	},
];

const CreateContainer = () => {
	const [title, setTitle] = useState("");
	const [calories, setCalories] = useState("");
	const [price, setPrice] = useState("");
	const [catagory, setCatagory] = useState(null);
	const [imageAsset, setImageAsset] = useState(null);
	const [fields, setFieldes] = useState(false);
	const [alertStatus, setAlertStatus] = useState("danger");
	const [msg, setMsg] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div className="w-full min-h-screen flex items-center justify-center">
			<div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
				{fields && (
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={`w-full p-2 rounded-lg font-semibold text-lg text-center ${
							alertStatus === "danger "
								? "bg-red-400 text-red-800"
								: "bg-emerald-400 text-emerald-800"
						}`}
					>
						{msg}
					</motion.p>
				)}
				<div className="w-full py-2 border-b gap-2 border-gray-300 flex">
					<MdFastfood className="text-xl text-gray-700"></MdFastfood>
					<input
						className="w-full h-full text-lg font-semibold bg-transparent outline-none border-none placeholder:text-gray-400"
						type="text"
						required
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						placeholder="give me title"
					/>
				</div>
				<div className="w-full">
					<select
						onChange={(e) => setCatagory(e.target.value)}
						className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
					>
						<option value="other" className="bg-white">
							Select Category
						</option>
						{catagories &&
							catagories.map((item) => (
								<option
									key={item.id}
									className=" text-base border-0 outline-none capitalize bg-white text-headingColor "
									value={item.urlParamName}
								>
									{item.name}
								</option>
							))}
					</select>
				</div>
			</div>
		</div>
	);
};

export default CreateContainer;
