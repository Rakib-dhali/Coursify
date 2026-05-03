"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { data } = await authClient.updateUser({
      image,
      name,
    });

    if (data?.status) {
      toast.success("profile updated successfully");
      router.push("/my-profile");
    }
  }
  return (
    <main className="px-4 md:px-8 mt-20 flex flex-col items-center justify-center">
      <div className="max-w-md w-full">
        <div className="p-6 rounded-lg bg-blue-50/50 border border-blue-300 shadow-xs">
          <form onSubmit={handleSubmit} className="space-y-4 mt-7">
            <div>
              <label
                htmlFor="name"
                className="mb-2 text-slate-900 font-medium text-sm inline-block"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="mb-2 text-slate-900 font-medium text-sm inline-block"
              >
                Profile Image Url
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://unsplash.com/s/photos/url"
                required
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 mt-3 py-2 px-3.5 text-sm rounded-md font-semibold text-slate-900 border border-slate-300 bg-blue-50 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Page;
