import React,{useEffect,useState} from 'react'
import Navbar from './components/Navbar';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';

const FacultyRoles = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [facultyRoles, setFacultyRoles] = useState([]);
    useEffect(() => {
        const fetchFacRoles = async () => {
          setLoading(true);
          try {
            const response = await axios.get(
              'https://attendance-backend-gold.vercel.app/hod/getFacultyRolesData', {
                params: { hodDepartment : 'CS' }
              }
            );
            console.log('Response:', response.data);
            setFacultyRoles(response.data);
            setLoading(false);
          } catch (err) {
            setError(err);
            setLoading(false);
          }
        };
    
        fetchFacRoles();
      }, []);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Faculty Roles</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500 text-center">{error.message}</p>}
        {!loading && !error && (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Faculty Name</th>
                  <th className="border border-gray-300 px-4 py-2">Roles Assigned</th>
                </tr>
              </thead>
              <tbody>
                {facultyRoles.map((faculty) => (
                  <tr key={faculty.facultyId} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      {faculty.facultyName}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {faculty.facultyRoles.join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <RouterLink to="/hod/assignFacultyRolesData">
          <div className="flex flex-row mt-4 w-full max-w-2xl">
                
                        <button
                            className="max-w-xs bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 mt-4 ml-auto"
                            >
                                Add Faculty Roles
                        </button>
                
                
          </div>
          </RouterLink>
      </div>
    </div>
  );
};

export default FacultyRoles
