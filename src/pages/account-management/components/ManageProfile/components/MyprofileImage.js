import styled from "styled-components";

const MyProfileImage = ({ userData, imageSrc }) => {
	return (
		<>
			{imageSrc ? (
				<S.ProfileImg src={imageSrc} alt="Uploaded Profile" />
			) : (
				<S.ProfileImg src="img/profile.png" alt="Default Profile" />
			)}
		</>
	);
};

export default MyProfileImage;

const ProfileImg = styled.img`
	width: 160px;
	height: 160px;
	border-radius: 100px;
	margin: 60px 60px;
`;

const S = {
	ProfileImg,
};
