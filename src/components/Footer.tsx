import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "@/assets/logo.png"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="px-6 md:px-12 py-12 w-full max-w-369 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center justify-center p-3 bg-white w-15 h-15 rounded-full">
            <Image src={logo} alt="logo" width={60} height={60} /></div>
            <p className="text-blue-300 text-sm leading-relaxed">
              Empowering learners worldwide with high-quality courses from
              industry experts.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#">
                <FaFacebookF size={16} className="hover:text-blue-600" />
              </a>
              <a href="#">
                <FaYoutube size={16} className="hover:text-red-600"/>
              </a>
              <a href="#">
                <FaGithub size={16} className="hover:text-blue-950" />
              </a>
              <a href="#">
                <FaLinkedinIn  size={16} className="hover:text-blue-500"/>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-blue-300">
              <li>
                <Link href="/courses" className="hover:text-white transition">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white transition">
                  Popular Courses
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white transition">
                  New Releases
                </Link>
              </li>
              <li>
                <Link
                  href="/my-profile"
                  className="hover:text-white transition"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-sm text-blue-300">
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-white transition">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-blue-300">
              <li className="flex items-center gap-2">
                <Mail size={15} className="shrink-0" />
                support@coursify.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="shrink-0" />
                +8809123456789
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="shrink-0 mt-0.5" />
                Uttara, Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-blue-400">
          <p>© {new Date().getFullYear()} Coursify. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
