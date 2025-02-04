import React, { useState } from "react";
import logo from "../../assets/Profile-Photo.png";
import { AtSign, Pencil } from "lucide-react";

interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  profileImage: string | null;
}

const DEFAULT_PROFILE_IMAGE = logo;

export default function Akun() {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    email: "wallet@nutech.com",
    firstName: "Kristanto",
    lastName: "Wibowo",
    profileImage: null,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userProfile);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 102400) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, profileImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    } else {
      alert("Ukuran gambar maksimal 100 KB");
    }
  };

  const handleSave = () => {
    setUserProfile(formData);
    setIsEditing(false);
  };

  const handleLogout = () => {
    alert("Logout berhasil!");
    window.location.href = "/login";
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center space-y-4 mt-8">
        <label htmlFor="profileImage" className="cursor-pointer relative">
          <img
            src={formData.profileImage || DEFAULT_PROFILE_IMAGE}
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
          {`${formData.firstName} ${formData.lastName}`}
        </h3>
      </div>

      <form className="space-y-6 mt-8 text-black w-full px-4 md:w-1/2 mx-auto">
        <div className="relative mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <div className="absolute bottom-3 start-0 flex items-center ps-3 pointer-events-none">
            <AtSign size={20} color="#adb5bd" />
          </div>
          <input
            type="email"
            id="email"
            readOnly={!isEditing}
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-white ps-10 border border-neutral-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring- dark:focus:border-blue-500"
            placeholder="masukan email anda"
            required
          />
        </div>

        <div className="relative mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nama Depan
          </label>
          <div className="absolute bottom-3 start-0 flex items-center ps-3 pointer-events-none">
            <AtSign size={20} color="#adb5bd" />
          </div>
          <input
            type="text"
            readOnly={!isEditing}
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="bg-white ps-10 border border-neutral-300 text-gray-900 text-sm rounded-lg focus:ring-[#F13B2F] focus:border-[#F13B2F] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F13B2F]  dark:focus:border-blue-500"
            placeholder="masukan email anda"
            required
          />
        </div>

        <div className="relative mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nama Belakang
          </label>
          <div className="absolute bottom-3 start-0 flex items-center ps-3 pointer-events-none">
            <AtSign size={20} color="#adb5bd" />
          </div>
          <input
            type="text"
            readOnly={!isEditing}
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="bg-white ps-10 border border-neutral-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring- dark:focus:border-blue-500"
            placeholder="masukan email anda"
            required
          />
        </div>

        {isEditing ? (
          <div className="flex flex-col w-full space-x-4 space-y-4">
            <button
              type="button"
              onClick={handleSave}
              className="bg-red-500 text-white px-4 py-2 w-full rounded"
            >
              Simpan
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-200 px-4 py-2 rounded"
            >
              Batalkan
            </button>
          </div>
        ) : (
          <div className="flex flex-col w-full space-x-4 space-y-4">
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="bg-[#F13B2F] text-white w-full py-2 rounded"
            >
              Edit Profil
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-red-500 border border-red-500 py-2 w-1/2 rounded"
            >
              Logout
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
