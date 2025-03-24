import Image from 'next/image';

const me = {
  name: "Carter Leitch",
}

const minorProjects = [
  {
    name: "Project 1",
    description: "Description 1",
    tech: "Tech 1"
  },
  {
    name: "Project 2",
    description: "Description 2",
    tech: "Tech 2"
  },
  {
    name: "Project 3",
    description: "Description 3",
    tech: "Tech 3"
  },
]

const majorProjects = [
  {
    name: "Project 1",
    description: "Description 1",
    tech: "Tech 1"
  },
  {
    name: "Project 2",
    description: "Description 2",
    tech: "Tech 2"
  },
  {
    name: "Project 3",
    description: "Description 3",
    tech: "Tech 3"
  },
]

function BigHeader({text}: { text: string }) {
  return (
    <h1 className="justify-center text-white text-center text-5xl m-10">{text}</h1>
  );
}

function LittleHeader({text}: { text: string }) {
  return (
    <h1 className="justify-center text-white text-center text-3xl m-5">{text}</h1>
  );
}
export default function Page(){
  return(
    <>
      <div>
        <BigHeader text={me.name} />
        <div className="flex justify-center">
          <Image
            className="border-2 border-blue-800 shadow-md transition-transform duration-300 hover:scale-105"
            src="/images/carter/crtrltch.jpg"
            alt="Profile photo of Carter Leitch"
            width={250}
            height={200}
          />
        </div>
        <div className="flex justify-center">
        <Image
            className="shadow-md transition-transform duration-300 hover:scale-105"
            src="/images/carter/GitHub-logo.png"
            alt="Profile photo of Carter Leitch"
            width={50}
            height={50}
          />
        <Image
            className="shadow-md transition-transform duration-300 hover:scale-105"
            src="/images/carter/LinkedIn_icon.svg"
            alt="Profile photo of Carter Leitch"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div>
        <LittleHeader text={"About Me"} />
        <p className="text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt, nunc nec ultricies ultricies, nunc nunc ultricies nunc, nec
          ultricies nunc nunc nec. Nullam tincidunt, nunc nec ultricies ultricies,
          nunc nunc ultricies nunc, nec ultricies nunc nunc nec. Nullam tincidunt,
          nunc nec ultricies ultricies, nunc nunc ultricies nunc, nec ultricies
        </p>
      </div>

      <div className="text-center">
        <LittleHeader text={"Major Projects"} />
        <ul>
          {majorProjects.map((project) => (
            <li key={project.name} className="m-5">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>{project.tech}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <LittleHeader text={"Minor Projects"} />
        <ul>
          {minorProjects.map((project) => (
            <li key={project.name} className="m-5">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>{project.tech}</p>
            </li>
          ))}
        </ul>
      </div>
      <p></p>
    </>
  );
}
