const onFiltering = value => {
	if (value === "등록순") {
		filteredList.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
	} else if (value === "인기순") {
		filteredList.sort((a, b) => b.liked - a.liked);
	} else if (value === "저가순") {
		filteredList.sort((a, b) => a.price - b.price);
	} else if (value === "고가순") {
		filteredList.sort((a, b) => b.price - a.price);
	}
};
