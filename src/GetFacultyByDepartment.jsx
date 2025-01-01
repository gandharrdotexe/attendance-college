import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import axios from 'axios';


const GetFacultyByDepartment = () => {
    // Fetch criteria for dropdowns
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [facultyAndSubjects, setFacultyAndSubjects] = useState([]);
    
  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://attendance-backend-gold.vercel.app/hod/getFacultyByDepartment', {
            params: { department : 'CS' }
          }
        );
        console.log('Response:', response.data);
        setFacultyAndSubjects(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Faculty and Assigned Subjects</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error.message}</p>}
        {!loading && !error && (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2" rowSpan='2'>Faculty Name</th>
                  <th className="border border-gray-300 px-4 py-2" rowSpan='2'>Department</th>
                  <th className="border border-gray-300 px-4 py-2" colSpan='4'>Assigned Subjects</th>
                </tr>
                <tr className='bg-gray-100'>
                  <th className='border border-gray-300 px-4 py-2'>Subject ID</th>
                  <th className='border border-gray-300 px-4 py-2'>Subject Name</th>
                  <th className='border border-gray-300 px-4 py-2'>Is DLO</th>  
                  <th className='border border-gray-300 px-4 py-2'>Main Subject ID</th>
                </tr>
              </thead>
              <tbody>
  {facultyAndSubjects.map((faculty) => (
    <React.Fragment key={faculty.faculty_id}>
      {faculty.assigned_subjects.length > 0 ? (
        faculty.assigned_subjects.map((subject, index) => (
          <tr key={index} className="hover:bg-gray-50">
            {index === 0 && (
              <>
                {/* Faculty Name and Department in the first row */}
                <td
                  className="border border-gray-300 px-4 py-2"
                  rowSpan={faculty.assigned_subjects.length}
                >
                  {faculty.faculty_name}
                </td>
                <td
                  className="border border-gray-300 px-4 py-2"
                  rowSpan={faculty.assigned_subjects.length}
                >
                  {faculty.department}
                </td>
              </>
            )}
            {/* Assigned Subjects */}
            <td className="border border-gray-300 px-2 py-1 text-sm">
              {subject.subject_id}
            </td>
            <td className="border border-gray-300 px-2 py-1 text-sm">
              {subject.subject_name}
            </td>
            <td className="border border-gray-300 px-2 py-1 text-sm">
              {subject.is_dlo ? 'Yes' : 'No'}
            </td>
            <td className="border border-gray-300 px-2 py-1 text-sm">
              {subject.main_subject_id || 'N/A'}
            </td>
          </tr>
        ))
      ) : (
        <tr className="hover:bg-gray-50">
          {/* No Assigned Subjects */}
          <td className="border border-gray-300 px-4 py-2">{faculty.faculty_name}</td>
          <td className="border border-gray-300 px-4 py-2">{faculty.department}</td>
          <td className="border border-gray-300 px-4 py-2" colSpan="4">
            No Assigned Subjects
          </td>
        </tr>
      )}
    </React.Fragment>
  ))}
</tbody>

            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default GetFacultyByDepartment
