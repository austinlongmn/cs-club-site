import { RiMailLine } from "react-icons/ri";
import Image from "next/image";

export default function Dylan() {
  return (
    <div className="flex flex-col items-center justify-center transition-all duration-500">
      <div className="flex justify-between w-full p-5">
        <h1 className="text-5xl text-white">Dylan Weakly</h1>
      </div>

      <div className="p-10 max-w-3xl mx-auto backdrop-blur-lg border-5 border-[#16C2FF] shadow-xl rounded-3xl text-white">
        <div className="flex flex-col items-center">
          <button className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg text-2xl hover:bg-blue-500">
            <RiMailLine />
            Email Dylan
          </button>
          <p className="text-sm text-center mt-2">
            Developer Website Coming Soon
          </p>

          <p className="text-md py-4 text-center">
            I am currently a sophomore Computer Science major with a
            Cybersecurity minor. I am currently learning web development with
            basic HTML, CSS, and JavaScript as well as learning the React
            framework.
          </p>

          <p className="text-md py-3 text-right">
            Some of my interests outside of Computer Science include going on
            hikes with my family (yeah, shocking!), checking out cool cars, and
            serving on the production team at church.
          </p>

          <p className="text-md py-3 text-center">
            For Systems Analysis and Design class here at Northwestern, I worked
            together with Isaac Grosser who has since graduated to provide
            Atkinson Refinishing Services with some great invoicing options to
            improve efficiency of the company.
          </p>

          <h2 className="text-lg py-4 text-center">My Favorite Projects</h2>
          <ul className="list-disc list-inside">
            <li>Systems Analysis and Design Project (featured Below)</li>
            <li>More to come...</li>
          </ul>

          <Image
            className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105 mt-10"
            width={1300}
            height={1000}
            src="/images/dylan/atkinson-poster.png"
            alt="Systems A&amp;D Poster"
          />
        </div>
      </div>
    </div>
  );
}
