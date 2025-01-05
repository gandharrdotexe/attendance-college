import axios from "axios";

const allocateFacultyToSubject = async (subjectsAllocationData) => {
    try
    {
        const data = [subjectsAllocationData];
    const response = await axios.post(
      "https://attendance-backend-gold.vercel.app/hod/allocateFacultyToSubject",
         data 
    );
    console.log("API Response:", response.data);
    return response.data; // Return the API response data
  } catch (error) {
    console.error("Error allocating faculty to subject:", error);
    throw error; // Rethrow the error for handling by the caller
  }
};

export default allocateFacultyToSubject;

const reqbody = 
  {
    semester: "7",
    branch: "CS",
    division: "B",
    batch: "02",
    subject_id: "DLO01",
    faculty_id: "F002",
  }
allocateFacultyToSubject(reqbody);
