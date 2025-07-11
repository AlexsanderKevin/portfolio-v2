'use client';

import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import { GithubLogoIcon } from "@phosphor-icons/react";

export default function Header() {
  const [ menuLinks ] = useState([
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" }
  ]);

  return (
    <header className="flex justify-between w-full p-3">
      <Image
        src="/logo.svg"
        alt="Kevin's logo"
        width={40}
        height={40}
      />

      <nav className="hidden sm:flex">
        <ul className="flex gap-6 h-full">

          {menuLinks.map((link, index) => (
            <li key={index} className="flex h-full items-center cursor-pointer transition-all duration-100">
              <a href={link.href} className="relative block group">
                <span className="group-hover:text-white transition-all duration-100 font-semibold">{link.name}</span>
              </a>
            </li>
          ))}

        </ul>
      </nav>

      <div>
        <Button>
          V 2.0
          <GithubLogoIcon size={20} className="inline ml-2" weight="duotone"/>
        </Button>
      </div>
    </header>
  )
}
