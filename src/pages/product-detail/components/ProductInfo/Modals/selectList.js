import styled from "styled-components";
import { IoIosCloseCircleOutline } from "react-icons/io";
import BasicButton from "components/Button";
import ProductQueryApi from "apis/product.query.api";

const SelectListModal = ({ setIsModalOpen, chat, setIsDealClosed, idx }) => {
	// 특정 상품 채팅방 목록 조회

	const updateStatus = ProductQueryApi.updateProductStatus(idx);

	const handleDealClose = () => {
		setIsModalOpen(false);
		setIsDealClosed(true);
		updateStatus.mutate();
	};

	return (
		<S.Wrapper>
			<S.Container>
				<div className="closeBtn">
					<IoIosCloseCircleOutline onClick={() => setIsModalOpen(false)} />
				</div>
				<S.Title>판매할 유저를 선택해주세요!</S.Title>
				<div>
					{chat.map((chat, i) => (
						<S.User key={i}>
							<S.Checkbox
								type="radio"
								id={User.nick_name}
								name="user"
								value={User.nick_name}
							/>
							<label htmlFor={User.nick_name}>{chat.User.nick_name}</label>
						</S.User>
					))}
				</div>
				<S.ButtonClick>
					<BasicButton
						size={"mediumSecond"}
						color={"black"}
						children={"판매하기"}
						onClick={handleDealClose}
					/>
				</S.ButtonClick>
			</S.Container>
		</S.Wrapper>
	);
};

export default SelectListModal;

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

const Title = styled.div`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
`;

const ButtonClick = styled.div`
	margin-top: 10px;
`;

const User = styled.div`
	margin-bottom: 10px;
`;

const Checkbox = styled.input`
	margin-right: 10px;
`;

const S = { Wrapper, Container, ButtonClick, Title, User, Checkbox };
