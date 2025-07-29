import Image from "next/image"

export default function Wellcome() {
  return (
    <>
      <div className="bg-linear-to-b from-purple-800 to-purple-900 h-screen w-full absolute top-0 left-0 z-[-1]"></div>
      <section className="grid grid-cols-4 sm:grid-cols-12 gap-5 sm:gap-5 items-center sm:h-screen pb-20">
        <div className="
          flex flex-col items-center text-lg sm:text-xl items-start gap-4 
          col-span-4 sm:col-span-6 order-2 sm:order-1
        ">
          <p className="text-base sm:text-lg">Hi, my name is</p>
          <div className="flex flex-col items-center sm:items-start sm:gap-1">
            <h1 className="font-slab text-3xl sm:text-5xl text-white">Kevin Alexsander</h1>
            <h2 className="font-slab text-base sm:text-3xl">I do pretty stuff at the computer.</h2>
          </div>
          <p className="text-base sm:text-lg">I'm a software engeneer specializing in building and designing web applications.</p>
        </div>

        <Image 
          className="col-span-4 sm:col-span-5 sm:col-start-8 order-1 sm:order-2"
          src={"/img/main-astroneer 1.png"}
          alt="Astroneer ilustration"
          width={500}
          height={500}
        />

      </section>
    </>
  )
}
