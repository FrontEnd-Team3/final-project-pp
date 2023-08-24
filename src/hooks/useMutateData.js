import { useMutation, useQueryClient } from "react-query";

const useMutateData = (mutateFn, queryKey, successFn) => {
	const queryClient = useQueryClient();

	return useMutation(mutateFn, {
		onMutate: () => {},
		onSuccess: res => {
			queryClient.invalidateQueries(queryKey);
			successFn();
		},
		onError: () => {
			console.error("error");
		},
		onSettled: () => {},
	});
};

export default useMutateData;
