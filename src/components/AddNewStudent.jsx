import React, { useState } from 'react';

const AddNewStudent = ({ students, setStudents }) => {
  const [newStudent, setNewStudent] = useState({
    firstName: '',
    lastName: '',
    indexNumber: '',
    contactNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewStudent(newStudent);
    setNewStudent({
      firstName: '',
      lastName: '',
      indexNumber: '',
      contactNumber: ''
    });
  };

  const addNewStudent = (student) => {
    if (student.firstName && student.lastName && student.indexNumber && student.contactNumber) {
      const newStudent = {
        id: students.length + 1,
        ...student
      };
      setStudents(prevStudents => [...prevStudents, newStudent]); // Update the state using functional form
      // Save the updated student list to local storage
      localStorage.setItem('students', JSON.stringify([...students, newStudent]));
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="bg-gray-100 py-10 px-20 mt-10 mx-auto">
      <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            value={newStudent.firstName} 
            onChange={handleInputChange} 
            className='px-2 py-5 w-full border'
          />
        </div>

        <div>
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            value={newStudent.lastName} 
            onChange={handleInputChange} 
            className='px-2 py-5 w-full border'
          />
        </div>

        <div>
          <input 
            type="number" 
            name="indexNumber" 
            placeholder="Index Number" 
            value={newStudent.indexNumber} 
            onChange={handleInputChange} 
            className='px-2 py-5 w-full border'
          />
        </div>

        <div>
          <input 
            type="number" 
            name="contactNumber" 
            placeholder="Contact Number" 
            value={newStudent.contactNumber} 
            onChange={handleInputChange} 
            className='px-2 py-5 w-full border'
          />
        </div>

        <div>
          <button className="bg-green-500 text-white p-4 w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewStudent;
