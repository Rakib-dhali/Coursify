import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CoursiFy",
  description: "Master new skills online",
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
    <Nav />
    <div className="pt-15">
      {children}
    </div>
    <Footer/>
  </>;
}
