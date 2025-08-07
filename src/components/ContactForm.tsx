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
  const { register, handleSubmit } = useForm<ContactInput>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: ContactInput) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col text-white font-medium leading-6.5 tracking-[-.22px] lg:w-[445px] gap-4"
    >
      <input
        type="text"
        {...register("name")}
        placeholder="Name"
        className="bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-neon/60 focus:border-neon/50 placeholder:uppercase placeholder:text-gray/60 transition"
      />
      <input
        type="text"
        {...register("email")}
        placeholder="Email"
        className="bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-neon/60 focus:border-neon/50 placeholder:uppercase placeholder:text-gray/60 transition"
      />
      <textarea
        {...register("message")}
        placeholder="Message"
        rows={4}
        className="bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-neon/60 focus:border-neon/50 placeholder:uppercase placeholder:text-gray/60 resize-none transition"
      />

      <button
        type="submit"
        className="self-end inline-flex items-center gap-2 rounded-md bg-neon text-coal px-5 py-3 font-bold leading-6.5 tracking-[2.29px] hover:bg-neon/90 active:bg-neon/80 transition shadow-[var(--shadow-neon)]"
      >
        SEND MESSAGE
      </button>
    </form>
  );
};
