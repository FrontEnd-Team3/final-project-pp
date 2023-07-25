import { Controller } from "react-hook-form";
import styled from "styled-components";
import { flexColumn, flexRow } from "styles/common";
import ControlledInput from "../ControlledInput";

const ValidateInput = ({ label, control, placeholder, name, type }) => {
	return (
		<S.SignWrapper>
			<S.Title>{label}</S.Title>
			<Controller
				name={name}
				control={control}
				rules={{ required: true }}
				render={({ field: { onChange, value }, fieldState: { error } }) => {
					return (
						<>
							<ControlledInput
								type={type}
								onChange={onChange}
								value={value}
								placeholder={placeholder}
							/>
							<S.RowBox>{error && <S.Error>{error.message}</S.Error>}</S.RowBox>
						</>
					);
				}}
			/>
		</S.SignWrapper>
	);
};

export default ValidateInput;

const Error = styled.div`
	color: red;
	font-size: 12px;
	margin-top: 10px;
`;

const RowBox = styled.div`
	width: 100%;
	display: flex;
	${flexRow}
`;

const SignWrapper = styled.div`
	${flexColumn}
	position: relative;
	margin-bottom: 20px;
`;

const Title = styled.p`
	font-size: 13px;
	color: ${({ theme }) => theme.PALETTE.black};
	position: relative;
	bottom: 4px;
	font-weight: bold;
	${flexRow}
`;

const S = {
	SignWrapper,
	Title,
	Error,
	RowBox,
};
