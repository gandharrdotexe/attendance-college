 import React, { useState, useEffect } from "react";
import AttendanceTable from "./components/AttendanceTable";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DropdownPage from "./components/DropdownPage";
import AttendancePage from "./AttendancePage";
import DynamicDropdowns from "./components/DynamicDropdowns";
import FacultyPage from "./FacultyPage";
import HodAttendanceTable from "./hodAttendanceTable";
import SubjectsToFaculty from "./SubjectsToFaculty";
import GetFacultyByDepartment from "./GetFacultyByDepartment";


function App() {

 
  
  const [selectedValues, setSelectedValues] = useState({});

  const handleSelectionChange = (values) =>
  {
    console.log("Selected Values:", values);
    setSelectedValues(values);
  };
  const data2 = {
    semesters: ["5", "6", "7", "8"],
    divisions: {
      5: ["A", "B"],
      6: ["A", "B"],
      7: ["A"],
      8: ["B"],
    },
    batches: {
      5: { A: ["01", "02"], B: ["03", "ALL"] },
      6: { A: ["01"], B: ["ALL"] },
      7: { A: ["ALL"] },
      8: { B: ["02", "ALL"] },
    },
  };

  const data3 = {
    semesters: ["7", "6", "8", "5"],
    branches: {
      5: ["CS"],
      6: ["CS"],
      7: ["CS"],
      8: ["CS"],
    },
    divisions: {
      5: { CS: ["A"] },
      6: { CS: ["B"] },
      7: { CS: ["A"] },
      8: { CS: ["B"] },
    },
    batches: {
      5: { CS: { A: ["01", "ALL"] } },
      6: { CS: { B: ["02", "ALL"] } },
      7: { CS: { A: ["01", "ALL"] } },
      8: { CS: { B: ["02", "ALL"] } },
    },
  };
  const data1 = {
    attendance: [
      {
        date: "2024-12-23T04:30:00.000Z",
        sem_id: "5_CS_A_01_CS501_F001",
        students: [
          {
            name: "Alice Green",
            prn: "PRN005",
            attendance: 0,
          },
        ],
      },
      {
        date: "2024-12-22T23:00:00.000Z",
        sem_id: "5_CS_A_01_CS501_F001",
        students: [
          {
            name: "Alice Green",
            prn: "PRN005",
            attendance: 1,
          },
        ],
      },
    ],
  };

  const data = [
    {
      attendance: [
        {
          date: "02/08/2024",
          semId: "SEM123",
          students: [
            { name: "John Doe", prn: "PRN12345", attendance: 1 },
            { name: "Jane Smith", prn: "PRN67890", attendance: 0 },
            { name: "Mithra", prn: "PRN12340", attendance: 1 },
          ],
        },
      ],
    },
    {
      attendance: [
        {
          date: "03/08/2024",
          semId: "SEM123",
          students: [
            { name: "John Doe", prn: "PRN12345", attendance: 1 },
            { name: "Jane Smith", prn: "PRN67890", attendance: 0 },
            { name: "Mithra", prn: "PRN12340", attendance: 0 },
          ],
        },
      ],
    },
    {
      attendance: [
        {
          date: "04/08/2024",
          semId: "SEM123",
          students: [
            { name: "John Doe", prn: "PRN12345", attendance: 1 },
            { name: "Jane Smith", prn: "PRN67890", attendance: 0 },
            { name: "Mithra", prn: "PRN12340", attendance: 1 },
          ],
        },
      ],
    },
    {
      attendance: [
        {
          date: "05/08/2024",
          semId: "SEM123",
          students: [
            { name: "John Doe", prn: "PRN12345", attendance: 1 },
            { name: "Jane Smith", prn: "PRN67890", attendance: 1 },
            { name: "Mithra", prn: "PRN12340", attendance: 1 },
          ],
        },
      ],
    },
    {
      attendance: [
        {
          date: "05/08/2024",
          semId: "SEM123",
          students: [
            { name: "John Doe", prn: "PRN12345", attendance: 1 },
            { name: "Jane Smith", prn: "PRN67890", attendance: 1 },
            { name: "Mithra", prn: "PRN12340", attendance: 1 },
          ],
        },
      ],
    },
    {
      attendance: [
        {
          date: "08/08/2024",
          semId: "SEM123",
          students: [
            { name: "John Doe", prn: "PRN12345", attendance: 1 },
            { name: "Jane Smith", prn: "PRN67890", attendance: 1 },
            { name: "Mithra", prn: "PRN12340", attendance: 0 },
          ],
        },
      ],
    },
    {
      attendance: [
        {
          date: "08/08/2024",
          semId: "SEM123",
          students: [
            { name: "John Doe", prn: "PRN12345", attendance: 1 },
            { name: "Jane Smith", prn: "PRN67890", attendance: 1 },
            { name: "Mithra", prn: "PRN12340", attendance: 0 },
          ],
        },
      ],
    },
    {
      attendance: [
        {
          date: "24/12/2024",
          semId: "SEM123",
          students: [
            { name: "John Doe", prn: "PRN12345", attendance: 1 },
            { name: "Jane Smith", prn: "PRN67890", attendance: 1 },
            { name: "Mithra", prn: "PRN12340", attendance: 0 },
          ],
        },
      ],
    },
    {
      attendance: [
        {
          date: "08/08/2024",
          semId: "SEM123",
          students: [
            { name: "John Doe", prn: "PRN12345", attendance: 1 },
            { name: "Jane Smith", prn: "PRN67890", attendance: 1 },
            { name: "Mithra", prn: "PRN12340", attendance: 0 },
          ],
        },
      ],
    },
  ];
  const router = createBrowserRouter([
    
    
    {
      path: "/principal",
      // element: <DynamicDropdowns data = {data2}/>
      element: <AttendancePage/>
    },
    {
      path: "/faculty",
      // element: <DynamicDropdowns data = {data2}/>
      element: <FacultyPage/>
    },
    {
      path: "/hod/getAttendance",
      // element: <DynamicDropdowns data = {data2}/>
      element: <HodAttendanceTable/>
    },
    {
      path: "/hod/getSubjectsAndFaculty ",
      element: <SubjectsToFaculty/>
    },
    {
      path: "/hod/getFacultyByDepartment",
      element: <GetFacultyByDepartment/>
    },
    {
      path: "/criteria",
      // element: <DynamicDropdowns data = {data2}/>
      element: <DynamicDropdowns data = {data2}/>
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
