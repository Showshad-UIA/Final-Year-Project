import React from "react";
import delivery from "../img/delivery.png";
const HomeContainer = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
			<div className="py-2 flex-1 bg-blue-400"></div>
		</div>
	);
};

export default HomeContainer;
