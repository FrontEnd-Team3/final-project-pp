const getFilteredList = (data, nick_name) => {
	// 날짜별로 채팅 목록 분류하기
	const dateSet = new Set();
	let fileteredDate = data
		?.map(chat => chat.createdAt.split("T")[0])
		.filter(date => {
			if (!dateSet.has(date)) {
				dateSet.add(date);
				return true;
			}
			return false;
		});

	fileteredDate = [...dateSet];
	const filteredByDate = fileteredDate.map(date => {
		return {
			date: date,
			logs: data?.filter(chat => chat.createdAt.split("T")[0] === date),
		};
	});

	// 상대방이 보낸 메세지와 내가 보낸 메세지 구분하기

	const filteredByUser = filteredByDate.map(list => {
		return {
			date: list.date,
			logs: list.logs.map(log => {
				return {
					...log,
					isMine: log?.User?.nick_name === nick_name,
				};
			}),
		};
	});
	return filteredByUser;
};

export default getFilteredList;
