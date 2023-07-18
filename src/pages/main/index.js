import React, { useEffect } from "react";
import Banner from "./components/banner/Banner";
import axios from "axios";

const Main = () => {
	// useEffect(() => {
	// 	fetch("/users")
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			console.log(data);
	// 		});
	// }, []);
	useEffect(() => {
		axios.get("/products").then(res => console.log(res.data));
	}, []);
	// useEffect(() => {
	// 	fetch("/chat")
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			console.log(data);
	// 		});
	// }, []);

	return (
		<>
			<Banner />
			{/* Render users data... */}
		</>
	);
};

export default Main;
