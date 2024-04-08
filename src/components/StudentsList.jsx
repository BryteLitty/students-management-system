import React, {useState, useEffect} from 'react';

const StudentsList = ({ students, removeStudent }) => {
    const [studentList, setStudentList] = useState([]);

    const handleRemove = (id) => {
        removeStudent(id);
    };



    useEffect(() => {
        setStudentList(students);
    }, [students]);
    
    

  return (
    <div className="bg-gray-100 py-10 rounded">
    <table className='w-full px-5'>
      <thead>
        <tr>
          <th className="font-bold text-start pl-10">Last Name</th>
          <th className="font-bold text-start pl-10">Index Number</th>
        </tr>
      </thead>
      <tbody>
        {studentList?.map((student, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
            <td className="font-light text-start pl-10">{student.lastName}</td>
            <td className="font-light text-start pl-10">{student.indexNumber}</td>
            <td className='flex justify-end items-center'>
                <button 
                    className='mr-5 text-white bg-red-500 m-2 p-1 px-2'
                    onClick={() => handleRemove(student.id)} // Call handleRemove with student ID

                    >
                    remove
                </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default StudentsList;