import BasicButton from "components/Button";
import OneInput from "./one-input";
import styled from "styled-components";

const FormRegister = () => {
	const handleRegisterProduct = e => {
		e.preventDefault();
	};

	return (
		<form onClick={handleRegisterProduct}>
			<OneInput
				label="물품명"
				placeholder="물품 제목을 입력해주세요"
				required
			/>
			<OneInput label="태그" placeholder="태그를 입력해주세요" />
			<S.DescBox>
				<S.Title>상품설명</S.Title>
				<S.Textarea placeholder="신뢰할 수 있는 거래를 위해 상품 설명을 상세히 적어주세요" />
				<span>0/500</span>
			</S.DescBox>
			<S.CheckBox>
				<S.Title>
					구분 <S.Essential>*</S.Essential>
				</S.Title>
				<S.Checking>
					<S.CheckState></S.CheckState>
					<span>무료나눔</span>
				</S.Checking>
				<S.Checking>
					<S.CheckState></S.CheckState>
					<span>중고거래</span>
				</S.Checking>
			</S.CheckBox>
			<OneInput
				label="가격"
				type="number"
				placeholder="0원 설정 시 무료나눔"
				required
			/>
			<S.MapBox>
				<S.Title>
					위치 설정 <S.Essential>*</S.Essential>
				</S.Title>
				<S.MapAddress>
					서울시 성동구 성수동{" "}
					<BasicButton variant="secondary" size="primary" shape="primary">
						변경
					</BasicButton>
				</S.MapAddress>
				<S.MapApi>지도 api 들어가는 부분</S.MapApi>
			</S.MapBox>
		</form>
	);
};

export default FormRegister;

const Title = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.medium};
`;

const Essential = styled.span`
	color: ${({ theme }) => theme.PALETTE.primary.dark};
`;

const DescBox = styled.div`
	margin: 30px 0;
	padding-bottom: 30px;
	border-bottom: 1px solid #404040;

	& span {
		display: flex;
		justify-content: flex-end;
		margin-top: 8px;
	}
`;

const Textarea = styled.textarea`
	width: 100%;
	background-color: #f1f1f1;
	border: none;
	border-radius: 12px;
	padding: 40px 30px;
	margin-top: 30px;
`;

const CheckBox = styled.div`
	display: flex;
	border-bottom: 1px solid #404040;
	padding-bottom: 30px;
`;
const Checking = styled.div`
	display: flex;
	align-items: center;
	margin-left: 40px;
`;

const CheckState = styled.div`
	width: 16px;
	height: 16px;
	border: 1px solid #404040;
	margin-right: 10px;
`;

const MapBox = styled.div`
	margin: 30px 0;
`;

const MapAddress = styled.p`
	font-size: 12px;
	color: gray;
	margin: 12px 0;
`;

const MapApi = styled.div`
	width: 100%;
	height: 400px;
	background-color: ${({ theme }) => theme.PALETTE.gray};
`;

const S = {
	Title,
	Essential,
	DescBox,
	Textarea,
	CheckBox,
	Checking,
	CheckState,
	MapBox,
	MapAddress,
	MapApi,
};
