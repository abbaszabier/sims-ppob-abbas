import { motion } from "framer-motion";
import { AtSign, User } from "lucide-react";
import { useState } from "react";
import { store } from "../../../store/store";
import { logout } from "../../../features/auth/auth-slice";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { formProfileSchema } from "../lib/validation-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserProfile } from "../Akun";
import { useUpdateProfile } from "../../../api/profile";

interface FormProfileProps {
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;

  formData: UserProfile;

  setFormData: React.Dispatch<React.SetStateAction<UserProfile>>;
}

type FormProfileData = z.infer<typeof formProfileSchema>;

export default function FormProfile({
  setUserProfile,
  formData,
  setFormData,
}: FormProfileProps) {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProfileData>({
    resolver: zodResolver(formProfileSchema),
    mode: "onChange",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const doUpdateProfile = useUpdateProfile();
  const onSubmit = async (data: FormProfileData) => {
    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);

    try {
      const response = await doUpdateProfile.mutateAsync(formData);

      setUserProfile({
        email: response?.data?.data.email,
        first_name: response?.data?.data.first_name,
        last_name: response?.data?.data.last_name,
        profile_image: response?.data?.data.profile_image,
      });

      setIsEditing(false);
    } catch (err) {
      console.error("Update profile error:", err);
    }
  };

  const handleLogout = () => {
    store.dispatch(logout());
    navigate("/login");
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="space-y-6 mt-8 text-black w-full px-4 md:w-1/2 mx-auto"
    >
      <div className="flex flex-col mb-4 space-y-1">
        <div className="relative">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <div className="absolute bottom-3 start-0 flex items-center ps-3 pointer-events-none">
            <AtSign size={20} color="#adb5bd" />
          </div>
          <input
            type="email"
            id="email"
            readOnly
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-white ps-10 border border-neutral-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 outline-none block w-full p-2.5"
            placeholder="masukan email anda"
            required
          />
        </div>
      </div>

      <div className="flex flex-col mb-4 space-y-1">
        <div className="relative">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nama Depan
          </label>
          <div className="absolute bottom-3 start-0 flex items-center ps-3 pointer-events-none">
            <User size={20} color="#adb5bd" />
          </div>
          <input
            type="text"
            {...register("first_name")}
            readOnly={!isEditing}
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
            className="bg-white ps-10 border border-neutral-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 outline-none block w-full p-2.5"
            placeholder="masukan email anda"
            required
          />
        </div>
        {errors.first_name && (
          <p className="text-red-500 text-sm">{errors.first_name.message}</p>
        )}
      </div>

      <div className="flex flex-col mb-4 space-y-1">
        <div className="relative ">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nama Belakang
          </label>
          <div className="absolute bottom-3 start-0 flex items-center ps-3 pointer-events-none">
            <User size={20} color="#adb5bd" />
          </div>
          <input
            type="text"
            {...register("last_name")}
            readOnly={!isEditing}
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
            className="bg-white ps-10 border border-neutral-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 outline-none block w-full p-2.5"
            placeholder="masukan email anda"
            required
          />
        </div>
        {errors.last_name && (
          <p className="text-red-500 text-sm">{errors.last_name.message}</p>
        )}
      </div>

      {isEditing && (
        <div className="flex flex-col w-full space-x-4 space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-red-500 text-white px-4 py-2 w-full rounded cursor-pointer"
          >
            Simpan
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => setIsEditing(false)}
            className="bg-gray-200 px-4 py-2 rounded cursor-pointer"
          >
            Batalkan
          </motion.button>
        </div>
      )}

      {!isEditing && (
        <div className="flex flex-col w-full space-x-4 space-y-4 ">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => setIsEditing(true)}
            className="bg-[#F13B2F] text-white w-full py-2 rounded cursor-pointer"
          >
            Edit Profil
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={handleLogout}
            className="w-full text-red-500 border border-red-500 py-2 w-1/2 rounded cursor-pointer"
          >
            Logout
          </motion.button>
        </div>
      )}
    </motion.form>
  );
}
