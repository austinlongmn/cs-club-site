import React from "react";

const students = [
  { id: 1, name: "Breyon Gunn" },
  { id: 2, name: "Andrew Hayes" },
  { id: 3, name: "Carter Leitch" },
  { id: 4, name: "Austin Long" },
  { id: 5, name: "Josie Mellick" },
  { id: 6, name: "Josiah Paul" },
  { id: 7, name: "Dylan Weakly" },
  // Add more students as needed
];

const StudentsPage: React.FC = () => {
  return (
    <div>
      <h1 className="pt-10 text-5xl font-extrabold">Students List</h1>
      <ul className="pt-5 text-xl">
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsPage;
