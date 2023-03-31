import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactFormSchema = z.object({
	name: z.string(),
	email: z.string(),
	message: z.string(),
});
type ContactInput = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		control,
		getValues,
		formState: { errors },
	} = useForm<ContactInput>({
		resolver: zodResolver(contactFormSchema),
		mode: "onBlur",
	});
	const onSubmit = (data: ContactInput) => console.log(data);
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col text-white font-medium leading-[1.625rem] tracking-[-.22px]">
			<input
				type="text"
				{...register("name")}
				placeholder="NAME"
				className="bg-transparent border-b border-white p-3 focus:outline-none mb-4 "
			/>
			<input
				type="text"
				{...register("email")}
				placeholder="EMAIL"
				className="bg-transparent border-b border-white p-3 focus:outline-none mb-4 "
			/>
			<textarea
				{...register("message")}
				placeholder="MESSAGE"
				rows={4}
				className="bg-transparent border-b border-white p-3 focus:outline-none resize-none mb-8 "
			/>

			<button
				type="submit"
				className="underline decoration-neon underline-offset-[14px] self-end font-bold leading-[1.625rem] tracking-[2.29px]">
				SEND MESSAGE
			</button>
		</form>
	);
};
