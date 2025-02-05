import { useState } from "react";
import { AtSign, Eye, EyeOff, LockKeyhole, User } from "lucide-react";
import { motion } from "framer-motion";
import { formRegistrasiSchema } from "../lib/validation-form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegistrasi } from "../../../api/auth";

type FormRegistrasiData = z.infer<typeof formRegistrasiSchema>;

export default function FormRegistrasi() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegistrasiData>({
    resolver: zodResolver(formRegistrasiSchema),
    mode: "onChange",
  });

  const doRegistrasi = useRegistrasi();
  const onSubmit = handleSubmit(async (data) => {
    try {
      await doRegistrasi.mutateAsync({
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
        password: data.password,
      });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <form className="w-full max-w-sm" onSubmit={onSubmit}>
      <div className="flex flex-col mb-4 space-y-1">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <AtSign size={20} color="#adb5bd" />
          </div>
          <input
            autoComplete="email"
            {...register("email")}
            id="email"
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
            <User size={20} color="#adb5bd" />
          </div>
          <input
            autoComplete="first_name"
            id="first_name"
            {...register("first_name")}
            type="text"
            placeholder="nama depan"
            className="w-full p-3 ps-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-[#adb5bd]"
          />
        </div>
        {errors.first_name && (
          <p className="text-red-500 text-sm">{errors.first_name.message}</p>
        )}
      </div>

      <div className="flex flex-col mb-4 space-y-1">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <User size={20} color="#adb5bd" />
          </div>
          <input
            autoComplete="last_name"
            id="last_name"
            {...register("last_name")}
            type="text"
            placeholder="nama belakang"
            className="w-full p-3 ps-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-[#adb5bd]"
          />
        </div>
        {errors.last_name && (
          <p className="text-red-500 text-sm">{errors.last_name.message}</p>
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
            placeholder="buat password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 ps-10 ps-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-[#adb5bd]"
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

      <div className="flex flex-col mb-4 space-y-1">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <LockKeyhole size={20} color="#adb5bd" />
          </div>
          <input
            {...register("confirmPassword")}
            autoComplete="new-password"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="konfirmasi password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 ps-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-[#adb5bd]"
          />
          <div
            className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff size={20} color="#adb5bd" />
            ) : (
              <Eye size={20} color="#adb5bd" />
            )}
          </div>
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition cursor-pointer"
      >
        {doRegistrasi.isPending ? "Loading..." : "Registrasi"}
      </motion.button>
    </form>
  );
}
