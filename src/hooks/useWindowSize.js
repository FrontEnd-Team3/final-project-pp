import { useEffect, useState } from "react";

const useWindowSizeCustom = () => {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleResize = () => {
				if (window.innerWidth < 1200) {
					setWindowSize({
						width: window.innerWidth * 0.9,
						height: window.innerHeight * 0.8,
					});
				}
			};

			// resize 이벤트가 발생할 때 handleResize 함수가 실행
			window.addEventListener("resize", handleResize);

			handleResize(); // 초기값 설정

			// 이벤트 리스너를 제거하여 이벤트 리스너가 리사이즈될 때마다 계속해서 생겨나지 않도록 처리 (clean up)
			return () => window.removeEventListener("resize", handleResize);
		} else {
			return () =>
				window.removeEventListener("resize", () => {
					return null;
				});
		}
	}, []);
	return windowSize;
};

export default useWindowSizeCustom;
