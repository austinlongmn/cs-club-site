import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center transition-all duration-500">
          <h1 className="text-center text-5xl text-white">Josie Mellick</h1>
          <p className="text-md py-4 text-left">
            My name is Josie Mellick and I have a passion for coding. I&apos;m a
            sophmore computer science student at UNW. My experience is primerily 
            with Python, Java, and C++.
          </p>
          <p className="text-md py-4 text-left"> 
            My main interest is in video game programming. I am currently learning C++ 
            and Unreal Engine to get farmiliar with how games are made and I look forward 
            to growing in this area.
          </p>

          <h1 className="text-center text-2xl text-white">
            Projects
          </h1>
          <h1 className="py-4 text-left text-lg">
            Offloading Automation for Jack Links
          </h1>
          <p className="text-md py-4 text-left">
            A partner and I designed and created a script to automate the multi-step 
            offboarding process. We designed it to work with the pre-existing Microsoft 
            Entra system. This project was completed for UNW's Systems Analysis & Design 
            class. The poster we made for this project is shown below:
          </p>

          <Image className="rounded-lg"
            width={520}
            height={400}
            src="/images/josie/JackLinksProject.png"
            alt="Systems A&D Poster"
          />
    </div>
  );
}