import { useState } from "react";
import * as S from "./style";
import { IoIosArrowDown } from "react-icons/io";

const BasicSelect = ({
	variant,
	options,
	selectedValue,
	onChange,
	currensValue,
	setCurrentValue,
	...rest
}) => {
	const [isOpenSelect, setIsOpenSelect] = useState(false);

	const isOpenControl = () => {
		setIsOpenSelect(prev => !prev);
		if (isOpenSelect) return setIsOpenSelect(false);
	};

	const handleChangeValue = value => {
		setCurrentValue(value); // 선택한 값으로 현재 값을 업데이트
		setIsOpenSelect(false);

		if (onChange) onChange(value);
	};

	return (
		<S.Wrapper onClick={isOpenControl}>
			<S.Container variant={variant}>
				<span>{currensValue}</span>
				<IoIosArrowDown size={16} />
			</S.Container>
			{isOpenSelect && (
				<S.Select variant={variant}>
					{options.map((option, idx) => (
						<S.OneSelect
							variant={variant}
							key={idx}
							state={currensValue === option.value}
							onClick={() => handleChangeValue(option.value)}
						>
							{option.label}
						</S.OneSelect>
					))}
				</S.Select>
			)}
		</S.Wrapper>
	);
};

export default BasicSelect;
