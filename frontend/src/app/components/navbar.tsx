"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo-removed.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import useWindowDimensions from "./useWindowSize";

export const NavBar = () => {
  const [showBurger, setShowBurger] = useState(false);
  const { width } = useWindowDimensions();

  const links = [
    { name: "HEM", path: "/", id: 1 },
    { name: "KURSER", path: "/courses", id: 2 },
    { name: "KONST", path: "/art", id: 3 },
    { name: "KONTAKT", path: "/contact", id: 4 },
    { name: "SHOP", path: "/shop", id: 5 },
  ];

  useEffect(() => {
    if (width > 768) setShowBurger(false);
  }, [width]);

  return (
    <>
      <nav className="w-full pt-2 pb-5 h-40 flex justify-center shadow-md bg-[#f7f6eb]">
        <div className="w-[90%] 2xl:w-[70%] flex justify-between items-center border-b-1">
          <Link href="/">
            <Image src={Logo} alt="logo" width="85" height="85" />
            {/* {width > 768 ? (
              <div className="flex flex-col">
                <p className="text-3xl">Emma Karlsson</p>
                <p>Livskrafter</p>
              </div>
            ) : (
              <p className="text-3xl">E.K</p>
            )} */}
          </Link>
          <div className="hidden md:flex gap-10">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className="text-xl hover:text-[#545E56]"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setShowBurger(true)}>
              <MenuIcon style={{ width: "35px", height: "35px" }} />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`fixed right-0 h-[90vh] w-[40%] flex flex-col items-center justify-center gap-1 transition-transform duration-300 text-2xl bg-[#f7f6eb] ${
          showBurger ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setShowBurger(false)}
          className="absolute top-6 right-6"
        >
          <CloseIcon style={{ width: "40px", height: "40px" }} />
        </button>

        {links.map((link) => (
          <Link
            key={link.id}
            href={link.path}
            className="w-full text-center py-4 hover:text-[#545E56]"
            onClick={() => setShowBurger(false)}
          >
            <p className="hover:underline">{link.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
};
