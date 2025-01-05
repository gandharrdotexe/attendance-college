import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DropdownPage from './components/DropdownPage';
import Navbar from './components/Navbar';
import SubjectstoFacultyDropdown from './components/SubjectstoFaculty';
import allocateFacultyToSubject from './api/allocateFacultytoSubject';
const SubjectsToFaculty = () =>
{
  const [criteria, setCriteria] = useState({
    semesters: [],
    branches: {},
    divisions: {},
    batches: {},
  });
  const [selected, setSelected] = useState({
    semester: '',
    branch: '',
    division: '',
    batch: '',
    
  });
  const [subjectsAndFacultyData, setSubjectsAndFacultyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [view, setView] = useState(true);
  

  const handelAssign = (subject_id) =>
  {
    

  }
 const [selectedValues, setSelectedValues] = useState({});

  const handleSelectionChange = (values) =>
  {
    console.log("Selected Values:", values);
    setSelectedValues(values);

  };
  // Fetch criteria for dropdowns
  useEffect(() =>
  {
    const fetchCriteria = async () =>
    {
      try
      {
        const response = await axios.get(
          'https://attendance-backend-gold.vercel.app/hod/getCriteriaFacSub', {
          params: { department: 'CS' }
        }
        );
        setCriteria(response.data);
      } catch (err)
      {
        console.error('Error fetching criteria:', err);
        setError('Failed to fetch criteria.');
      }
    };

    fetchCriteria();
  }, []);

  // Handle dropdown change
  const handleDropdownChange = (updatedValue) =>
  {
    setSelected((prev) => ({ ...prev, ...updatedValue }));
  };
    
   const handleAllocate = async () => {
    try {
      const response = await allocateFacultyToSubject(selectedValues);
      alert("Faculty allocated successfully!");
      console.log("API Response:", response);
    } catch (error) {
      alert("An error occurred while allocating faculty.");
      console.error(error);
    }
  };

  // Fetch attendance data
  const fetchSubjectsAndFaculty = async () =>
  {
    setLoading(true);
    setError(null);
    
    try
    {
      console.log('Selected:', selected);
      selected.branch = 'CS';
      const { semester, branch, division } = selected;
      console.log('Sending request with:', { semester, branch, division });
    
      const response = await axios.get(
        'https://attendance-backend-gold.vercel.app/hod/getSubjectsAndFaculty',
        { params: { semester, branch, division } }
      );
      console.log('Response:', response);
      setSubjectsAndFacultyData(response.data);
    } catch (err)
    {
      console.error('Error fetching attendance data:', err.response || err);
      setError(err.response?.data?.message || 'Failed to fetch attendance data. Please try again.');
    } finally
    {
      setLoading(false);
    }
  };

  const handelView = () =>
  {
    setView(!view);
  }
    

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold mt-4 text-center">Faculty and Subjects</h1>
      {view ?
       ( <DropdownPage
          criteria={criteria}
          selected={selected}
          onDropdownChange={handleDropdownChange}
          onFetchData={fetchSubjectsAndFaculty}
          isLoading={loading}
          error={error}
        >
          {/* Subjects Table */}
          {subjectsAndFacultyData.subjects?.length > 0 && (
            <div className="overflow-x-auto m-4">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-2 border border-gray-300">
                      Subject ID
                    </th>
                    <th className="p-2 border border-gray-300" >
                      Subject Name
                    </th>
                    <th className="p-2 border border-gray-300">
                      Subject Type
                    </th>
                    <th className="p-2 border border-gray-300">
                      Faculty
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subjectsAndFacultyData.subjects.map((subject) => (
                    <tr key={subject.subject_id}>
                      <td className="p-2 border border-gray-300">{subject.subject_id}</td>
                      <td className="p-2 border border-gray-300">{subject.subject_name}</td>
                      <td className="p-2 border border-gray-300">{subject.type}</td>
                      <td className="p-2 border border-gray-300">{subject.faculty_name || "Unassigned"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
  
          {/* Loading Indicator */}
          {loading && <p className="text-blue-500 text-center">Loading attendance data...</p>}
  
          {/* Error Message */}
          {error && <p className="text-red-500 text-center">{error}</p>}
           < div className="mt-4 text-center">
          <button
          /*onClick={handelFacultyAllocation()} */
          className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
     onClick={handelView}   >
          Assign Faculty
          </button>   
      </div>
        </DropdownPage>)
       :
        <div>
          <SubjectstoFacultyDropdown data={criteria} onSelectionChange={handleSelectionChange} facultytosubject={handleAllocate } handelView={handelView} />
        </div>}
      </div>
    );
  };
  
  export default SubjectsToFaculty;
