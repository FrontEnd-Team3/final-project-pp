import { useState } from "react";

const useToggle = (initialState = false) => {
	const [isToggle, setIsToggle] = useState(initialState);

	const Toggle = () => setIsToggle(prev => !prev);

	return { isToggle, setIsToggle, Toggle };
};

export default useToggle;
