import styled from "styled-components";
import { IoIosCloseCircleOutline } from "react-icons/io";
import BasicButton from "components/Button";
import ProductApi from "apis/product.api";
import ChatQueryApi from "apis/chat.api.query";
import { useState } from "react";

const SelectListModal = ({ setIsModalOpen, idx }) => {
	// 특정 상품 채팅방 목록 조회

	const { data } = ChatQueryApi.getSpecificChatList(idx);
	// console.log("data", data);
	const UserList = data?.map(chat => chat.User);
	// console.log("User", UserList);

	// 선택된 유저의 socketId
	const [selectedUser, setSelectedUser] = useState("");

	// 선택 시 값 변화
	const handleUserChange = e => {
		// console.log("token", e.target.value);
		setSelectedUser(e.target.value);
	};

	const handleDealClose = () => {
		if (selectedUser) {
			ProductApi.updateProductStatus({
				prod_idx: idx,
				socket: selectedUser,
			}).then(res => console.log("판매", res));
			// setIsModalOpen(false);
		}
		// updateStatus.mutate();
	};

	return (
		<S.Wrapper>
			<S.Container>
				<div className="closeBtn">
					<IoIosCloseCircleOutline onClick={() => setIsModalOpen(false)} />
				</div>
				<S.Title>판매할 유저를 선택해주세요!</S.Title>
				<div>
					{UserList?.map((user, i) => (
						<S.User key={i}>
							<S.Checkbox
								type="radio"
								id={user.nick_name}
								name="user"
								value={user.token}
								onChange={handleUserChange}
							/>
							<label htmlFor={user.nick_name}>{user.nick_name}</label>
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
