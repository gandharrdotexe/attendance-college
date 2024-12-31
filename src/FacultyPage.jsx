import React, { useState, useEffect } from "react";
import UpdateAttendance from "./UpdateAttendance";
import AttendanceTable from "./AttendanceTable";
import DynamicDropdowns from "./components/DynamicDropdowns";
import { getAttendanceData } from "./api/attendanceData";
import getCriteria from "./api/criteria";
import axios from "axios";
import fetchAttendanceData from "./api/fetchAttendanceData";
import Navbar from "./components/Navbar";

const FacultyPage = () => {
  const [attendance, setAttendance] = useState(null);
  const [reportORUpdate, setReportORUpdaate] = useState(true);
  const [buttonName, setButtonName] = useState(null);
  const [criteria, setCriteria] = useState(null);
  const [selectedValues, setSelectedValues] = useState({});

  const handleSelectionChange = (values) => {
    console.log("Selected Values:", values);
    setSelectedValues(values);
  };

  // Fetch attendance data
  const fetchData = async () => {
    try {
      const semester = 5;
      const subjectId = "CS501";
      const branch = "CS";
      const division = "A";
      const batch = "01";

      const response = await fetchAttendanceData(
        selectedValues.semester,
        "CS501",
        selectedValues.branch,
        selectedValues.division,
        selectedValues.batch
      );

      console.log("Attendance Data:", response);
      setAttendance(response);
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    }
  };

  // Fetch criteria data on component mount
  useEffect(() => {
    const fetchCriteria = async () => {
      try {
        const data = await getCriteria();
        setCriteria(data); // Set criteria data in state
      } catch (err) {
        console.error(err);
      }
    };

    fetchCriteria();
  }, []);

  const handelUpdareORreport = () => {
    setReportORUpdaate(!reportORUpdate);
  };

  return (
    <><Navbar />
    <div className="faculty-page flex flex-col items-center gap-10 my-10 w-full max-w-7xl mx-auto">      

      {/* Page Content */}
      <div className="content flex flex-col items-center gap-10 w-full">
      <div className="component-container w-full max-w-4xl bg-white p-5 border border-gray-300 rounded-lg shadow-md">
      {/* Render dropdowns only if criteria data exists */}
          {criteria ? (
            <DynamicDropdowns data={criteria} onSelectionChange={handleSelectionChange} />
          ) : (
            <div>No criteria data available</div>
          )}

          <div>
            <button
              className="bg-green-200 p-2 rounded-lg mb-4"
              onClick={fetchData}
            >
              Fetch Attendance
            </button>

            {/* Conditionally render based on reportORUpdate */}
            {reportORUpdate ? (
              attendance ? (
                <div>
                  <AttendanceTable data={attendance} />
                  <button
                    className="bg-blue-200 p-2 rounded-lg mt-4"
                    onClick={handelUpdareORreport}
                  >
                    Update Table
                  </button>
                </div>
              ) : (
                <div>No attendance data available</div>
              )
            ) : (
              attendance ? (
                <div>
                  <UpdateAttendance data={attendance} />
                  <button
                    className="bg-blue-200 p-2 rounded-lg mt-4"
                    onClick={handelUpdareORreport}
                  >
                    See Report
                  </button>
                </div>
              ) : (
                <div>No attendance data available</div>
              )
            )}
          </div>
        </div>
      </div>
    </div></>
  );
};

export default FacultyPage;
