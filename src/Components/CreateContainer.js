import React, { useState } from "react";
import { motion } from "framer-motion";
import {
	MdFastfood,
	MdCloudUpload,
	MdDelete,
	MdFoodBank,
	MdAttachMoney,
} from "react-icons/md";
import Loader from "./Loader";
import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase.config";
import { saveItem } from "./Utls/FirebaseFunction";

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

	const uploadImage = (e) => {
		setIsLoading(true);
		const imageFile = e.target.files[0];
		const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
		const uploadTask = uploadBytesResumable(storageRef, imageFile);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const uploadProgress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			},
			(error) => {
				console.log(error);
				setFieldes(true);
				setMsg("Error while uploading");
				setAlertStatus("danger");
				setTimeout(() => {
					setFieldes(false);
					setIsLoading(false);
				}, 4000);
			},

			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setImageAsset(downloadURL);
					setIsLoading(false);
					setFieldes(true);
					setMsg("image uploaded successfully");
					setAlertStatus("success");
					setTimeout(() => {
						setFieldes(false);
					}, 4000);
				});
			}
		);
	};
	const deleteImage = () => {
		setIsLoading(true);
		const deleteRef = ref(storage, imageAsset);
		deleteObject(deleteRef).then(() => {
			setImageAsset(null);
			setIsLoading(false);
			setFieldes(true);
			setMsg("image deleted ");
			setAlertStatus("success");
			setTimeout(() => {
				setFieldes(false);
			}, 4000);
		});
	};
	const saveDetails = () => {
		setIsLoading(true);
		try {
			if (!title || !calories || !imageAsset || !price || !catagory) {
				setFieldes(true);
				setMsg("Pls Required the field ");
				setAlertStatus("danger");
				setTimeout(() => {
					setFieldes(false);
					setIsLoading(false);
				}, 4000);
			} else {
				const data = {
					id: `${Date.now()}`,
					title: title,
					imageUrl: imageAsset,
					catagory: catagory,
					calories: calories,
					qty: 1,
					price: price,
				};
				saveItem(data);
				setIsLoading(false);
				setFieldes(true);
				clearData();
				setMsg("Data has been uploaded ");
				setAlertStatus("success");
				setTimeout(() => {
					setFieldes(false);
				}, 4000);
			}
		} catch (error) {
			console.log(error);
			setFieldes(true);
			setMsg("Error while uploading");
			setAlertStatus("danger");
			setTimeout(() => {
				setFieldes(false);
				setIsLoading(false);
			}, 4000);
		}
	};
	const clearData = () => {
		setTitle("");
		setImageAsset(null);
		setCalories("");
		setPrice("");
		setCalories("selected Category");
	};

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
				{/* show the product here */}
				<div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 cursor-pointer  h-96 rounded-lg">
					{isLoading ? (
						<Loader></Loader>
					) : (
						<>
							{!imageAsset ? (
								<>
									<label className="h-full w-full flex flex-col items-center justify-center cursor-pointer ">
										<div className="h-full w-full flex flex-col items-center justify-center">
											<MdCloudUpload className="text-gray-500 text-3xl  hover:text-gray-700"></MdCloudUpload>
											<p className="text-gray-500  hover:text-red-700">
												click here to upload
											</p>
										</div>
										<input
											type="file"
											name="UploadImage"
											accept="image/*"
											onChange={uploadImage}
											className="w-0 h-0 "
										/>
									</label>
								</>
							) : (
								<>
									<div className="relative h-full">
										<img
											src={imageAsset}
											alt="uploaded img"
											className="w-full h-full object-cover"
										/>
										<button
											type="button"
											className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
											onClick={deleteImage}
										>
											<MdDelete className="text-white"></MdDelete>
										</button>
									</div>
								</>
							)}
						</>
					)}
				</div>
				<div className=" w-full flex flex-col md:flex-row items-center gap-3">
					<div className="w-full py-2 border-b border-gray-300 flex items-center gap-2 ">
						<MdFoodBank className="text-gray-700 text-2xl"></MdFoodBank>
						<input
							type="text"
							required
							value={calories}
							onChange={(e) => setCalories(e.target.value)}
							placeholder="calories"
							className="w-full  h-fill text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
						/>
					</div>
					<div className="w-full flex py-2 border-b border-gray-300 items-center gap-2 ">
						<MdAttachMoney className="text-gray-700 text-2xl"></MdAttachMoney>
						<input
							type="text"
							required
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							placeholder="Price"
							className="w-full h-fill text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
						/>
					</div>
				</div>
				<div className="flex items-center w-full ">
					<button
						type="button"
						className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
						onClick={saveDetails}
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreateContainer;
