import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BasicButton from "components/Button";
import styled from "styled-components";
import { flexCenter, flexColumn, flexRow, primaryFont } from "styles/common";

const Review = () => {
	return (
		<S.Container>
			<S.RowBox>
				<S.Title>후기 작성</S.Title>
			</S.RowBox>
			<S.DivisionLine />
			<S.RowBox>
				<S.Title1>거래는 어떠셨나요? 별점을 매겨주세요</S.Title1>
			</S.RowBox>
			<S.StarRowBox>
				<div>
					<FontAwesomeIcon icon={faStar} size="2x" color="#dddddd" />
				</div>
				<div>
					<FontAwesomeIcon icon={faStar} size="2x" color="#dddddd" />
				</div>
				<div>
					<FontAwesomeIcon icon={faStar} size="2x" color="#dddddd" />
				</div>
				<div>
					<FontAwesomeIcon icon={faStar} size="2x" color="#dddddd" />
				</div>
				<div>
					<FontAwesomeIcon icon={faStar} size="2x" color="#dddddd" />
				</div>
			</S.StarRowBox>
			<S.DivisionLine2 />
			<S.RowBox>
				<S.TextArea
					rows="7"
					cols="100"
					placeholder="최소 10자이상 남겨주세요"
					maxLength="500"
				></S.TextArea>
			</S.RowBox>
			<S.DivisionLine2 />
			<S.RowBox>
				<BasicButton
					variant={"black"}
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

const Container = styled.div`
	display: flex;
	${primaryFont}
	${flexColumn}
    ${flexCenter}
	margin-bottom: 100px
`;

const Title = styled.div`
	margin-top: 20px;
	font-size: 22px;
	font-weight: bold;
	color: black;
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

const TextArea = styled.textarea`
	font-size: 18px;
	font-weight: 600;
	border: none;
	${primaryFont}
	resize: none; /* 사용자가 크기를 조절하지 못하게 함 */
	&::placeholder {
		color: #9f9797;
		font-size: 18px;
		font-weight: bold;
		overflow: hidden;
	}
`;

const S = {
	DivisionLine,
	DivisionLine2,
	Title,
	Title1,
	Title2,
	TextArea,
	Container,
	RowBox,
	StarRowBox,
};
