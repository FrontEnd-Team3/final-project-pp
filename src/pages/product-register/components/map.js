import BasicButton from "components/Button";
import SearchAddress from "components/SearchAddress";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Map = ({ address, setAddress }) => {
	const { kakao } = window;
	const [isOpen, setIsOpen] = useState(false);
	const [map, setMap] = useState(null);
	const [marker, setMarker] = useState(null);

	useEffect(() => {
		const container = document.getElementById("map");
		const options = {
			center: new kakao.maps.LatLng(127.057019282187, 37.5409627375216),
			//지도의 중심좌표.
			level: 3, //지도의 레벨(확대, 축소 정도)
		};
		// 지도 생성 .
		const map = new kakao.maps.Map(container, options);
		setMap(map);
		const coords = new kakao.maps.LatLng(127.057019282187, 37.5409627375216);
		var marker = new kakao.maps.Marker({
			map: map,
			position: coords,
		});
		setMarker(marker);
	}, []);
	// 위치 변경시 지도에 마크 찍히게
	const handleAddressChange = newAddress => {
		setAddress(newAddress);
		const geocoder = new kakao.maps.services.Geocoder();
		geocoder.addressSearch(newAddress, (result, status) => {
			if (status === kakao.maps.services.Status.OK) {
				const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
				map.panTo(coords);
				var marker = new kakao.maps.Marker({
					map: map,
					position: coords,
				});
				setMarker(marker);
			}
		});
		setIsOpen(false);
	};

	return (
		<>
			<S.TitleAnother>
				위치 설정 <S.Essential>*</S.Essential>
				<BasicButton
					color={"primary"}
					size={"primary"}
					shape={"primary"}
					children={"주소 찾기"}
					onClick={e => {
						e.preventDefault();
						setIsOpen(true);
					}}
				/>
			</S.TitleAnother>
			<S.MapAddress>
				{isOpen && (
					<SearchAddress
						setAddress={handleAddressChange}
						setIsOpen={setIsOpen}
					/>
				)}
				{address}
			</S.MapAddress>

			<S.MapBox id="map" />
		</>
	);
};

export default Map;
const MapBox = styled.div.attrs({
	id: "map",
})`
	width: 100%;
	height: 400px;
`;

const MapAddress = styled.div`
	font-size: 14px;
	color: gray;
	margin: 12px 0 20px 0;

	button {
		line-height: 12px;
		margin-left: 8px;
	}
`;

const Essential = styled.span`
	color: ${({ theme }) => theme.PALETTE.primary};
	margin-left: 4px;
`;

const TitleAnother = styled.p`
	display: flex;
	align-items: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.semimedium};
	font-weight: bold;

	button {
		margin-left: 12px;
	}
`;

const S = {
	MapAddress,
	MapBox,
	TitleAnother,
	Essential,
};
