import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Link as RouterLink } from 'react-router-dom';

const FacultyRolesRequest = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [newRole, setNewRole] = useState("");
  const [rolesList, setRolesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isRoleUpdated, setIsRoleUpdated] = useState(false); 
  

  // Fetching faculty data
  useEffect(() => {
    const fetchFacultyData = async () => {
      setLoading(true);
       
      try {
        const response = await axios.get(
          "https://attendance-backend-gold.vercel.app/hod/getFacultyRolesData",
          {
            params: { hodDepartment: "CS" },
          }
        );
        setFacultyData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFacultyData();
  }, []);

  // Handle faculty selection
  const handleFacultySelect = (event) => {
    const selectedId = event.target.value;
    const faculty = facultyData.find((fac) => fac.facultyId === selectedId);
    setSelectedFaculty(faculty);
    setRolesList(faculty?.facultyRoles || []);
  };

  // Handle adding a new role
  const handleAddRole = () => {
    if (newRole.trim()) {
      const formattedRole = `ROLE_${newRole.trim().toUpperCase().replace(/\s+/g, "_")}`;
      
      // Check if the role already exists in the list
      if (rolesList.includes(formattedRole)) {
        toast.error(`Role "${formattedRole}" is already assigned to the faculty!`);
      } else {
        setRolesList((prevRoles) => [...prevRoles, formattedRole]);
        setIsRoleUpdated(true);
        toast.success(`Role "${formattedRole}" added to the list!`);
      }
      
      setNewRole(""); // Clear the input field
    } else {
      toast.error("Please enter a valid role!");
    }

  };

    
    
      // Handle updating roles in the backend
      const handleUpdateRoles = async () => {
        if (!selectedFaculty) {
          toast.error("Please select a faculty to update roles!");
          return;
        }
    
        const dataToSend = [
          {
            facultyId: selectedFaculty.facultyId,
            facultyRoles: rolesList,
          },
        ];
    
        try {
          const response = await axios.put(
            "https://attendance-backend-gold.vercel.app/hod/updateFacultyRoles",
            { dataToSend }
          );
          if (response.status === 200) {
            toast.success("Roles updated successfully!");
            setIsRoleUpdated(false);
          } else {
            toast.error("Failed to update roles!");
          }
        } catch (error) {
          toast.error("An error occurred while updating roles!");
        }
      };

  return (
    <><Navbar />
    <h1 className="text-2xl font-bold mt-4 text-center">Faculty Roles Management</h1>
    <div className="min-h-screen flex flex-col items-center p-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-2xl">
              

              {/* Faculty Dropdown */}
              <div className="mb-4">
                  <select
                      onChange={handleFacultySelect}
                      className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                      <option value="">Select a Faculty</option>
                      {facultyData.map((faculty) => (
                          <option key={faculty.facultyId} value={faculty.facultyId}>
                              {faculty.facultyName}
                          </option>
                      ))}
                  </select>
              </div>

              {/* Display Roles */}
              {selectedFaculty && (
                  <div className="mb-4">
                      <h3 className="text-lg font-medium text-gray-700 mb-2">
                          Roles for {selectedFaculty.facultyName}:
                      </h3>
                      <ul className="list-disc list-inside text-gray-600">
                          {rolesList.map((role, index) => (
                              <li key={index} className="py-1">{role}</li>
                          ))}
                      </ul>
                  </div>
              )}

              {/* Add Role Section */}
              {selectedFaculty && (
                  <div>
                      <input
                          type="text"
                          value={newRole}
                          onChange={(e) => setNewRole(e.target.value)}
                          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                          placeholder="Enter a new role" />
                      <button
                          onClick={handleAddRole}
                          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                      >
                          Add Role
                      </button>
                  </div>
              )}
              {/* Update Roles Button */}
              {selectedFaculty && isRoleUpdated &&(
                  <button
                      onClick={handleUpdateRoles}
                     
                      className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 mt-4"
                  >
                      Update Roles
                  </button>
              )}
          </div>

          <RouterLink to="/hod/getFacultyRolesData">
          <div className="flex flex-row mt-4 w-full max-w-2xl">
                
                        <button
                            className="max-w-xs bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 mt-4 ml-auto"
                            >
                                View Faculty Roles
                        </button>
                
                
          </div>
          </RouterLink>
          

          {loading && <p className="text-gray-600 mt-4">Loading...</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <ToastContainer position="top-center" />
      </div></>
  );
};

export default FacultyRolesRequest;
