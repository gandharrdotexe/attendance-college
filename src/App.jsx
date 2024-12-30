 import React, { useState, useEffect } from "react";
import AttendanceTable from "./components/AttendanceTable";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DropdownPage from "./components/DropdownPage";
import AttendancePage from "./AttendancePage";
import DynamicDropdowns from "./components/DynamicDropdowns";
import FacultyPage from "./FacultyPage";
import HodAttendanceTable from "./hodAttendanceTable";

function App() {

  const data2 = {
    "semesters": [
      "7",
      "6",
      "8",
      "5"
    ],
    "branches": {
      "5": [
        "CS"
      ],
      "6": [
        "CS"
      ],
      "7": [
        "CS"
      ],
      "8": [
        "CS"
      ]
    },
    "divisions": {
      "5": {
        "CS": [
          "A"
        ]
      },
      "6": {
        "CS": [
          "B"
        ]
      },
      "7": {
        "CS": [
          "A"
        ]
      },
      "8": {
        "CS": [
          "B"
        ]
      }
    },
    "batches": {
      "5": {
        "CS": {
          "A": [
            "01",
            "ALL"
          ]
        }
      },
      "6": {
        "CS": {
          "B": [
            "02",
            "ALL"
          ]
        }
      },
      "7": {
        "CS": {
          "A": [
            "01",
            "ALL"
          ]
        }
      },
      "8": {
        "CS": {
          "B": [
            "02",
            "ALL"
          ]
        }
      }
    }
  }
  
  const router = createBrowserRouter([
    
    {
      path: "/update",
      element: <AttendancePage/>
    },
    {
      path: "/new",
      element: <DynamicDropdowns data = {data2}/>
    },
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
      path: "/hod",
      // element: <DynamicDropdowns data = {data2}/>
      element: <HodAttendanceTable/>
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
