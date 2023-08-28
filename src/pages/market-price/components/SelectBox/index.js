import BasicSelect from "components/Select";
import styled from "styled-components";

const options = [
	{ value: "1개월", label: "1개월" },
	{ value: "3개월", label: "3개월" },
	{ value: "6개월", label: "6개월" },
];

const SelectBox = ({ currensValue, setCurrentValue }) => {
	return (
		<S.SelectContainer>
			<BasicSelect
				variant={"primary"}
				options={options}
				selectedValue={"1개월"}
				currensValue={currensValue}
				setCurrentValue={setCurrentValue}
			/>
		</S.SelectContainer>
	);
};

export default SelectBox;

const SelectContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: flex-end;
	@media ${({ theme }) => theme.DEVICE.pc} {
		padding: 0 20px;
	}
`;

const S = { SelectContainer };
