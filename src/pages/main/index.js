import React, { useEffect } from "react";
import Banner from "./components/banner/Banner";

const Main = () => {
	useEffect(() => {
		fetch("/users")
			.then(res => res.json())
			.then(data => {
				console.log(data);
			});
	}, []);

	return (
		<>
			<Banner />
			{/* Render users data... */}
		</>
	);
};

export default Main;
