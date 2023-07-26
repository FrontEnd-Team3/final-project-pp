import { productList } from "./productsList";

const CumulativeAvgPrice = ({ keyword, date }) => {
	// 키워드 검색 결과
	const FilterByKeyword = productList.filter(
		product => product.title.includes(keyword) && product.status === "판매완료",
	);

	// 해당 날짜 전까지의 물품만 받아오기
	const FilterByPeriod = FilterByKeyword.filter(
		product => product.created_at.split("T")[0] <= date,
	);

	// 평균 가격 구하기 (반올림, 버림 등 여부는 임의로 조정)
	const AvgPrice =
		FilterByPeriod.map(product => product.price).reduce(
			(sum, num) => sum + num,
		) / FilterByPeriod.length;

	return AvgPrice;
};

export default CumulativeAvgPrice;
