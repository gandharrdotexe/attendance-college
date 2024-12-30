import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiTest = () => {
  const [attendanceData, setAttendanceData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch attendance data
  const fetchAttendanceData = async (semester, branch, division, batch) => {
    try {
      setLoading(true);
      setError(null);

      const params = {
        semester,
        branch,
        division,
        batch,
      };

      const response = await axios.get(
        'https://attendance-backend-gold.vercel.app/faculty/getAllAttendanceData',
        { params }
      );

      setAttendanceData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // UseEffect to trigger data fetch
  useEffect(() => {
    fetchAttendanceData(5, 'CS', 'A', '01');
  }, []);

  // Render the UI
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Attendance Data</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {attendanceData ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-2 border border-gray-300">Date</th>
                <th className="p-2 border border-gray-300">Name</th>
                <th className="p-2 border border-gray-300">PRN</th>
                <th className="p-2 border border-gray-300">Attendance</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.attendance.map((record, index) =>
                record.students.map((student, studentIndex) => (
                  <tr
                    key={`${index}-${studentIndex}`}
                    className="text-center odd:bg-gray-100 even:bg-gray-200"
                  >
                    <td className="p-2 border border-gray-300">
                      {new Date(record.date).toLocaleDateString()}
                    </td>
                    <td className="p-2 border border-gray-300">{student.name}</td>
                    <td className="p-2 border border-gray-300">{student.prn}</td>
                    <td className="p-2 border border-gray-300">
                      {student.attendance === 1 ? 'Present' : 'Absent'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && <p>No data available.</p>
      )}
    </div>
  );
};

export default ApiTest;
