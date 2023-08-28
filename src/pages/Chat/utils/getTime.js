export const getDayOrNight = time =>
	new Date(time).toLocaleTimeString("ko-KR").split(" ")[0];

export const getChatTime = time =>
	new Date(time)
		.toLocaleTimeString("ko-KR")
		.split(" ")[1]
		.split(":")
		.slice(0, 2)
		.join(":");
