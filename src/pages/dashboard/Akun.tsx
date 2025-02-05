import React, { useEffect, useState } from "react";
import logo from "../../assets/Profile-Photo.png";
import { Pencil } from "lucide-react";
import { motion } from "framer-motion";
import { useProfile, useUpdateProfileImage } from "../../api/profile";
import FormProfile from "./components/form-profile";
import { toast } from "react-toastify";

export interface UserProfile {
  email: string;
  first_name: string;
  last_name: string;
  profile_image: string | null;
}

const DEFAULT_PROFILE_IMAGE = logo;

export default function Akun() {
  const { data } = useProfile();
  const [userProfile, setUserProfile] = useState<UserProfile>({
    email: data?.data?.data.email ? data?.data?.data.email : "",
    first_name: data?.data?.data.first_name ? data?.data?.data.first_name : "",
    last_name: data?.data?.data.last_name ? data?.data?.data.last_name : "",
    profile_image:
      data?.data?.data.profile_image ===
      "https://minio.nutech-integrasi.com/take-home-test/null"
        ? DEFAULT_PROFILE_IMAGE
        : data?.data?.data.profile_image ?? null,
  });
  const [formData, setFormData] = useState(userProfile);

  useEffect(() => {
    if (data?.data?.data) {
      const newProfile: UserProfile = {
        email: data.data.data.email || "",
        first_name: data.data.data.first_name || "",
        last_name: data.data.data.last_name || "",
        profile_image:
          data.data.data.profile_image ===
          "https://minio.nutech-integrasi.com/take-home-test/null"
            ? DEFAULT_PROFILE_IMAGE
            : data.data.data.profile_image ?? null,
      };

      setUserProfile(newProfile);
      setFormData(newProfile);
    }
  }, [data]);

  const doUpdateProfileImage = useUpdateProfileImage();
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      toast.error("Format gambar harus JPG atau PNG", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (file.size > 102400) {
      toast.error("Ukuran gambar maksimal 100 KB", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      await doUpdateProfileImage.mutateAsync(file);
    } catch (error) {
      console.error("Upload gagal", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-screen-xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-center space-y-4 mt-8"
      >
        <label htmlFor="profileImage" className="cursor-pointer relative">
          <img
            src={formData.profile_image || DEFAULT_PROFILE_IMAGE}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <input
            id="profileImage"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <div className="absolute right-1/2 bottom-1 left-18 bg-red-100">
            <div className="bg-white border border-neutral-200 w-6 h-6 rounded-full flex items-center justify-center">
              <Pencil color="#000" size={10} />
            </div>
          </div>
        </label>
        <h3 className="text-2xl font-semibold text-black">
          {`${formData.first_name} ${formData.last_name}`}
        </h3>
      </motion.div>

      <FormProfile
        setUserProfile={setUserProfile}
        formData={formData}
        setFormData={setFormData}
      />
    </motion.div>
  );
}
