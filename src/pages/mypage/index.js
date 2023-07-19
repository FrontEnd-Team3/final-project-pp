import { useState } from "react";
import styled from "styled-components";
import { primaryFont } from "styles/common";
import HouseKeeping from "./components/housekeeping-book";
import InterestProduct from "./components/interest-product";
import MyProfile from "./components/my-profile";
import PurchasedItem from "./components/purchased-item";
import RegisterProduct from "./components/register-product";
import Review from "./components/review";
import SalesDetail from "./components/sales-details";
import TransactionHistory from "./components/transaction-history";

const Mypage = () => {
	const [data, setData] = useState("hi");
	/**
	 * 데이터가 없을때 EmptyData 추가
	 */
	if (!data) {
		return <EmptyData />;
	}
	return (
		<S.MypageContainer>
			<MyProfile />
			<SalesDetail />
			<RegisterProduct />
			<HouseKeeping />
			<TransactionHistory />
			<PurchasedItem />
			<InterestProduct />
			<Review />
		</S.MypageContainer>
	);
};

export default Mypage;

const MypageContainer = styled.div`
	width: 1060px;
	margin: 0 auto;
	padding: 20px 0;
	${primaryFont}
`;

const S = {
	MypageContainer,
};
