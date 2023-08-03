import { useMutation, useQueryClient } from "react-query";

const useMutateData = (mutateFn, queryKey) => {
	const queryClient = useQueryClient();

	return useMutation(mutateFn, {
		onMutate: () => {},
		onSuccess: res => {
			console.log("res", res.data);
			console.log("성공!", res.data.message);
			// 함수 있을 때에만 실행
			queryClient.invalidateQueries(queryKey);
		},
		onError: () => {
			console.error("error");
		},
		onSettled: () => {
			console.log("onSettled");
		},
	});
};

export default useMutateData;
