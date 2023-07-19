import { userList } from "mock/userList";
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
	const UserList = userList.filter(user => user.id === 0);
	console.log(UserList);
	/**
	 * 데이터가 없을때 EmptyData 추가
	 */
	if (!UserList) {
		return <EmptyData />;
	}
	return (
		<S.MypageContainer>
			<MyProfile userList={UserList} />
			<S.DivisionLine />
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

const DivisionLine = styled.hr`
	width: 1060px;
	height: 1px;
	background-color: #cccccc;
	margin: 0 auto;
`;

const S = {
	MypageContainer,
	DivisionLine,
};
