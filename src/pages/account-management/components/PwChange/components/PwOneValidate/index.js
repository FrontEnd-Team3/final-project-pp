import { Controller } from "react-hook-form";
import styled from "styled-components";
import { flexColumn, flexRow } from "styles/common";
import PwControlledInput from "../PwControlledInput";

const PwValidateInput = ({
	label,
	control,
	placeholder,
	name,
	type,
	address,
	onClick,
}) => {
	return (
		<S.SignWrapper>
			<Controller
				name={name}
				control={control}
				rules={{ required: true }}
				render={({ field: { onChange, value }, fieldState: { error } }) => {
					return (
						<>
							<PwControlledInput
								type={type}
								onChange={onChange}
								value={address ? address : value}
								placeholder={placeholder}
								onClick={onClick}
							/>
							<S.RowBox>{error && <S.Error>{error.message}</S.Error>}</S.RowBox>
						</>
					);
				}}
			/>
		</S.SignWrapper>
	);
};

export default PwValidateInput;

const Error = styled.div`
	color: red;
	font-size: 14px;
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
`;

const S = {
	SignWrapper,
	Error,
	RowBox,
};
