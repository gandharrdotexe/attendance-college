// import React, { useState } from 'react';

// // Dummy attendance data
// const attendanceData = {
//     attendance: [
//       {
//         date: '2024-12-01',
//         semId: 'SEM123',
//         students: [
//           { name: 'John Doe', prn: 'PRN12345', attendance: 1 },
//           { name: 'Jane Smith', prn: 'PRN67890', attendance: 1 },
//           { name: 'Alice Johnson', prn: 'PRN11223', attendance: 0 },
//         ],
//       },
//       {
//         date: '2024-12-02',
//         semId: 'SEM123',
//         students: [
//           { name: 'John Doe', prn: 'PRN12345', attendance: 1 },
//           { name: 'Jane Smith', prn: 'PRN67890', attendance: 1 },
//           { name: 'Alice Johnson', prn: 'PRN11223', attendance: 1 },
//         ],
//       },
//       {
//         date: '2024-12-03',
//         semId: 'SEM123',
//         students: [
//           { name: 'John Doe', prn: 'PRN12345', attendance: 1 },
//           { name: 'Jane Smith', prn: 'PRN67890', attendance: 1 },
//           { name: 'Alice Johnson', prn: 'PRN11223', attendance: 0 },
//         ],
//       },
//       {
//         date: '2024-12-04',
//         semId: 'SEM123',
//         students: [
//           { name: 'John Doe', prn: 'PRN12345', attendance: 1 },
//           { name: 'Jane Smith', prn: 'PRN67890', attendance: 0 },
//           { name: 'Alice Johnson', prn: 'PRN11223', attendance: 0 },
//         ],
//       },
//       {
//         date: '2024-12-05',
//         semId: 'SEM123',
//         students: [
//           { name: 'John Doe', prn: 'PRN12345', attendance: 1 },
//           { name: 'Jane Smith', prn: 'PRN67890', attendance: 1 },
//           { name: 'Alice Johnson', prn: 'PRN11223', attendance: 0 },
//         ],
//       },
//     ],
//   };
  
//   const GetReport = () => {
//     const [selectedOptions, setSelectedOptions] = useState({
//       dropdown1: '', // Semester
//       dropdown2: '', // Department
//       dropdown3: '', // Batch
//       dropdown4: '', // Subject
//       dropdown5: '', // Division (if applicable)
//     });
  
//     const Semesters = [
//       { value: 'SEM123', label: 'Semester 123' },
//       { value: 'SEM124', label: 'Semester 124' },
//       { value: 'SEM125', label: 'Semester 125' },
//     ];
  
//     const Departments = [
//       { value: 'CSE', label: 'Computer Science' },
//       { value: 'ECE', label: 'Electronics' },
//       { value: 'ME', label: 'Mechanical' },
//     ];
  
//     const Batches = [
//       { value: 'B1', label: 'Batch 1' },
//       { value: 'B2', label: 'Batch 2' },
//       { value: 'B3', label: 'Batch 3' },
//     ];
  
//     const Subjects = [
//       { value: 'Math', label: 'Mathematics' },
//       { value: 'Physics', label: 'Physics' },
//       { value: 'Chem', label: 'Chemistry' },
//     ];
  
//     const Divisions = [
//       { value: 'A', label: 'Division A' },
//       { value: 'B', label: 'Division B' },
//     ];
  
//     const handleSelect = (dropdown, value) => {
//       setSelectedOptions((prev) => ({ ...prev, [dropdown]: value }));
//     };
  
//     const selectedSemester = selectedOptions.dropdown1;
//     const filteredAttendance = attendanceData.attendance.filter(
//       (record) => record.semId === selectedSemester
//     );
  
//     const isDivisionRequired = selectedOptions.dropdown2 === 'CSE';
  
//     // Flatten attendance data horizontally (dates as columns)
//     const students = filteredAttendance.reduce((acc, record) => {
//       record.students.forEach((student) => {
//         // Find if student already exists in the accumulator
//         const existingStudent = acc.find((s) => s.prn === student.prn);
//         if (existingStudent) {
//           // Add the attendance value under the date
//           existingStudent.attendance[record.date] = student.attendance;
//         } else {
//           // Add new student with attendance data for the date
//           acc.push({
//             name: student.name,
//             prn: student.prn,
//             attendance: { [record.date]: student.attendance },
//           });
//         }
//       });
//       return acc;
//     }, []);
  
//     return (
//       <div className="flex flex-col space-y-4 p-6 mx-auto">
//         {/* Dropdowns */}
//         <div className='flex flex-col max-w-md justify-center ml-[500px]'>
//         <div>
//           <label className="block mb-2 font-medium">Semester:</label>
//           <select
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={selectedOptions.dropdown1}
//             onChange={(e) => handleSelect('dropdown1', e.target.value)}
//           >
//             <option value="">Select an option</option>
//             {Semesters.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//         </div>
  
//         <div>
//           <label className="block mb-2 font-medium">Department:</label>
//           <select
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={selectedOptions.dropdown2}
//             onChange={(e) => handleSelect('dropdown2', e.target.value)}
//           >
//             <option value="">Select an option</option>
//             {Departments.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//         </div>
  
//         <div>
//           <label className="block mb-2 font-medium">Batch:</label>
//           <select
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={selectedOptions.dropdown3}
//             onChange={(e) => handleSelect('dropdown3', e.target.value)}
//           >
//             <option value="">Select an option</option>
//             {Batches.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//         </div>
  
//         <div>
//           <label className="block mb-2 font-medium">Subject:</label>
//           <select
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={selectedOptions.dropdown4}
//             onChange={(e) => handleSelect('dropdown4', e.target.value)}
//           >
//             <option value="">Select an option</option>
//             {Subjects.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//         </div>
  
//         {/* Division Dropdown */}
//         {isDivisionRequired && (
//           <div>
//             <label className="block mb-2 font-medium">Division:</label>
//             <select
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={selectedOptions.dropdown5}
//               onChange={(e) => handleSelect('dropdown5', e.target.value)}
//             >
//               <option value="">Select an option</option>
//               {Divisions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}
//         </div>
  
       
//         {students.length > 0 ? (
//           <div className="flex justify-center">
//           <div className="parent mt-4 p-4 bg-gray-100 rounded max-w-lg">
//             <h3 className="font-medium mb-2">Attendance Records:</h3>
//             <div className="overflow-x-auto">
//               <table className="child w-full table-auto border-collapse border border-gray-300">
//                 <thead>
//                   <tr className="bg-gray-200">
//                     <th className="border border-gray-300 px-4 py-2 sticky left-0 bg-gray-200">Name</th>
//                     <th className="border border-gray-300 px-4 py-2 sticky left-0 bg-gray-200">PRN</th>
//                     {filteredAttendance.map((record, index) => (
//                       <th key={index} className="border border-gray-300 px-4 py-2">
//                         {record.date}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 {/* <tbody>
//                   {students.map((student, index) => (
//                     <tr key={index}>
//                       <td className="border border-gray-300 px-4 py-2 sticky left-0 bg-white">{student.name}</td>
//                       <td className="border border-gray-300 px-4 py-2 sticky left-0 bg-white">{student.prn}</td>
//                       {filteredAttendance.map((record) => (
//                         <td key={record.date} className="border border-gray-300 px-4 py-2">
//                           {student.attendance[record.date]+student.attendance[record.date - 1]}
                          
//                         </td>
//                       ))}
//                     </tr>
//                   ))}
//                 </tbody> */}
//                 <tbody>
//   {students.map((student, index) => (
//     <tr key={index}>
//       {/* Name column with sticky positioning */}
//       <td className="border border-gray-300 px-4 py-2 sticky left-0 bg-white">{student.name}</td>
//       {/* PRN column with sticky positioning */}
//       <td className="border border-gray-300 px-4 py-2 sticky left-0 bg-white">{student.prn}</td>
//       {/* Attendance columns */}
//       {filteredAttendance.map((record, recordIndex) => {
//         // Safely calculate attendance
//         const currentAttendance = student.attendance[record.date] || 0;
//         const previousAttendance = recordIndex > 0
//           ? student.attendance[filteredAttendance[recordIndex - 1].date] 
//           : 0;

//         // Add current and previous attendance
//         const totalAttendance = currentAttendance + previousAttendance;

//         return (
//           <td key={record.date} className="border border-gray-300 px-4 py-2">
//             {totalAttendance}
//           </td>
//         );
//       })}
//     </tr>
//   ))}
// </tbody>

//               </table>
//             </div>
//           </div>
//         </div>
        
        
//         ) : (
//           selectedSemester && (
//             <p className="text-gray-600 mt-4">
//               No attendance records found for this semester.
//             </p>
//           )
//         )}
//       </div>
//     );
//   };
  
//   export default GetReport;
// import React from 'react';

// // Dummy attendance data
// const attendanceData = {
//   attendance: [
//     {
//       date: '2024-12-01',
//       semId: 'SEM123',
//       students: [
//         { name: 'John Doe', prn: 'PRN12345', attendance: 1 },
//         { name: 'Jane Smith', prn: 'PRN67890', attendance: 1 },
//         { name: 'Alice Johnson', prn: 'PRN11223', attendance: 0 },
//       ],
//     },
//     {
//       date: '2024-12-02',
//       semId: 'SEM123',
//       students: [
//         { name: 'John Doe', prn: 'PRN12345', attendance: 1 },
//         { name: 'Jane Smith', prn: 'PRN67890', attendance: 1 },
//         { name: 'Alice Johnson', prn: 'PRN11223', attendance: 1 },
//       ],
//     },
//     {
//       date: '2024-12-03',
//       semId: 'SEM123',
//       students: [
//         { name: 'John Doe', prn: 'PRN12345', attendance: 1 },
//         { name: 'Jane Smith', prn: 'PRN67890', attendance: 1 },
//         { name: 'Alice Johnson', prn: 'PRN11223', attendance: 0 },
//       ],
//     },
//     {
//       date: '2024-12-04',
//       semId: 'SEM123',
//       students: [
//         { name: 'John Doe', prn: 'PRN12345', attendance: 1 },
//         { name: 'Jane Smith', prn: 'PRN67890', attendance: 0 },
//         { name: 'Alice Johnson', prn: 'PRN11223', attendance: 0 },
//       ],
//     },
//     {
//       date: '2024-12-05',
//       semId: 'SEM123',
//       students: [
//         { name: 'John Doe', prn: 'PRN12345', attendance: 1 },
//         { name: 'Jane Smith', prn: 'PRN67890', attendance: 1 },
//         { name: 'Alice Johnson', prn: 'PRN11223', attendance: 0 },
//       ],
//     },
//     {
//         date: '2024-12-06',
//         semId: 'SEM123',
//         students: [
//           { name: 'John Doe', prn: 'PRN12345', attendance: 1 },
//           { name: 'Jane Smith', prn: 'PRN67890', attendance: 1 },
//           { name: 'Alice Johnson', prn: 'PRN11223', attendance: 0 },
//         ],
//     },
//     {
//         date: '2024-12-07',
//         semId: 'SEM123',
//         students: [
//           { name: 'John Doe', prn: 'PRN12345', attendance: 1 },
//           { name: 'Jane Smith', prn: 'PRN67890', attendance: 1 },
//           { name: 'Alice Johnson', prn: 'PRN11223', attendance: 0 },
//         ],
//     },
//     {
//         date: '2024-12-07',
//         semId: 'SEM123',
//         students: [
//           { name: 'John Doe', prn: 'PRN12345', attendance: 1 },
//           { name: 'Jane Smith', prn: 'PRN67890', attendance: 1 },
//           { name: 'Alice Johnson', prn: 'PRN11223', attendance: 0 },
//         ],
//     },


//   ],
// };

// // Function to preprocess attendance data
// const preprocessAttendance = (attendanceData) => {
//   const cumulativeData = {};

//   attendanceData.attendance.forEach((record) => {
//     record.students.forEach((student) => {
//       // Initialize the student's attendance record if not already present
//       if (!cumulativeData[student.prn]) {
//         cumulativeData[student.prn] = {
//           name: student.name,
//           prn: student.prn,
//           cumulativeAttendance: {},
//         };
//       }

//       // Calculate cumulative attendance
//       const prevDates = Object.keys(cumulativeData[student.prn].cumulativeAttendance);
//       const lastAttendance = prevDates.length
//         ? cumulativeData[student.prn].cumulativeAttendance[prevDates[prevDates.length - 1]]
//         : 0;

//       cumulativeData[student.prn].cumulativeAttendance[record.date] = lastAttendance + student.attendance;
//     });
//   });

//   return cumulativeData;
// };

// const GetReport = () => {
//   const cumulativeAttendance = preprocessAttendance(attendanceData);
//   const filteredAttendance = attendanceData.attendance; // Filter based on the current semester if needed

//   return (
//     <div className="parent mt-4 p-4 bg-gray-100 rounded">
//       <h3 className="font-medium mb-2">Attendance Records:</h3>
//       <table className="child w-full table-auto border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-300 px-4 py-2 sticky left-0 bg-white">Name</th>
//             <th className="border border-gray-300 px-4 py-2 sticky left-0 bg-white">PRN</th>
//             {filteredAttendance.map((record) => (
//               <th key={record.date} className="border border-gray-300 px-4 py-2">
//                 {record.date}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {Object.values(cumulativeAttendance).map((student, index) => (
//             <tr key={index}>
//               <td className="border border-gray-300 px-4 py-2 sticky left-0 bg-white">{student.name}</td>
//               <td className="border border-gray-300 px-4 py-2 sticky left-0 bg-white">{student.prn}</td>
//               {filteredAttendance.map((record) => (
//                 <td key={record.date} className="border border-gray-300 px-4 py-2">
//                   {student.cumulativeAttendance[record.date] || 0}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default GetReport;
// import React from 'react';

// const GetReport = ({ data }) => {
//   // Function to calculate attendance, student %, and lecture %
//   const calculateData = (data) => {
//     const students = {}; // Store cumulative attendance for each student
//     const dates = [];
//     const attendanceRows = [];
//     const totalStudents = data[0]?.attendance[0]?.students.length || 0;

//     // Initialize student data with names, PRNs, and starting attendance as 0
//     data[0]?.attendance[0]?.students.forEach((student) => {
//       students[student.prn] = {
//         name: student.name,
//         prn: student.prn,
//         cumulativeAttendance: 0,
//       };
//     });

//     // Iterate through attendance records
//     data.forEach((record) => {
//       const date = record.attendance[0]?.date;
//       const studentData = record.attendance[0]?.students;
//       if (date) dates.push(date);

//       studentData.forEach((student) => {
//         // Add attendance to cumulative value
//         students[student.prn].cumulativeAttendance += student.attendance;
//       });

//       // Calculate lecture percentage for the current date
//       const presentCount = studentData.filter(
//         (student) => student.attendance === 1
//       ).length;
//       const lecturePercentage = ((presentCount / totalStudents) * 100).toFixed(2);

//       attendanceRows.push({
//         date,
//         students: studentData.map((s) => ({
//           prn: s.prn,
//           attendance: students[s.prn].cumulativeAttendance,
//         })),
//         lecturePercentage,
//       });
//     });

//     return { students: Object.values(students), attendanceRows, dates };
//   };

//   // Process data
//   const { students, attendanceRows, dates } = calculateData(data);

//   return (
//     <div className="parent mt-4 p-4 bg-gray-100 rounded">
//       <h3 className="font-medium mb-2">Attendance Records:</h3>
//       <div style={{ overflowX: 'auto' }}>
//         <table className="child w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 px-4 py-2 sticky left-0 bg-white">Name</th>
//               <th className="border border-gray-300 px-4 py-2 sticky left-0 bg-white">PRN</th>
//               {dates.map((date, index) => (
//                 <th key={index} className="border border-gray-300 px-4 py-2">
//                   {date}
//                 </th>
//               ))}
//               <th className="border border-gray-300 px-4 py-2">Student %</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => {
//               // Calculate student percentage
//               const studentPercentage = (
//                 (student.cumulativeAttendance / dates.length) *
//                 100
//               ).toFixed(2);

//               return (
//                 <tr key={student.prn}>
//                   <td className="border border-gray-300 px-4 py-2 sticky left-0 bg-white">
//                     {student.name}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2 sticky left-0 bg-white">
//                     {student.prn}
//                   </td>
//                   {attendanceRows.map((row, index) => {
//                     const studentAttendance = row.students.find(
//                       (s) => s.prn === student.prn
//                     )?.attendance;
//                     return (
//                       <td key={index} className="border border-gray-300 px-4 py-2">
//                         {studentAttendance || 0}
//                       </td>
//                     );
//                   })}
//                   <td className="border border-gray-300 px-4 py-2">{studentPercentage}%</td>
//                 </tr>
//               );
//             })}
//             {/* Add lecture percentage row */}
//             <tr>
//               <td
//                 colSpan="2"
//                 className="border border-gray-300 px-4 py-2 font-bold sticky left-0 bg-white"
//               >
//                 Lecture %
//               </td>
//               {attendanceRows.map((row, index) => (
//                 <td key={index} className="border border-gray-300 px-4 py-2 font-bold">
//                   {row.lecturePercentage}%
//                 </td>
//               ))}
//               <td className="border border-gray-300 px-4 py-2"></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default GetReport;

import { useMemo } from 'react';

const GetReport = ({ data }) => {
    const processAttendanceData = useMemo(() => {
      const students = {}; // To store student details and their cumulative attendance
      const attendanceRows = []; // To store attendance data for each date
      const allDates = new Set(); // To store unique dates
  
      // Step 1: Initialize students with cumulative attendance
      data.attendance.forEach((record) => {
        record.students.forEach((student) => {
          if (!students[student.prn]) {
            students[student.prn] = {
              name: student.name,
              prn: student.prn,
              cumulativeAttendance: 0,
            };
          }
        });
      });
  
      // Step 2: Process each attendance record and calculate attendance data
      data.attendance.forEach((record) => {
        const { date, students: recordStudents } = record;
        allDates.add(date); // Add date to the Set to avoid duplicates
  
        // Add attendance data for the row (lecture percentage)
        const lecturePercentage = (
          (recordStudents.filter((s) => s.attendance === 1).length / recordStudents.length) *
          100
        ).toFixed(2);
  
        attendanceRows.push({
          date,
          lecturePercentage,
          students: recordStudents.map((s) => ({
            prn: s.prn,
            attendance: s.attendance, // Attendance per date
          })),
        });
  
        // Step 3: Update cumulative attendance for each student
        recordStudents.forEach((student) => {
          if (students[student.prn]) {
            students[student.prn].cumulativeAttendance += student.attendance || 0;
          }
        });
      });
  
      return {
        students: Object.values(students),
        attendanceRows,
        allDates: [...allDates], // Convert Set to Array to ensure unique dates
      };
    }, [data]);
  
    const { students, attendanceRows, allDates } = processAttendanceData;
  
    return (
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h3 className="font-medium mb-2">Attendance Records:</h3>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">PRN</th>
              {allDates.map((date, index) => (
                <th key={`${date}-${index}`} className="border border-gray-300 px-4 py-2">
                  {date}
                </th>
              ))}
              <th className="border border-gray-300 px-4 py-2">Student %</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              const studentPercentage = (
                (student.cumulativeAttendance / allDates.length) *
                100
              ).toFixed(2);
  
              return (
                <tr key={student.prn}>
                  <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.prn}</td>
                  {attendanceRows.map((row, index) => {
                    const studentAttendance = row.students.find(
                      (s) => s.prn === student.prn
                    )?.attendance;
                    return (
                      <td key={`${row.date}-${index}`} className="border border-gray-300 px-4 py-2">
                        {studentAttendance || 0}
                      </td>
                    );
                  })}
                  <td className="border border-gray-300 px-4 py-2">{studentPercentage}%</td>
                </tr>
              );
            })}
            <tr>
              <td colSpan="2" className="font-bold border border-gray-300 px-4 py-2">
                Lecture %
              </td>
              {attendanceRows.map((row, index) => (
                <td key={`lecture-${index}`} className="font-bold border border-gray-300 px-4 py-2">
                  {row.lecturePercentage}%
                </td>
              ))}
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default GetReport;
  