import { ErrorMessage } from "@hookform/error-message";
import BasicInput from "components/Input";
import { Controller } from "react-hook-form";
import styled from "styled-components";

const OneController = ({ name, control, errors, ...rest }) => {
	return (
		<>
			<Controller
				name={name}
				control={control}
				render={({ field, fieldState: { error } }) => (
					<BasicInput {...field} {...rest} />
				)}
			/>

			{errors && (
				<S.ErrorBox>
					<ErrorMessage
						name={name}
						errors={errors}
						// render={({ message }) => (
						// 	<p style={{ color: "blue", fontWeight: "400" }}>{message}</p>
						// )}
					/>
				</S.ErrorBox>
			)}
		</>
	);
};

export default OneController;

const ErrorBox = styled.div`
	color: ${({ theme }) => theme.PALETTE.red};
	margin-top: 10px;
	font-weight: 400;
`;

const S = { ErrorBox };
