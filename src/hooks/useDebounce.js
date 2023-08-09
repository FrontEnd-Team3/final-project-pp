import { useCallback, useEffect } from "react";

const useDebounce = (func, delayTime, dependency) => {
	const callbackFunc = useCallback(func, [dependency]);
	useEffect(() => {
		const timer = setTimeout(() => {
			callbackFunc();
		}, delayTime);

		return () => {
			clearTimeout(timer);
		};
	}, [callbackFunc, delayTime]);
};

export default useDebounce;
