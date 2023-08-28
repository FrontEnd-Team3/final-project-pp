import moment from "moment";
import "moment/locale/ko";

const getDate = date => moment(date).fromNow();

export default getDate;
