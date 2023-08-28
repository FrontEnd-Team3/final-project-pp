// 오늘 날짜
export const getTodayDate = () => {
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth() + 1;
	const day = today.getDate();
	return `${year}-${month < 10 ? "0" : ""}${month}-${
		day < 10 ? "0" : ""
	}${day}`;
};

// 이전 개월 수 구하기
export const getPastDate = monthAgo => {
	const today = new Date();
	today.setMonth(today.getMonth() - monthAgo);
	const year = today.getFullYear();
	const month = today.getMonth() + 1;
	const day = today.getDate();
	return `${year}-${month < 10 ? "0" : ""}${month}-${
		day < 10 ? "0" : ""
	}${day}`;
};
