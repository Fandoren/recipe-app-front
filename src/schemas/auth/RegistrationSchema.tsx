import * as z from "zod";

export const RegistrationSchema = z
  .object({
    email: z.string().email({
      message: "Пожалуйста, введите корректный email",
    }),
    phone: z
      .string()
      .regex(
        /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
        "Некорректный формат номера телефона"
      )
      .or(z.literal("")),
    username: z.string().min(1, {
      message: "Пожалуйста, введите имя пользователя",
    }),
    password: z.string().min(6, {
      message: "Длина пароля не может быть меньше 6 символов",
    }),
    confirmPassword: z.string().min(6, {
      message: "Длина пароля не может быть меньше 6 символов",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });
