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
				<div>
					<S.Title>{PayProductList[0].Product.title}</S.Title>
				</div>
			</div>
			<S.RowBox>
				<S.Title>제목: {ReviewData.title}</S.Title>
			</S.RowBox>
			<S.DivisionLine />
			<S.RowBox>
				<p>내용</p>
			</S.RowBox>
			<S.RivieWrapper>
				<S.DetailText>
					<p>{ReviewData.content}</p>
				</S.DetailText>
				{/* <S.RowBox>
				<S.Title1>별점</S.Title1>
			</S.RowBox>
			<S.StarRowBox>
				<div>
					{starArr.map((_, index) => (
						<FontAwesomeIcon
							key={index}
							icon={faStar}
							size="2x"
							color={index <= starState ? "black" : "#dddddd"}
							onClick={() => handleStarClick(index)}
						></FontAwesomeIcon>
					))}
				</div>
			</S.StarRowBox> */}
				<S.DivisionLine2 />
			</S.RivieWrapper>
		</S.Container>
	);
};

export default ReviewDetail;

const DivisionLine = styled.hr`
	width: 962px;
	height: 5px;
	background-color: #dddddd;
	margin-top: 30px;
	border: none;
`;
const DivisionLine2 = styled.hr`
	width: 962px;
	height: 3px;
	background-color: #dddddd;
	margin-top: 20px;
	border: none;
`;

const Container = styled.form`
	width: 962px;
	margin: 0 auto;
	padding: 20px 0;
	display: flex;
	${flexColumn}
	${flexCenter}
	margin-top: 20px;
	margin-bottom: 60px;
`;

const RivieWrapper = styled.div`
	${flexColumn}
`;

const ImgWrapper = styled.div`
	img {
		width: 200px;
	}
`;

const Title = styled.div`
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

const DetailText = styled.div`
	width: 960px;
	height: auto;
	padding: 20px;
	word-break: break-all;
	word-wrap: break-word;
`;

const S = {
	DivisionLine,
	DivisionLine2,
	Title,
	Title1,
	Title2,
	Container,
	RowBox,
	StarRowBox,
	ImgWrapper,
	DetailText,
	RivieWrapper,
};
