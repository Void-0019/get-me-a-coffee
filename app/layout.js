import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";


export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "Get me a Coffee - Fund your projects with Coffee",
  description: "This website is a crowdfunding platform for creators",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en">
      <body className="min-h-full flex flex-col">
        <SessionWrapper>
        <Navbar/>
        <div className="text-white relative min-h-[84vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-size-[20px_20px]">
        {children}
        </div>
        <Footer/>
        </SessionWrapper>
        </body>
    </html>
  );
}
