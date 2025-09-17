'use client';

import Image from "next/image";
import { useState } from "react";
import { BooksIcon, GithubLogoIcon, HouseIcon, IdentificationCardIcon, ListIcon, MailboxIcon, RocketLaunchIcon, XIcon } from "@phosphor-icons/react";

export default function Header() {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ menuLinks ] = useState([
    { name: "Home", href: "#home", icon: <HouseIcon weight="duotone" size={24}/> },
    { name: "About", href: "#about", icon: <IdentificationCardIcon weight="duotone" size={24}/> },
    { name: "Skills", href: "#skills", icon: <BooksIcon weight="duotone" size={24}/> },
    { name: "Work", href: "#work" , icon: <RocketLaunchIcon weight="duotone" size={24}/> },
    { name: "Contact", href: "#contact", icon: <MailboxIcon weight="duotone" size={24}/> }
  ]);

  return (
    <header className="flex justify-between w-full p-3" >
      <Image
        src="/logo.svg"
        alt="Kevin's logo"
        width={40}
        height={40}
        className="scale-85 sm:scale-100"
      />
      <nav 
        className={`
          ${!isOpen ? "hidden" : "absolute"} bg-background h-screen w-full top-0 left-0 z-50
          sm:flex  sm:h-auto sm:w-auto sm:static sm:bg-transparent
        `}
      >
        
        <button 
          className="text-xl p-3 sm:hidden absolute top-0 right-0 cursor-pointer hover:text-white active:text-white"
          onClick={() => setIsOpen(false)}
        >
          <XIcon size={32} weight="bold"/>
        </button>

        <ul className="flex flex-col sm:flex-row pt-12 sm:pt-0 p-2">

          {menuLinks.map((link, index) => (
            <li 
              key={index} 
              className={`
                flex h-14 py-2 px-4 sm:h-full items-center cursor-pointer transition-all duration-100 group rounded-md
                hover:bg-purple-700 active:bg-purple-800
              `}
            >
              <a 
                href={link.href} 
                className="
                  relative block transition-all duration-100 font-semibold flex gap-3 items-center 
                  group-hover:text-white group-active:text-white
                "
              >
                <span className="sm:hidden">
                  {link.icon}
                </span>
                <span>
                  {link.name}
                </span>
              </a>
            </li>
          ))}

        </ul>
      </nav>

      <div>
        <button 
          className="sm:hidden text-xl cursor-pointer hover:text-white active:text-white"
          onClick={() => setIsOpen(true)}
        >
          <ListIcon size={32} weight="bold"/>
        </button>

        <a 
          href="https://github.com/AlexsanderKevin/portfolio-v2"
          target="_blank"
          className={`
            hidden sm:flex
            bg-purple-700 px-6 h-10 rounded-lg cursor-pointer font-semibold transition-all duration-100 items-center justify-center gap-1 text-sm
            hover:bg-purple-600 hover:text-white
          `}
        >
          V 2.0

          <GithubLogoIcon size={20} className="inline ml-2" weight="duotone"/>
        </a>


      </div>
    </header>
  )
}
