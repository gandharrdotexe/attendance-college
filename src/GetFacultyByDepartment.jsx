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
        <h1>Faculty and Subjects</h1>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
    </div>
  )
}

export default GetFacultyByDepartment
