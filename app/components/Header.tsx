import Image from "next/image";

export default function Header() {

  return (
    <header className="flex justify-between w-full ">
      <Image
        src="/logo.svg"
        alt="Kevin's logo"
        width={40}
        height={40}
      />

      <nav>
        <ul className="flex gap-4">
          <li className=""><a href="#home">Home</a></li>
          <li className=""><a href="#home">About</a></li>
          <li className=""><a href="#home">Skills</a></li>
        </ul>
      </nav>

      <div>
        <button>Github</button>
      </div>
    </header>
  )
}
