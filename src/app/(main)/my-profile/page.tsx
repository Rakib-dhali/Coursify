"use client";
import { useState } from "react";
import Image from "next/image";
import { UserPen } from "lucide-react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function ProfileSection() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);

  const {data: session} = authClient.useSession();
  const isLoggedIn = !!session?.user;

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <div className="bg-white shadow-md rounded-2xl p-6 md:p-10">
        <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
          My Profile
        </h2>
        <button  onClick={ ()=> router.push("/my-profile/update-information")} className="p-1 px-3 border border-blue-900 bg-blue-50 rounded-full flex items-center gap-3 font-semibold">Update information <UserPen /></button>
</div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          
          {/* Profile Image */}
          <div className="flex flex-col items-center gap-3">
            <Image
              src={session?.user?.image || "https://ik.imagekit.io/rakib343/user-male-circle--v1.png"}
              alt="profile"
              width={120}
              height={120}
              className="rounded-full border border-blue-300"
            />
          </div>

          {/* Form */}
          <div className="flex-1 w-full space-y-5">
            
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={session?.user?.name || ""}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                readOnly
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email
              </label>
              <input
              readOnly
                type="email"
                placeholder="you@example.com"
                value={session?.user?.email || ""}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}