import BasicSelect from "components/Select";
import styled from "styled-components";

const options = [
	{ value: "1개월", label: "1개월" },
	{ value: "3개월", label: "3개월" },
	{ value: "6개월", label: "6개월" },
	{ value: "9개월", label: "9개월" },
	{ value: "12개월", label: "12개월" },
	{ value: "전체", label: "전체" },
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
	width: 1060px;
	display: flex;
	justify-content: flex-end;
	z-index: 10;
`;

const S = { SelectContainer };
