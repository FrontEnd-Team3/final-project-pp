import { useQuery } from "react-query";

const useQueryData = (key, fn, queryOptions, params) => {
	return useQuery(key, () => fn(params).then(res => res.data), queryOptions);
};

export default useQueryData;
