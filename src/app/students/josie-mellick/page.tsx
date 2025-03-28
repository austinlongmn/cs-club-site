import Image from 'next/image';

export default function Page() {
  return (
    <>
      <h1>Josie Mellick</h1>
      <p>
        My name is Josie Mellick and I have a passion for coding. I&apos;m a
        sophmore computer science student at UNW. My experience is primerily 
        with Python, Java, and C++.
       </p>
       <p> 
        My main interest is in video game programming. I am currently learning C++ 
        and Unreal Engine to get farmiliar with how games are made and I look forward 
        to growing in this area.
      </p>

      <h1>
        Projects:
      </h1>
      <h3>
        Offloading Automation for Jack Links
      </h3>
      <p>
        A partner and I designed and created a script to automate the multi-step 
        offboarding process. We designed it to work with the pre-existing Microsoft 
        Entra system. This project was completed for UNW's Systems Analysis & Design 
        class. The poster we made for this project is shown below:
      </p>

      <Image
        width={1300}
        height={1000}
        src="/images/josie/JackLinksProject.png"
        alt="Systems A&D Poster"
      />
    </>
  );
}