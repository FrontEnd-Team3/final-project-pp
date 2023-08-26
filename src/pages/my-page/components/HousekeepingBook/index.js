import styled from "styled-components";
import { flexCenter, flexColumn, flexRow } from "styles/common";
import Buttons from "./Buttons";
import UserQueryApi from "apis/user.query.api";
import { useState } from "react";
import TransactionHistory from "../TransactionHistory";
import { useSearchParams } from "react-router-dom";
import Pagination from "components/Pagination";

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
	if (accountBookData) {
		return (
			<S.Container>
				<S.MainRowBox>
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
				</S.MainRowBox>
				{/* <S.DivisionLine /> */}
				<S.RowBox>
					<div>
						<img
							src={`${process.env.PUBLIC_URL}/img/저금통.png`}
							alt=" Image"
						/>
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
										{formatNumber(priceDataList?.thisMonthPurchaseAmount || 0)}{" "}
										원
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
				<Pagination
					totalData={accountBookData?.pagination?.count}
					dataLimit={accountBookData?.pagination?.page_size}
					page={parseInt(page)}
					setPage={setPage}
				/>
			</S.Container>
		);
	}
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

	button:last-of-type {
		@media ${({ theme }) => theme.DEVICE.tablet} {
			margin-right: 0;
		}
	}
`;

const DivisionLine = styled.hr`
	width: 962px;
	height: 1px;
	background-color: #cccccc;
	margin: 0 auto;
	transition: width 0.3s;
	@media ${({ theme }) => theme.DEVICE.pc} {
		width: auto;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: auto;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: auto;
	}
`;

const Container = styled.div`
	max-width: 962px;
	margin: 0 auto;
	padding: 20px 0;
	display: flex;
	${flexColumn}
	${flexCenter}
	transition: padding width 0.3s;
	@media ${({ theme }) => theme.DEVICE.pc} {
		/* width: 1000px; */
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		/* width: 700px; */
		/* display: inline-block; */
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		/* padding: 0 80px;
		width: 450px; */
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
`;
const ParentDiv = styled.div`
	${flexRow}
	justify-content: space-between;

	p {
		@media ${({ theme }) => theme.DEVICE.mobile} {
			font-size: 18px;
		}
	}
	p:first-of-type {
		text-align: left;
	}
	p:nth-of-type(2) {
		text-align: right;
		/* width: 170px; */
	}
	margin-top: 35px;
`;

const Wrapper = styled.div`
	margin-left: 30px;
	${flexRow}
	display: flex;
	justify-content: space-between;
	width: 660px;
	transition: width 0.3s;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: auto;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: auto;
	}
`;
const Wrapper2 = styled.div`
	margin-left: 30px;
	${flexRow}
	width: 660px;
	transition: width 0.3s;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: auto;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: auto;
		flex-wrap: wrap;
	}
`;

const MainRowBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	${flexRow}
	transition: padding width 0.3s;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		padding: 0 20px;
	}
`;

const RowBox = styled.div`
	width: 100%;
	${flexRow}
	justify-content: center;
	align-items: center;
	transition: width 0.3s;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		/* width: 200px; */
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		padding: 0 20px;
	}

	div:first-of-type {
		margin-right: 20px;
	}
	div {
		width: 260px;
		@media ${({ theme }) => theme.DEVICE.mobile} {
			width: 230px;
		}
		img {
			width: 100%;
			height: auto;
			transition: width 0.3s;
			@media ${({ theme }) => theme.DEVICE.tablet} {
				/* width: 250px;
				height: 250px; */
			}
			@media ${({ theme }) => theme.DEVICE.mobile} {
				/* width: 200px;
				height: 200px; */
			}
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
	Wrapper,
	Wrapper2,
	RowBox,
	ToggleBox,
	ParentDiv,
	MainRowBox,
};
