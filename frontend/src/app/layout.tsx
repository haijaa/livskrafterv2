import "./components/styles/page.module.css";
import "./components/styles/globals.css";
import { NavBar } from "./components/navbar";
import { Footer } from "./components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between h-screen">
        <NavBar />
        <main className="bg-[#FAEDCD] h-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
