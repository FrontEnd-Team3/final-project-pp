import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";
import { IoIosCloseCircleOutline } from "react-icons/io";

const SearchAddress = ({ setAddress, setIsOpen, setValue }) => {
	const postCodeStyle = {
		width: "400px",
	};

	const handleAddress = data => {
		console.log(`주소: ${data.address}`);
		// 서울시 + .. 구 + .. 동
		const fullAdress = data.sido + " " + data.sigungu + " " + data.bname;
		setAddress(fullAdress);
		setValue("region", fullAdress);
		setIsOpen(false);
	};

	return (
		<S.Wrapper>
			<S.Container>
				<div className="closeBtn">
					<IoIosCloseCircleOutline onClick={() => setIsOpen(false)} />
				</div>
				<DaumPostcode
					style={postCodeStyle}
					onComplete={handleAddress}
					autoClose={false}
				/>
			</S.Container>
		</S.Wrapper>
	);
};

export default SearchAddress;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
`;

const Container = styled.div`
	width: 500px;
	height: 500px;
	z-index: 10000;
	position: relative;
	background-color: ${({ theme }) => theme.PALETTE.white};
	border-radius: 8px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	padding: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.closeBtn {
		z-index: 10001;
		position: absolute;
		top: 8px;
		right: 8px;
		cursor: pointer;
	}
`;

const S = { Wrapper, Container };
