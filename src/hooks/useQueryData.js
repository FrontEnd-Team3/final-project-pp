import { useQuery } from "react-query";

const useQueryData = (key, fn, params) => {
	const { data, isLoading, isError } = useQuery(key, () =>
		fn(params).then(res => res.data),
	);

	return { data, isLoading, isError };
};

export default useQueryData;
