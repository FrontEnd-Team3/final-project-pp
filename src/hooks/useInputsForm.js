import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "consts/schema";

const useInputForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(registerSchema),
		mode: "onChange",
	});

	return { handleSubmit, control, errors };
};

export default useInputForm;
