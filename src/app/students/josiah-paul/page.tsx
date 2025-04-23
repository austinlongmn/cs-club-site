import Link from "next/link";
import Image from "next/image";
export default function Josiah() {
  return (
    <div>
      <h1 className="m-10 text-center text-[60px]">
        <b>Josiah Paul</b>
      </h1>
      <p className="text-center text-[30px]">
        Computer Science student and CSC member!
      </p>
      <div className="flex space-x-10">
        <div id="about" className="w-260 px-8 pt-30 text-[25px]">
          <p className="text-center font-bold">About</p>
          <p className="text-center">
            I have been a CSC member since 2024 and a Comp Sci student since
            2022.
            <br></br>So far, I would say python has been the most fun language
            to learn.
          </p>
          <div className="pt-6 text-center">
            <Link
              href="https://github.com/JP-STHS"
              target="_blank"
              className="inline-block"
            >
              <Image
                src="/images/josiah/github-mark-white.png"
                width={100}
                height={100}
                alt="Github"
              />
            </Link>
          </div>
        </div>
        <Image
          className="pt-6"
          src="/images/josiah/systemsphoto.png"
          width={500}
          height={100}
          alt="systems analysis and design poster"
        />

        <div id="projects" className="w-250 px-8 pt-30 text-center text-[25px]">
          <p>
            <b>Projects</b>
          </p>
          <p>
            During the fall semester of 2024, I worked on the development team
            for The Last Crewman.
          </p>
          <br></br>
          <p>
            The largest school project I worked on was the Systems Analysis &
            Design final project with{" "}
            <Link href="carter-leitch" target="_blank">
              <u>Carter Leitch.</u>
            </Link>
          </p>
        </div>
      </div>
      <div className="flex space-x-1 pl-18">
        <Image
          className="pt-6 pl-3"
          src="/images/josiah/indistress.png"
          width={500}
          height={100}
          alt="systems analysis and design poster"
        />
        <Image
          className="pt-6 pl-3"
          src="/images/josiah/indistress2.png"
          width={500}
          height={100}
          alt="systems analysis and design poster"
        />
      </div>
      <div className="mt-10 text-center text-[25px]">
        <b>- - - - - Personal Projects - - - - - </b>
      </div>
      <div className="m-4 flex justify-center rounded-md border-4 border-blue-600 p-4">
        <div className="w-250 overflow-auto bg-gray-800 px-6 py-3.5 whitespace-nowrap">
          {
            <>
              <Link
                href="https://scratch.mit.edu/projects/960861818"
                target="_blank"
                className="mr-3 inline-block h-[180px] w-[180px] rounded-2xl p-2 text-center text-white hover:bg-gray-500"
              >
                <div className="flex h-full flex-col items-center justify-center">
                  <Image
                    src="/images/josiah/rock.png"
                    width={200}
                    height={100}
                    alt="Raise a Rock"
                    className="h-[100px] w-[100px] object-contain"
                  />
                  <span className="mt-3 text-sm">
                    <b>My Awful Scratch Game</b>
                  </span>
                </div>
              </Link>
              <Link
                href="https://github.com/JP-STHS/Sleeves"
                target="_blank"
                className="mr-3 inline-block h-[180px] w-[180px] rounded-2xl p-2 text-center text-white hover:bg-gray-500"
              >
                <div className="flex h-full flex-col items-center justify-center">
                  <Image
                    src="/images/josiah/github-mark-white.png"
                    width={200}
                    height={100}
                    alt="Sleeves"
                    className="h-[100px] w-[100px] object-contain"
                  />
                  <span className="mt-3 text-sm">
                    <b>GoDot Game Attempt</b>
                  </span>
                </div>
              </Link>
              <Link
                href="https://www.roblox.com/games/17335018195"
                target="_blank"
                className="mr-3 inline-block h-[180px] w-[180px] rounded-2xl p-2 text-center text-white hover:bg-gray-500"
              >
                <div className="flex h-full flex-col items-center justify-center">
                  <Image
                    src="/images/josiah/roblox.png"
                    width={200}
                    height={100}
                    alt="Bruh"
                    className="h-[100px] w-[80px] object-contain"
                  />
                  <span className="mt-3 text-sm">
                    <b>My Awful Roblox Game</b>
                  </span>
                </div>
              </Link>
              <Link
                href="https://github.com/JP-STHS/C-Programming-Projects/blob/main/C_Projects/vending_machine.cpp"
                target="_blank"
                className="mr-3 inline-block h-[180px] w-[180px] rounded-2xl p-2 text-center text-white hover:bg-gray-500"
              >
                <div className="flex h-full flex-col items-center justify-center">
                  <Image
                    src="/images/josiah/github-mark-white.png"
                    width={200}
                    height={100}
                    alt="Vending Machine"
                    className="h-[100px] w-[100px] object-contain"
                  />
                  <span className="mt-3 text-sm">
                    <b>C++ Vending Machine</b>
                  </span>
                </div>
              </Link>
              <Link
                href="https://github.com/Trenton-Gibson/In-Distress"
                target="_blank"
                className="mr-3 inline-block h-[180px] w-[180px] rounded-2xl p-2 text-center text-white hover:bg-gray-500"
              >
                <div className="flex h-full flex-col items-center justify-center">
                  <Image
                    src="/images/josiah/github-mark-white.png"
                    width={200}
                    height={100}
                    alt="In Distress"
                    className="h-[100px] w-[100px] object-contain"
                  />
                  <span className="mt-3 text-sm">
                    <b>The Last Crewman</b>
                  </span>
                </div>
              </Link>
            </>
          }
        </div>
      </div>
    </div>
  );
}
