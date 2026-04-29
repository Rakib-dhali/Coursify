"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous: number = scrollY.getPrevious() ?? 0;

    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const activeClass = (path: string) =>
    `text-lg font-semibold ${
      pathname === path
        ? "text-blue-600 opacity-100"
        : "text-neutral-500 opacity-60 hover:opacity-100"
    }`;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-100 backdrop-blur-md"
      animate={{
        y: hidden ? -140 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-277.5 mx-auto h-15 flex items-center justify-between px-6  backdrop-blur-md">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/assets/logo.png" alt="logo" width={40} height={40} />
            <span className="ml-2 font-bold text-2xl text-blue-400">SkillSphere</span>
          </Link>
        </div>

        <nav className="flex items-center gap-3">
          <Link href="/" className={activeClass("/")}>
            Home
          </Link>
          <Link href="/courses" className={activeClass("/courses")}>
            Courses
          </Link>
          <Link href="/my-profile" className={activeClass("/my-profile")}>
            My Profile
          </Link>
        </nav>

        <div className="flex gap-4">
          <button onClick={() => router.push("/register")} className="bg-blue-200 text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-300 transition duration-100">
            Register
          </button>
          <button onClick={() => router.push("/login")} className="bg-blue-200 text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-300 transition duration-100">
            Login
          </button>
         
          
        </div>
      </div>
    </motion.header>
  );
}
