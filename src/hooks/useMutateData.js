import { useMutation, useQueryClient } from "react-query";

const useMutateData = (mutateFn, queryKey, successFn) => {
	const queryClient = useQueryClient();

	return useMutation(mutateFn, {
		onMutate: () => {},
		onSuccess: res => {
			// console.log("res", res);
			// 함수 있을 때에만 실행
			queryClient.invalidateQueries(queryKey);
			successFn();
		},
		onError: () => {
			console.error("error");
		},
		onSettled: () => {
			// console.log("onSettled");
		},
	});
};

export default useMutateData;
