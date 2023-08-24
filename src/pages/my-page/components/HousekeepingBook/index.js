import styled from "styled-components";
import { flexCenter, flexColumn, flexRow } from "styles/common";
import Buttons from "./Buttons";
import UserQueryApi from "apis/user.query.api";
import { useState } from "react";
import TransactionHistory from "../TransactionHistory";
import { useSearchParams } from "react-router-dom";

const HouseKeeping = () => {
	const [page, setPage] = useState(1);
	// const [categoryState, setCategory] = useState("buyer");
	const [searchParams, setSearchParams] = useSearchParams();
	const category = searchParams.get("category");
	const start = searchParams.get("start");
	const [priceState, setPriceState] = useState(true);

	const getToday = () => {
		let date = new Date();
		let year = date.getFullYear();
		let month = ("0" + (1 + date.getMonth())).slice(-2);
		let day = ("0" + date.getDate()).slice(-2);

		return `${year}-${month}-${day}`;
	};
	const [end, setEnd] = useState(getToday());

	// 현재 날짜 가져오는 로직
	const [parameter, setParameter] = useState();

	const { data: accountBookData } = UserQueryApi.AccountBookList({
		page,
		category,
		start,
		end,
	});

	const setCategoryParams = parameter => {
		searchParams.set("category", parameter);
		setSearchParams(searchParams);
	};

	const setDateParams = parameter => {
		searchParams.set("start", parameter);
		setSearchParams(searchParams);
	};

	const handleChangePrice = btnName => {
		if (btnName === "판매") {
			setPriceState(true);
		} else {
			setPriceState(false);
		}
	};

	const accountDataList = accountBookData?.payList;

	const priceDataList = accountBookData?.amount;

	const formatNumber = num => {
		return Number(num).toLocaleString("ko-KR");
	};

	return (
		<S.Container>
			<S.RowBox>
				<S.Title>가계부</S.Title>
				<S.WrapperBtns>
					<S.AccountButton
						onClick={() => {
							handleChangePrice("판매");
						}}
					>
						판매내역
					</S.AccountButton>
					<S.AccountButton
						onClick={() => {
							handleChangePrice("구매");
						}}
					>
						구매내역
					</S.AccountButton>
				</S.WrapperBtns>
			</S.RowBox>
			{/* <S.DivisionLine /> */}
			<S.RowBox>
				<div>
					<img src={`${process.env.PUBLIC_URL}/img/저금통.png`} alt=" Image" />
				</div>
				<S.Title2>
					{priceState ? (
						<>
							<S.ParentDiv>
								<p>총 판매 금액</p>
								<p>
									{formatNumber(priceDataList?.totalPurchaseAmount || 0)} 원
								</p>
							</S.ParentDiv>
							<S.ParentDiv>
								<p>이번달 판매 금액</p>
								<p>
									{formatNumber(priceDataList?.thisMonthPurchaseAmount || 0)} 원
								</p>
							</S.ParentDiv>
						</>
					) : (
						<>
							<S.ParentDiv>
								<p>총 구매 금액</p>
								<p>{formatNumber(priceDataList?.totalSaleAmount || 0)} 원</p>
							</S.ParentDiv>
							<S.ParentDiv>
								<p>이번달 구매 금액</p>
								<p>
									{formatNumber(priceDataList?.thisMonthSaleAmount || 0)} 원
								</p>
							</S.ParentDiv>
						</>
					)}
				</S.Title2>
			</S.RowBox>
			<S.DivisionLine />
			<Buttons
				setCategoryParams={setCategoryParams}
				setDateParams={setDateParams}
			/>
			<TransactionHistory
				MyuserList={accountDataList}
				formatNumber={formatNumber}
			/>
		</S.Container>
	);
};
export default HouseKeeping;

const AccountButton = styled.button`
	font-size: 16px;
	border: 1px solid #dddddd;
	border-radius: 6px;
	font-weight: 700;
	margin-right: 16px;
	width: 100px;
	padding: 8px;
	height: 40px;
	background-color: ${({ theme }) => theme.PALETTE.white};
	color: ${({ theme }) => theme.PALETTE.black};
	cursor: pointer;
	:hover {
		background-color: ${({ theme }) => theme.PALETTE.primary};
		color: ${({ theme }) => theme.PALETTE.white};
	}
	:focus {
		background-color: ${({ theme }) => theme.PALETTE.primary};
		color: ${({ theme }) => theme.PALETTE.white};
	}
	:active {
		background-color: ${({ theme }) => theme.PALETTE.primary};
		color: ${({ theme }) => theme.PALETTE.white};
	}
`;

const WrapperBtns = styled.div`
	margin-top: 20px;
`;

const DivisionLine = styled.hr`
	width: 962px;
	height: 1px;
	background-color: #cccccc;
	margin-top: 30px;
`;

const Container = styled.div`
	width: 962px;
	margin: 0 auto;
	padding: 20px 0;
	display: flex;
	${flexColumn}
	${flexCenter}
`;

const ProductContainer = styled.div`
	padding: 35px;
	width: 962px;
	height: 270px;
	border: 1px solid #b6b6b6;
	border-radius: 6px;
	${flexRow}
	img {
		width: 200px;
		height: 200px;
		border-radius: 6px;
		overflow: hidden;
	}
`;

const Title = styled.div`
	margin-top: 20px;
	margin-bottom: 40px;
	font-size: 24px;
	font-weight: bold;
	color: black;
`;
const Title2 = styled.div`
	margin-bottom: 50px;
	font-size: 24px;
	font-weight: bold;
	color: black;
	width: 100%;
	${flexColumn}
	${flexCenter}
`;
const ParentDiv = styled.div`
	${flexRow}
	p:first-of-type {
		text-align: left;
		width: 200px;
	}
	p:nth-of-type(2) {
		text-align: right;
		width: 170px;
	}
	margin-top: 35px;
`;

const Wrapper = styled.div`
	margin-left: 30px;
	${flexRow}
	display: flex;
	justify-content: space-between;
	width: 660px;
`;
const Wrapper2 = styled.div`
	margin-left: 30px;
	${flexRow}
	width: 660px;
`;

const RowBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	${flexRow}
	div {
		img {
			width: 300px;
			height: 300px;
			margin-left: 60px;
		}
	}
`;

const ToggleBox = styled.div`
	width: 105px;
	height: 32px;
	margin-right: 16px;
	margin-top: 20px;
`;

const S = {
	WrapperBtns,
	AccountButton,
	DivisionLine,
	Title,
	Title2,
	Container,
	ProductContainer,
	Wrapper,
	Wrapper2,
	RowBox,
	ToggleBox,
	ParentDiv,
};
