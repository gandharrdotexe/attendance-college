import axios from "axios";

const fetchSubjectsAndFaculty = async (semester, branch, division) => {
  try {
    const response = await axios.get(
      "https://attendance-backend-gold.vercel.app/hod/getSubjectsAndFaculty",
      {
        params: {
          semester,
          branch,
          division,
        },
      }
    );
    const subjects = response.data.subjects;
    const faculty = response.data.faculty;
    console.log("api ka call hai ", response.data);
    return { subjects, faculty }; // Return the fetched data
  } catch (error) {
    console.error("Error fetching subjects and faculty:", error);
    throw error; // Rethrow the error for handling by the caller
  }
};

export default fetchSubjectsAndFaculty;
