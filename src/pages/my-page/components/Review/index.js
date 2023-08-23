import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthApi from "apis/auth.api";
import UserQueryApi from "apis/user.query.api";
import BasicButton from "components/Button";
import { useState } from "react";
import styled from "styled-components";
import { flexCenter, flexColumn, flexRow } from "styles/common";
import ValidateInput from "./OneValidate";
import * as SCHEMA from "../../../../consts/schema";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import AlertModal from "pages/product-detail/components/ProductInfo/Modals/alert";

const Review = ({ productIndex, reviewData }) => {
	const navigate = useNavigate();
	const page = 1;
	const { data: PayProductData } = UserQueryApi?.PayProductList({
		page,
	});

	const [images, setImages] = useState([]);

	const PayReviewList = PayProductData?.reviewList;

	const PayProductList = PayReviewList?.filter(
		product => product.Product.idx === productIndex,
	);
	const OndoData = PayProductList[0].Product.User.Ondo.ondo;

	const [starState, setStarState] = useState(-1);
	const starArr = ["*", "*", "*", "*", "*"];
	const [ondo, setOndo] = useState(OndoData);

	const [completeOpen, setCompleteOpen] = useState(false);

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

	const handleSave = handleSubmit(async () => {
		try {
			// 선택된 항목만 찾기
			const selectedReview = reviewData.find(
				item => item.Product.idx === productIndex,
			);
			if (selectedReview) {
				const payList_idx = selectedReview.idx;
				const newValue = {
					title: reviewValue,
					content: reviewInfoValue,
					ondo: ondo,
					images: images,
				};
				const response = await AuthApi.userReview(payList_idx, newValue);
				if (response && response.status === 200) {
					setCompleteOpen(true);
					setTimeout(() => {
						setCompleteOpen(false);
						window.location.reload();
					}, 3000);
					console.log(`리뷰 저장 성공`, response);
				}
			}
		} catch (error) {
			console.error("리뷰 저장에 실패하였습니다.", error);
		}
	});

	const reviewValue = getValues("review");
	const reviewInfoValue = getValues("reviewInfo");

	return (
		<S.Container onSubmit={handleSave}>
			{completeOpen && <AlertModal message={"등록이 완료되었습니다."} />}
			<div>
				<S.ImgWrapper>
					<img src={PayProductList[0].Product.img_url} />
				</S.ImgWrapper>
				<div>
					<S.Title>{PayProductList[0].Product.title}</S.Title>
				</div>
			</div>
			<S.RowBox>
				<S.Title>후기 작성</S.Title>
			</S.RowBox>
			<S.DivisionLine />
			<S.RowBox>
				<S.Title1>거래는 어떠셨나요? 별점을 매겨주세요</S.Title1>
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
			</S.StarRowBox>
			<S.DivisionLine2 />
			<S.RowBox>
				<ValidateInput
					control={control}
					name={"review"}
					errors={errors}
					type={"text"}
					placeholder={"제목을 입력해주세요"}
				/>
			</S.RowBox>
			<S.RowBox>
				<ValidateInput
					control={control}
					name={"reviewInfo"}
					errors={errors}
					type={"text"}
					placeholder={"내용"}
				/>
			</S.RowBox>
			<S.DivisionLine2 />
			<S.RowBox>
				<BasicButton
					color={"black"}
					size={"xmedium"}
					children={"저장하기"}
					style={{
						width: "124px",
						fontSize: "16px",
						borderRadius: "6px",
						fontWeight: "600",
						border: "1px solid #dddddd",
					}}
				/>
			</S.RowBox>
		</S.Container>
	);
};

export default Review;

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
	margin-bottom: 100px
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
};
