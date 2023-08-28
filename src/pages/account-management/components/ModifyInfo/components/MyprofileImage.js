import styled from "styled-components";

const MyProfileImage = ({ userData, imageSrc }) => {
	return (
		<>
			<S.ProfileImg alt="Profile" />
		</>
	);
};

export default MyProfileImage;

const ProfileImg = styled.img`
	width: 180px;
	height: 180px;
	border-radius: 100px;
	margin: 60px 60px;
`;

const S = {
	ProfileImg,
};
