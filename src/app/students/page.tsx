import React from "react";

const students = [
  { id: 1, name: "Breyon Gunn" },
  { id: 2, name: "Austin Long" },
  { id: 3, name: "Dylan Weakly" },
  // Add more students as needed
];

const StudentsPage: React.FC = () => {
  return (
    <div>
      <h1>Students List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsPage;
