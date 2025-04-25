import Link from "next/link";

const courses = [
  { title: "Principles of Computing" },
  { title: "Python Programming" },
  { title: "Systems Analysis and Design" },
  { title: "Programming I - Java" },
  { title: "Programming II - Mobile App Development" },
  { title: "C Programming Language" },
  { title: "Discrete Mathematics" },
  { title: "Database Management I" },
];

export function CourseList() {
  return (
    <div className="w-full border-t border-[#428ad1] pt-8 pb-4 md:border-t-4">
      <h2 className="mb-6 text-center text-3xl font-bold">
        Classes I have Taken at UNW
      </h2>
      <ul className="grid grid-cols-1 gap-6 text-lg sm:grid-cols-2 md:grid-cols-2">
        {courses.map((course, idx) => (
          <li key={idx} className="flex items-center justify-center">
            {course.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FavoriteProjects() {
  return (
    <div className="w-full border-t border-[#428ad1] pt-8 pb-12 md:border-t-4">
      <h2 className="mb-6 text-center text-3xl font-bold">
        My Favorite Projects
      </h2>
      <div className="flex flex-col items-center justify-evenly gap-8 md:flex-row">
        <div className="flex max-w-70 flex-col items-center rounded-2xl bg-neutral-700 p-6 shadow-xl">
          <h3 className="mb-4 text-center text-2xl font-semibold">
            Systems Analysis and Design Project
          </h3>
          <Link
            href="/students/dylan-weakly/systems-a-and-d"
            className="rounded-lg bg-[#428ad1] px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            View Project
          </Link>
        </div>
        <div className="flex max-w-70 flex-col items-center rounded-2xl bg-neutral-700 p-6 shadow-xl">
          <h3 className="mb-4 text-center text-2xl font-semibold">
            Python Halloween Trick-or-Treating App
          </h3>
          <button
            disabled
            className="cursor-not-allowed rounded-lg bg-[#428ad1] px-4 py-2 font-semibold text-white opacity-50"
          >
            No Link Available
          </button>
        </div>
      </div>
    </div>
  );
}
