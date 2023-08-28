import { ErrorMessage } from "@hookform/error-message";
import BasicInput from "components/Input";
import { Controller } from "react-hook-form";
import styled from "styled-components";

const OneController = ({ name, control, errors, field, ...rest }) => {
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
					<ErrorMessage name={name} errors={errors} />
				</S.ErrorBox>
			)}
		</>
	);
};

export default OneController;

const ErrorBox = styled.div`
	color: ${({ theme }) => theme.PALETTE.red};
	margin-top: 10px;
	font-weight: bold;
`;

const S = { ErrorBox };
