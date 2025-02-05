import { z } from "zod";

export const formLoginSchema = z.object({
  email: z
    .string({ required_error: "Email gak boleh kosong" })
    .email({ message: "Email gak valid" }),
  password: z
    .string({ required_error: "Password gak boleh kosong" })
    .min(5, { message: "Password minimal 5 karakter" }),
});

export const formRegistrasiSchema = z
  .object({
    email: z
      .string({ required_error: "Email gak boleh kosong" })
      .email({ message: "Email gak valid" }),
    first_name: z.string().min(1, "Nama depan gak boleh kosong"),
    last_name: z.string().min(1, "Nama belakang gak boleh kosong"),
    password: z
      .string({ required_error: "Password gak boleh kosong" })
      .min(8, { message: "Password minimal 8 karakter" }),
    confirmPassword: z.string().min(1, "Confirm password gak boleh kosong"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password gak cocok",
    path: ["confirmPassword"],
  });
