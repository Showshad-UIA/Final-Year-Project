import React from "react";
import "./HomeContainer.css";
import delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";

import I1 from "../img/i1.png";
import F1 from "../img/f1.png";
import C3 from "../img/c3.png";
import Fi1 from "../img/fi1.png";
const heroData = [
	{
		id: 1,
		name: "ice-cream",
		decp: "Chocolate $Vanilla",
		price: "5.25",
		imgSrc: I1,
	},
	{
		id: 2,
		name: "Strawberries",
		decp: "Fresh Strawberries",
		price: "4.25",
		imgSrc: F1,
	},
	{
		id: 3,
		name: "Chicken Kebab",
		decp: "Mixed kebab Plate",
		price: "6.25",
		imgSrc: C3,
	},
	{
		id: 4,
		name: "Fish Kebab",
		decp: "Fish Kebab Plate",
		price: "7.25",
		imgSrc: Fi1,
	},
];

const HomeContainer = () => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
			<div className="py-2 flex-1 flex flex-col items-start justify-start gap-6">
				<div className="flex items-center gap-2 justify-center bg-orange-100 p-2 px-4 py-1 rounded-full">
					<p className="text-base text-orange-500 font-semibold">
						Bike Delivery
					</p>

					<div className="  bg-white w-6 h-6 rounded-full overflow-hidden  drop-shadow-xl">
						<img
							src={delivery}
							className=" w-full h-full object-contain"
							alt=""
						/>
					</div>
				</div>

				<p className="text-[2.5rem] lg:text-[3.2rem] font-bold tracking-wide text-headingColor">
					The Fastest Delivery in{" "}
					<span className="text-orange-600 text-[2rem]  lg:text-[5rem]">
						{" "}
						this campus
					</span>
				</p>
				<p className="text-base text-textColor text-center md:text-left md:w-[80%]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
					voluptate tempore explicabo, nostrum molestias aliquid sint voluptates
					omnis autem consequatur nihil delectus nisi laudantium obcaecati
					quisquam facere commodi iste odio
				</p>
				<button
					type="button"
					className="bg-gradient-to-br from-red-400 to-orange-500 md:w-auto w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out"
				>
					Order Now
				</button>
			</div>
			<div className="py-2 flex-1 items-center relative  flex ">
				<img
					className="hero ml-auto h-full h-420 w-full lg:w-auto lg:h-650"
					src={HeroBg}
					alt="Herobg"
				/>
				<div className="w-full top-0 px-32 py-4 left-0 h-full absolute flex items-center justify-center gap-4 flex-wrap">
					{heroData &&
						heroData.map((n) => (
							<div
								key={n.id}
								className="home  p-4 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg "
							>
								<img className="w-40 -mt-20" src={n.imgSrc} alt="" />
								<p className="text-xl font-semibold text-textColor mt-4">
									{n.name}
								</p>
								<p className=" vanilla text-sm font-semibold text-gray-500 my-3">
									{n.decp}
								</p>
								<p>
									<span className="text-sm font-semibold text-red-400">$</span>
									{n.price}
								</p>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default HomeContainer;
