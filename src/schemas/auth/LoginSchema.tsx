import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Пожалуйста, введите корректный номер телефона или почту"
    }),
    password: z.string().min(6, {
        message: "Длина пароля не может быть меньше 6 символов"
})
})