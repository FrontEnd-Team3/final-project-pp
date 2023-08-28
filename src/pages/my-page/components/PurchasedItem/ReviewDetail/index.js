import UserQueryApi from "apis/user.query.api";
import { useState } from "react";
import styled from "styled-components";
import { flexCenter, flexColumn, flexRow } from "styles/common";
import * as SCHEMA from "../../../../../consts/schema";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ReviewDetail = ({ productIndex, reviewData }) => {
	const page = 1;
	const { data: PayProductData } = UserQueryApi?.PayProductList({
		page,
	});

	const [images, setImages] = useState([]);

	const PayReviewList = PayProductData?.reviewList;

	const PayProductList = PayReviewList?.filter(
		product => product.Product.idx === productIndex,
	);

	const ReviewData = PayProductList[0].Review;

	const OndoData = PayProductList[0].Product.User.Ondo.ondo;

	const { review, reviewInfo } = SCHEMA;
	const schema = yup.object().shape({ review, reviewInfo });
	const {
		handleSubmit,
		control,
		formState: { errors, isValid },
		getValues,
		setValue,
		watch,
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onChange",
	});
	//1점 -0.3도 2점 -0.2도 3점 0도 4점 0.2도 5점 0.3도

	const handleStarClick = index => {
		setStarState(index);
		let ondoChange = 0;
		switch (index) {
			case 0:
				ondoChange = 200;
				break;
			case 1:
				ondoChange = 400;
				break;
			case 2:
				ondoChange = 600;
				break;
			case 3:
				ondoChange = 800;
				break;
			case 4:
				ondoChange = 1000;
				break;
			default:
				ondoChange = 0;
				break;
		}
		setOndo(ondoChange);
	};

	const reviewValue = getValues("review");
	const reviewInfoValue = getValues("reviewInfo");

	return (
		<S.Container>
			<div>
				<S.ImgWrapper>
					<img src={PayProductList[0].Product.img_url} />
				</S.ImgWrapper>
				<S.Title>{PayProductList[0].Product.title}</S.Title>
			</div>
			<S.TitleRowBox>
				<S.ReviewTitle>리뷰</S.ReviewTitle>
			</S.TitleRowBox>
			<S.ReviewWrapper>
				<S.DivisionLine />
				<S.RowBox>
					<S.ReviewTitle1>제목: {ReviewData.title}</S.ReviewTitle1>
				</S.RowBox>
				<S.RowBox>
					<S.ReviewTitle1>내용</S.ReviewTitle1>
				</S.RowBox>
				<S.RowBox>
					<p>{ReviewData.content}</p>
				</S.RowBox>
				<S.DivisionLine2 />
			</S.ReviewWrapper>
		</S.Container>
	);
};

export default ReviewDetail;

const DivisionLine = styled.hr`
	width: 962px;
	height: 5px;
	background-color: #dddddd;
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
const DivisionLine2 = styled.hr`
	width: 962px;
	height: 3px;
	background-color: #dddddd;
	margin-top: 40px;
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

const Container = styled.form`
	max-width: 962px;
	padding: 20px 0;
	display: flex;
	${flexColumn}
	${flexCenter}
	margin-bottom: 100px;
	transition: padding width 0.3s;
	@media ${({ theme }) => theme.DEVICE.pc} {
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
	}
`;

const ReviewWrapper = styled.div`
	padding: 20px;
	width: 100%;
	@media ${({ theme }) => theme.DEVICE.pc} {
		padding: 20px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		padding: 20px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		padding: 20px;
	}
`;

const ImgWrapper = styled.div`
	width: 350px;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 230px;
	}
	${flexCenter} img {
		width: 100%;
		height: auto;
		transition: width 0.3s;
		@media ${({ theme }) => theme.DEVICE.tablet} {
		}
		@media ${({ theme }) => theme.DEVICE.mobile} {
		}
	}
`;

const Title = styled.div`
	margin-top: 20px;
	font-size: 22px;
	font-weight: bold;
	color: black;
	text-align: center;
	@media ${({ theme }) => theme.DEVICE.pc} {
		font-size: 22px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		font-size: 20px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: 18px;
	}
`;

const ReviewTitle = styled.div`
	margin-top: 20px;
	font-size: 22px;
	font-weight: bold;
	color: black;
	text-align: center;
`;

const Title1 = styled.div`
	margin-top: 20px;
	font-size: 18px;
	font-weight: bold;
	color: black;
`;

const ReviewTitle1 = styled.div`
	margin-top: 20px;
	font-size: 18px;
	font-weight: bold;
	color: black;
	@media ${({ theme }) => theme.DEVICE.pc} {
		font-size: 18px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		font-size: 16px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: 14px;
	}
`;

const Title2 = styled.div`
	margin-top: 20px;
	font-size: 18px;
	font-weight: bold;
	color: #9f9797;
`;

const RowBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	${flexRow}
	margin-top: 30px
`;

const TitleRowBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	${flexRow}
	padding: 20px;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		padding: 20px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		padding: 20px;
		${flexCenter}
	}
`;

const ButtonRowBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	${flexRow}
	margin-top: 30px;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		${flexCenter}
	}
`;

const StarRowBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	${flexRow}
	margin: 30px 0px 30px 0px;
	div {
		margin-right: 20px;
	}
`;

const S = {
	DivisionLine,
	DivisionLine2,
	Title,
	Title1,
	Title2,
	Container,
	RowBox,
	TitleRowBox,
	ButtonRowBox,
	StarRowBox,
	ImgWrapper,
	ReviewWrapper,
	ReviewTitle,
	ReviewTitle1,
};
