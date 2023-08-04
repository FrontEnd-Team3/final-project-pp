import { useState } from "react";

const useToggle = () => {
	const [isToggle, setIsToggle] = useState(false);

	const Toggle = () => setIsToggle(prev => !prev);

	return { isToggle, setIsToggle, Toggle };
};

export default useToggle;
