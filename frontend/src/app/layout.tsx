import "./components/styles/page.module.css";
import "./components/styles/globals.css";
import { NavBar } from "./components/navbar";
import { Footer } from "./components/footer";

export const metadata = {
  title: "Livskrafter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="flex flex-col justify-between h-screen">
        <NavBar />
        <main className="bg-[#f7f6eb] h-full flex justify-center overflow-auto">
          <div className="w-[90vw] 2xl:w-[70%] pt-5">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
