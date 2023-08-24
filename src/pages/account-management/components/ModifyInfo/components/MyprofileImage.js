import styled from "styled-components";

const MyProfileImage = ({ userData, imageSrc }) => {
	const defaultProfileImage = "img/profile.png";
	return (
		<>
			<S.ProfileImg
				src={userData.profile_url ? userData.profile_url : imageSrc}
				alt="Profile"
			/>
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
