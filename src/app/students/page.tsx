import React from "react";

const students = [
  { id: "/breyon-gunn", name: "Breyon Gunn" },
  { id: "/andrew-hayes", name: "Andrew Hayes" },
  { id: "/carter-leitch", name: "Carter Leitch" },
  { id: "/austin-long", name: "Austin Long" },
  { id: "/josie-mellick", name: "Josie Mellick" },
  { id: "/josiah-paul", name: "Josiah Paul" },
  { id: "/dylan-weakly", name: "Dylan Weakly" },
  // Add more students as needed
];

const StudentsPage: React.FC = () => {
  return (
    <div>
      <h1 className="pt-10 text-5xl font-extrabold">Students List</h1>
      <ul className="font- pt-5 text-xl text-gray-300">
        {students.map((student) => (
          <li
            className="mt-3 transition-colors duration-500 ease-in-out hover:font-bold hover:text-white"
            key={student.id}
          >
            <a href={`/students/${student.id}`}>{student.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsPage;
