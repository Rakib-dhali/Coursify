import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
   icons: {
    icon: "/logo.png",        // tab icon
    shortcut: "/logo.png",    // shortcut icon
    apple: "/logo.png",       // apple touch icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable}  h-full antialiased`}
    >
      <body>{children}
        <Toaster/>
      </body>
    </html>
  );
}
