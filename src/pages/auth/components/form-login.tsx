import { useDispatch } from "react-redux";
import { useState } from "react";
import { AtSign, Eye, EyeOff, LockKeyhole } from "lucide-react";
import { motion } from "framer-motion";
import { formLoginSchema } from "../lib/validation-form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { setCredentials } from "../../../features/auth/auth-slice";
import { LoginData, useLogin } from "../../../api/auth";

type FormLoginData = z.infer<typeof formLoginSchema>;

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginData>({
    resolver: zodResolver(formLoginSchema),
    mode: "onChange",
  });

  const doLogin = useLogin();
  const onSubmit = async (data: LoginData) => {
    try {
      const response = await doLogin.mutateAsync({
        email: data.email,
        password: data.password,
      });

      const token = response?.data?.data?.token;
      const expiresAt = Date.now() + 12 * 60 * 60 * 1000;

      if (token) {
        dispatch(setCredentials({ token, expiresAt }));
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mb-4 space-y-1">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <AtSign size={20} color="#adb5bd" />
          </div>
          <input
            autoComplete="email"
            {...register("email")}
            type="email"
            placeholder="masukan email anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 ps-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-[#adb5bd]"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col mb-4 space-y-1">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <LockKeyhole size={20} color="#adb5bd" />
          </div>

          <input
            autoComplete="current-password"
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="masukkan password anda"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-black p-3 ps-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-[#adb5bd]"
          />

          <div
            className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff size={20} color="#adb5bd" />
            ) : (
              <Eye size={20} color="#adb5bd" />
            )}
          </div>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition cursor-pointer"
      >
        {doLogin.isPending ? "Loading..." : "Login"}
      </motion.button>
    </form>
  );
}
