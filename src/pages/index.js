// Index.jsx
import React, { useState, useEffect } from 'react';
import StudentsList from '@/components/StudentsList';
import AddNewStudent from '@/components/AddNewStudent';
import SearchInput from '@/components/SearchInput'; // Import the SearchInput component
import { students as initialStudents } from '@/data/students'; // Assuming you have data in `students.js` file

const Index = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Load initial student data from local storage
    const storedStudents = JSON.parse(localStorage.getItem('students'));
    if (storedStudents) {
      setStudents(storedStudents);
    } else {
      // Use initial students data if local storage is empty
      setStudents(initialStudents);
      localStorage.setItem('students', JSON.stringify(initialStudents));
    }
  }, []); // Empty dependency array ensures this effect runs only once, on component mount

  const searchStudent = (value) => {
    setSearchQuery(value);
  };

  const removeStudent = (id) => {
    const updatedStudents = students.filter(student => student.id !== id);
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  const filteredStudents = students.filter(student =>
    student.indexNumber.includes(searchQuery)
  );

  return (
    <div className="mx-44 mt-10">
      <h1 className='text-center text-5xl mb-5 uppercase underline font-black'>Students List</h1>
      <SearchInput searchStudent={searchStudent} /> {/* Render the SearchInput component */}
      <StudentsList students={filteredStudents} removeStudent={removeStudent} />
      <AddNewStudent students={students} setStudents={setStudents} />
    </div>
  );
};

export default Index;
