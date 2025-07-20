import AuthFormLayout from "@/components/layout/auth/AuthFormLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { RegistrationSchema } from "@/schemas/auth/RegistrationSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const RegistrationForm = function () {
  const form = useForm({
    resolver: zodResolver(RegistrationSchema),
    defaultValues: {
      email: "",
      phone: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof RegistrationSchema>) => {
    console.log("Tried to register");
  };

  const emailField = (
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-card-foreground">
            Адрес электронной почты
          </FormLabel>
          <FormControl>
            <Input
              className="border-primary"
              {...field}
              type="email"
              placeholder="example@mail.com"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const phoneField = (
    <FormField
      control={form.control}
      name="phone"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-card-foreground">
            Мобильный телефон (необязательно)
          </FormLabel>
          <FormControl>
            <Input
              className="border-primary"
              {...field}
              type="string"
              placeholder="+7 (999) 999-99-99"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const usernameField = (
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-card-foreground">Ваше имя</FormLabel>
          <FormControl>
            <Input className="border-primary" {...field} type="string" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const passwordField = (
    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-card-foreground">Пароль</FormLabel>
          <FormControl>
            <Input
              className="border-primary"
              {...field}
              type="password"
              placeholder="******"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const passwordConfirmPassword = (
    <FormField
      control={form.control}
      name="confirmPassword"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-card-foreground">
            Пароль повторно
          </FormLabel>
          <FormControl>
            <Input
              className="border-primary"
              {...field}
              type="password"
              placeholder="******"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <div className="flex justify-center max-w-80% py-10">
      <AuthFormLayout
        title="Регистрация"
        footerButtonLabel="Вернуться на страницу входа"
        footerAddress="/login"
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-3/4"
          >
            <div className="space-y-4">
                {emailField}
                {phoneField}
                {usernameField}
                {passwordField}
                {passwordConfirmPassword}
            </div>
            <Button type="submit" className="w-full">
              Зарегистрироваться
            </Button>
          </form>
        </Form>
      </AuthFormLayout>
    </div>
  );
};

export default RegistrationForm;
