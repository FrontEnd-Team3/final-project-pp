import { productList } from "mock/productsList";
import { userList } from "mock/userList";
import styled from "styled-components";
import { primaryFont } from "styles/common";
import HouseKeeping from "./components/housekeeping-book";
import InterestProduct from "./components/interest-product";
import MyProfile from "./components/my-profile";
import PurchasedItem from "./components/purchased-item";
import RegisterProduct from "./components/register-product";
import Review from "./components/review";
import TransactionHistory from "./components/transaction-history";
import Nav from "./components/nav";

const Mypage = () => {
	const UserList = userList.filter(user => user.id === 0);
	const ProductList = productList?.filter(
		product => product.status === "판매중" && product.user === 9,
	);
	const ProductListStatusEnd = productList?.filter(
		productEnd => productEnd.status === "판매완료" && productEnd.user === 9,
	);
	const ProductListStatusEndUser1 = productList?.filter(
		productEnd => productEnd.status === "판매완료" && productEnd.user === 1,
	);

	if (!UserList) {
		return <EmptyData />;
	}
	return (
		<S.ContentWrapper>
			<S.NavWarrper>
				<Nav />
			</S.NavWarrper>
			<S.MypageContainer>
				<MyProfile userList={UserList} />
				<S.DivisionLine />
				{!ProductList && <EmptyData />}
				{ProductList && (
					<>
						<RegisterProduct
							productList={ProductList}
							productListStatusEnd={ProductListStatusEnd}
						/>
						<HouseKeeping />
						<TransactionHistory
							productList={ProductList}
							productListStatusEnd={ProductListStatusEnd}
						/>

						<InterestProduct
							productList={ProductList}
							productListStatusEnd={ProductListStatusEnd}
						/>
					</>
				)}
				{ProductListStatusEndUser1 && (
					<PurchasedItem productList={ProductListStatusEndUser1} />
				)}
				<TransactionHistory />
				<Review />
			</S.MypageContainer>
		</S.ContentWrapper>
	);
};

export default Mypage;

const MypageContainer = styled.div`
	width: 962px;
	margin: 0 100px;
	padding: 20px 0;
	${primaryFont}
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const NavWarrper = styled.div`
	padding-top: 124px;
`;

const DivisionLine = styled.hr`
	width: 962px;
	height: 1px;
	background-color: #cccccc;
	margin: 0 auto;
`;

const S = {
	MypageContainer,
	DivisionLine,
	NavWarrper,
	ContentWrapper,
};
