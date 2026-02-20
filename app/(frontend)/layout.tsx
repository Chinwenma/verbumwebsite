import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../components/nav/Navbar";
import { Footer } from "../components/footer/Footer";

export const metadata: Metadata = {
  title: "Verbum Networks Limited Enugu",
  description:
    "Verbum Networks Limited is a top ICT solutions provider based in Enugu, Nigeria. We offer a wide range of services including web and software development, school and hospital management systems, CCTV and solar installations, as well as professional ICT training in web design, graphics, UI/UX, and networking. Driving innovation through technology and skill development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
