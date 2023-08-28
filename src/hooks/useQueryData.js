import { useQuery } from "react-query";

const useQueryData = (key, fn, queryOptions, params = {}) => {
	return useQuery(key, () => fn(params).then(res => res.data), {
		...queryOptions,
		onError: () => {
			console.error("에러 발생");
		},
	});
};

export default useQueryData;
