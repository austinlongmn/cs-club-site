import Image from 'next/image';
import Link from "next/link";


export default function Page() {
  return (
    <div>
      {/* Fancy formatting stuff */}
      <div className="flex flex-col items-center justify-center">

        {/* Name and (eventually) picture */}
        <h1 className="text-center text-6xl text-white">Josie Mellick</h1>

        <Link href="mailto:mellick1110@gmail.com" className="text-blue-400 hover:underline">
          mellick1110@gmail.com
        </Link>

        <div style={{ height: 30, width: 1 }}></div>

        {/* Headshot */}
        <Image className="rounded-lg"
            width={300}
            height={300}
            src="/images/josie/Headshot.png"
            alt="Mellick Headshot"
        />
 
        <div style={{ height: 30, width: 1 }}></div>

        {/* Introduction and bio */}
        <div className="max-w-2xl mx-auto p-4 bg-gray-900 rounded-lg shadow">
          <h2 className="py-4 text-left text-2xl text-white">
              About Me
            </h2>
          <p className="text-md py-4 text-left">
            My name is Josie Mellick and I have a passion for programming. I'm 
            currently a sophomore computer science student at UNW. My experience is 
            primarily with Python, Java, and C++.
          </p>
          <p className="text-md py-4 text-left"> 
            My main interest is in video game programming. I am currently learning C++ 
            and Unreal Engine to get familiar with how games are made, and I look forward 
            to growing in this area.
          </p>
          <p className="text-md py-4 text-left"> 
            Outside of computer science, I enjoy playing the guitar and I'm on 
            Northwestern's flag football team.
          </p>
        </div>

        {/* Projects */}
        <h1 className="text-center text-4xl text-white py-6">
          Projects
        </h1>

        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto p-4 bg-gray-900 rounded-lg shadow">
          {/* Systems A & D Jack Links project */}
          <h2 className="py-4 text-left text-2xl text-white">
            Offloading Automation for Jack Links
          </h2>
          <p className="text-md py-4 text-left text-white">
            A partner and I designed and created a script to automate the multi-step 
            offboarding process. We designed it to work with the pre-existing Microsoft 
            Entra system. This project was completed for UNW's Systems Analysis & Design 
            class. The poster we made for this project is shown below:
          </p>

          {/* Systems A & D poster */}
          <Image className="rounded-lg"
            width={520}
            height={400}
            src="/images/josie/JackLinksProject.png"
            alt="Systems A&D Poster"
          />

          <div style={{ height: 30, width: 1 }}></div>

        </div>

        {/* Insert more awesome projects here */}
        <h2 className="py-4 text-left text-2xl text-white">
          More to come...
        </h2>

      </div>
    </div>
  );
}