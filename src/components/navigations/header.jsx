"use client";
import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const handleClick = async () => {
    setNavbar(false);
  };

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navbar]);

  return (
    <nav className="select-none bg-background">
      <div className="flex justify-between">
        <Link href="/" onClick={handleClick} className="flex items-center">
          <h1 className="text-xl font-bold">chy.</h1>
        </Link>
        <div className="flex gap-4">
          <ul className="flex items-center space-x-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
            <li className="hover:underline">
              <Link href="/" onClick={handleClick}>
                <h1>Home.</h1>
              </Link>
            </li>
            <li className="hover:underline">
              <Link href="/dashboard" onClick={handleClick}>
                <h1>More.</h1>
              </Link>
            </li>
          </ul>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
