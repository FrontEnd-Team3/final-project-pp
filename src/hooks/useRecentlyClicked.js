import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useRecentlyClicked = () => {
	const [recentlyClicked, setRecentlyClicked] = useState(
		JSON.parse(localStorage.getItem("key"))
			? JSON.parse(localStorage.getItem("key"))
			: [],
	);

	// id 바뀔 때마다 등록
	const { id } = useParams();
	useEffect(() => {
		if (!id) return;
		let newRecentArr = JSON.parse(localStorage.getItem("key")) || [];
		if (newRecentArr?.includes(id)) {
			// 최근 본 상품 중복 방지
			newRecentArr = newRecentArr.filter(el => el !== id);
			newRecentArr.unshift(id);
		} else {
			newRecentArr.unshift(id);
		}
		localStorage.setItem("key", JSON.stringify(newRecentArr));
	}, [id]);

	// 페이지가 로드될 때 localStorage에서 값을 가져옴
	useEffect(() => {
		const storedValue = localStorage.getItem("key");
		if (storedValue) {
			setRecentlyClicked(JSON.parse(storedValue));
		}
	}, [id]);

	return recentlyClicked;
};

export default useRecentlyClicked;
