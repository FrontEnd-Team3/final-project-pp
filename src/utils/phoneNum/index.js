export const replacePhone = str => {
	console.log(str);
	if (!str) return;

	str = str.replace(/[^0-9]/g, "");
	let tmp = "";
	if (str.length < 4) {
		return str;
	} else if (str.length < 7) {
		tmp += str.substr(0, 3);
		tmp += "-";
		tmp += str.substr(3);
		return tmp;
	} else if (str.length < 11) {
		tmp += str.substr(0, 3);
		tmp += "-";
		tmp += str.substr(3, 3);
		tmp += "-";
		tmp += str.substr(6);
		return tmp;
	} else {
		tmp += str.substr(0, 3);
		tmp += "-";
		tmp += str.substr(3, 4);
		tmp += "-";
		tmp += str.substr(7);
		return tmp;
	}
};

export const replacePrice = str => {
	if (!str) return;

	str = str.replace(/[^0-9]/g, "");
	let tmp = "";
	if (str.length < 4) {
		return str;
	} else if (str.length < 5) {
		tmp += str.substr(0, 1);
		tmp += ",";
		tmp += str.substr(1);
		return tmp;
	} else if (str.length < 6) {
		tmp += str.substr(0, 2);
		tmp += ",";
		tmp += str.substr(2);
		return tmp;
	} else if (str.length < 7) {
		tmp += str.substr(0, 3);
		tmp += ",";
		tmp += str.substr(3);
		return tmp;
	} else if (str.length < 8) {
		tmp += str.substr(0, 1);
		tmp += ",";
		tmp += str.substr(1, 3);
		tmp += ",";
		tmp += str.substr(4);
		return tmp;
	} else if (str.length < 9) {
		tmp += str.substr(0, 2);
		tmp += ",";
		tmp += str.substr(2, 3);
		tmp += ",";
		tmp += str.substr(5);
		return tmp;
	} else if (str.length < 10) {
		tmp += str.substr(0, 3);
		tmp += ",";
		tmp += str.substr(3, 3);
		tmp += ",";
		tmp += str.substr(6);
		return tmp;
	}
};
