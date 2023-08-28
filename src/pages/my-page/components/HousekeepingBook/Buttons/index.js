import { useState } from "react";
import styled from "styled-components";
import { flexRow, flexColumn, flexCenter } from "styles/common";

const Buttons = ({ setCategoryParams, setDateParams }) => {
	const [color, setColor] = useState("white");
	const [fontWeight, setFontWeight] = useState("400");
	const [selectedButton, setSelectedButton] = useState("");
	const monthAgo = num => {
		let now = new Date();
		let date = new Date(now.setMonth(now.getMonth() - num));
		let year = date.getFullYear();
		let month = ("0" + (1 + date.getMonth())).slice(-2);
		let day = ("0" + date.getDate()).slice(-2);

		return `${year}-${month}-${day}`;
	};

	const getButtonStyle = buttonName => {
		if (selectedButton === buttonName) {
			return {
				color: "primary",
				fontWeight: "700",
			};
		} else {
			return {
				color: "white",
				fontWeight: "400",
			};
		}
	};
	// const handleBtnChange = btnName => {
	// 	if ((btnName = "총 내역")) {
	// 		setColor("primary");
	// 		setFontWeight("700");
	// 	}
	// };

	return (
		<S.Container>
			<div>
				<S.AccountButton
					onClick={() => {
						setCategoryParams("seller");
					}}
				>
					판매내역
				</S.AccountButton>
				<S.AccountButton
					onClick={() => {
						setCategoryParams("buyer");
					}}
				>
					구매내역
				</S.AccountButton>
			</div>
			<S.MonthBox>
				<S.AccountButton
					onClick={() => {
						setDateParams(monthAgo(3));
					}}
				>
					3개월
				</S.AccountButton>
				<S.AccountButton
					onClick={() => {
						setDateParams(monthAgo(6));
					}}
				>
					6개월
				</S.AccountButton>
				<S.AccountButton
					onClick={() => {
						setDateParams(monthAgo(9));
					}}
				>
					9개월
				</S.AccountButton>
				<S.AccountButton
					onClick={() => {
						setDateParams(monthAgo(12));
					}}
				>
					1년
				</S.AccountButton>
			</S.MonthBox>
		</S.Container>
	);
};

export default Buttons;

const Container = styled.div`
	${flexRow}
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
	margin-top: 103px;
	transition: justify-content 0.3s;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		${flexColumn};
		${flexCenter};
		gap: 20px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		justify-content: space-between;
	}
`;

const MonthBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	button {
		@media ${({ theme }) => theme.DEVICE.mobile} {
			gap: 20px;
			margin-bottom: 20px;
		}
	}
`;

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

const S = {
	Container,
	AccountButton,
	MonthBox,
};
