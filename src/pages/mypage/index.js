import { userList } from "mocks/data/userList";
import styled from "styled-components";
import { primaryFont } from "styles/common";
import MyProfile from "./components/my-profile";
import Nav from "./components/nav";

const Mypage = () => {
	const UserList = userList.filter(user => user.id === 0);

	if (!UserList) {
		return <EmptyData />;
	}
	return (
		<S.MypageContainer>
			<S.NavWrapper>
				<Nav />
			</S.NavWrapper>
			<MyProfile userList={UserList} />
			<S.DivisionLine />

			{/* {ProductList && (
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
			<Review /> */}
		</S.MypageContainer>
	);
};

export default Mypage;

const NavWrapper = styled.div`
	padding-top: 124px;
`;

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
	NavWrapper,
	MypageContainer,
	DivisionLine,
	NavWarrper,
	ContentWrapper,
};
