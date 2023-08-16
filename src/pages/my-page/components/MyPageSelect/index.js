import { useState } from "react";
import * as S from "./style";
import { IoIosArrowDown } from "react-icons/io";

const MyPageSelect = ({
	variant,
	options,
	selectedStatus,
	setSelectedStatus,
	...rest
}) => {
	const [isOpenSelect, setIsOpenSelect] = useState(false);
	// const [currensValue, setCurrentValue] = useState(selectedValue);

	const isOpenControl = () => {
		setIsOpenSelect(prev => !prev);
		if (isOpenSelect) return setIsOpenSelect(false);
	};

	const handleChangeValue = value => {
		setSelectedStatus(value); // 선택한 값으로 현재 값을 업데이트
		setIsOpenSelect(false);
	};

	console.log("현재 옵션", selectedStatus);

	return (
		<S.Wrapper onClick={isOpenControl}>
			<S.Container variant={variant}>
				<span>{selectedStatus}</span>
				<IoIosArrowDown size={16} />
			</S.Container>
			{isOpenSelect && (
				<S.Select variant={variant}>
					{options.map((option, idx) => (
						<S.OneSelect
							variant={variant}
							key={idx}
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

export default MyPageSelect;
