import React from 'react'
const dummyData = {
    attendance: [
      {
        date: null, // No attendance records available
        semId: 'SEM123',
        students: [
          {
            name: 'John Doe',
            prn: 'PRN12345',
            attendance: 0, // Default to 0 since no records exist
          },
          {
            name: 'Jane Smith',
            prn: 'PRN67890',
            attendance: 0,
          },
        ],
      },
    ],
  };

const GetAttendenceData = () => {
    const { attendance } = dummyData;

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Attendance Records</h1>
  
        {attendance.map((record, index) => (
          <div
            key={index}
            className="border rounded shadow p-4 mb-4 bg-gray-50"
          >
            <h2 className="text-lg font-medium mb-2">
              Semester ID: {record.semId}
            </h2>
  
            <p className="text-gray-600 mb-4">
              Date: {record.date ? record.date : 'No records available'}
            </p>
  
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">PRN</th>
                  <th className="border border-gray-300 px-4 py-2">Attendance</th>
                </tr>
              </thead>
              <tbody>
                {record.students.map((student, i) => (
                  <tr key={i} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">
                      {student.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.prn}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.attendance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
}

export default GetAttendenceData;
