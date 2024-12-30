import React, { useState } from 'react';
import Navbar from './Navbar';

const UpdateAttendence = ({ data }) => {
    // Initialize state with the attendance data passed as props
    const [attendanceData, setAttendanceData] = useState(data);
    const [isUpdated, setIsUpdated] = useState(false); // Track if the data has been updated
  
    // Handle checkbox change
    const handleCheckboxChange = (date, prn, isChecked) => {
      const updatedData = attendanceData.map((attendanceRecord) => {
        if (attendanceRecord.attendance[0].date === date) {
          const updatedStudents = attendanceRecord.attendance[0].students.map(
            (student) => {
              if (student.prn === prn) {
                return { ...student, attendance: isChecked ? 1 : 0 };
              }
              return student;
            }
          );
          return {
            ...attendanceRecord,
            attendance: [{ ...attendanceRecord.attendance[0], students: updatedStudents }],
          };
        }
        return attendanceRecord;
      });
      setAttendanceData(updatedData);
      setIsUpdated(true); // Mark data as updated
    };
  
    // Add new session (new date)
    const addSession = () => {
      const todayDate = new Date().toLocaleDateString(); // Get today's date in format dd/mm/yyyy
      const newSession = {
        attendance: [
          {
            date: todayDate,
            semId: 'SEM123',
            students: attendanceData[0].attendance[0].students.map((student) => ({
              ...student,
              attendance: 1, // Set to 1 (present) by default
            })),
          },
        ],
      };
  
      setAttendanceData([...attendanceData, newSession]);
      setIsUpdated(false); // Reset the update flag
    };
  
    // Handle final update
    const handleUpdate = () => {
      // Here you would typically send the updated data to the backend
      console.log("Updated data: ", attendanceData);
      setIsUpdated(false); // Reset update flag after final update
    //   console.log(attendanceData.a)

    };
  
    return (
        <>
            <Navbar/>
      <div style={{ overflowX: 'auto', padding: '20px' }}>
        <button
          onClick={addSession}
          style={{ marginBottom: '10px', padding: '8px 16px', backgroundColor: '#007BFF', color: 'white' }}
        >
          Add Session
        </button>
  
        <table className="w-full border-collapse font-sans text-sm text-center shadow-md">
  <thead>
    <tr className="bg-blue-600 text-white">
      <th className="p-2 sticky left-0 bg-blue-600 z-10">Name</th>
      <th className="p-2 sticky left-0 bg-blue-600 z-10">PRN</th>
      {attendanceData.map((attendanceRecord, index) => (
        <th key={index} className="p-2">
          {attendanceRecord.attendance[0].date}
        </th>
      ))}
    </tr>
  </thead>
  <tbody>
    {attendanceData[0]?.attendance[0]?.students.map((student) => (
      <tr key={student.prn} className="bg-gray-50 text-black">
        <td className="p-2 border-b border-gray-300 sticky left-0 bg-gray-50 z-10">
          {student.name}
        </td>
        <td className="p-2 border-b border-gray-300 sticky left-0 bg-gray-50 z-10">
          {student.prn}
        </td>
        {attendanceData.map((attendanceRecord, index) => {
          const studentAttendance = attendanceRecord.attendance[0].students.find(
            (s) => s.prn === student.prn
          )?.attendance;

          return (
            <td key={index} className="p-2 border-b border-gray-300">
              {attendanceRecord.attendance[0].date === new Date().toLocaleDateString() ? (
                <input
                  type="checkbox"
                  checked={studentAttendance === 1}
                  onChange={(e) =>
                    handleCheckboxChange(
                      attendanceRecord.attendance[0].date,
                      student.prn,
                      e.target.checked
                    )
                  }
                  className="w-5 h-5 cursor-pointer transform scale-110"
                />
              ) : (
                <input
                  type="checkbox"
                  checked={studentAttendance === 1}
                  disabled
                  className="w-5 h-5 cursor-not-allowed"
                />
              )}
            </td>
          );
        })}
      </tr>
    ))}
  </tbody>
</table>

  
        {isUpdated && (
          <div style={{ marginTop: '20px' }}>
            <button
              onClick={handleUpdate}
              style={{
                padding: '10px 20px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Update Attendance
            </button>
          </div>
        )}
      </div>
        </>
        
    );
  };
  
  export default UpdateAttendence;