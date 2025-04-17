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
      <div className="flex space-x-10">
        <Image
          className="pt-6"
          src="/images/josiah/indistress.png"
          width={500}
          height={100}
          alt="systems analysis and design poster"
        />
        <Image
          className="pt-6"
          src="/images/josiah/indistress2.png"
          width={500}
          height={100}
          alt="systems analysis and design poster"
        />
      </div>

      <div className="flex justify-center">
        <div className="w-150 overflow-auto bg-gray-800 whitespace-nowrap">
          {
            //  <a
            //     href="#home"
            //     className="inline-block px-4 py-3 text-center text-white hover:bg-gray-500"
            //   >
            //     Home
            //   </a>
            //   <a
            //     href="#news"
            //     className="inline-block px-4 py-3 text-center text-white hover:bg-gray-500"
            //   >
            //     News
            //   </a>
            //   <a
            //     href="#contact"
            //     className="inline-block px-4 py-3 text-center text-white hover:bg-gray-500"
            //   >
            //     Contact
            //   </a>
            //   <a
            //     href="#about"
            //     className="inline-block px-4 py-3 text-center text-white hover:bg-gray-500"
            //   >
            //     About
            //   </a>
          }
        </div>
      </div>
      {/* Java Script in React????*/}
      <script></script>
    </div>
  );
}
// explain a bit about urself, projects u worked on with club, projects u worked on in general
