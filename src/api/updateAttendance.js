// api/updateAttendanceData.js
const updateAttendanceData = async (data) =>
{
    let data1 = [
      {
        date: "2025-01-11T03:30:00.000Z",
        sem_id: "5_CS_A_01_CS501_F001",
        students: [
          {
            name: "John Doe",
            prn: "PRN001",
            attendance: 1,
          },
          {
            name: "Jane Smith",
            prn: "PRN002",
            attendance: 1,
          },
          {
            name: "Sarah Jones",
            prn: "PRN005",
            attendance: 1,
          },
        ],
      },
    ];
    const parceddata={
        "attendance": data
}
    console.log("parced data:",parceddata);
  try {
    const response = await fetch(
      "https://attendance-backend-gold.vercel.app/faculty/updateAttendanceData",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Ensure JSON content type
        },
        body: JSON.stringify(parceddata), // Convert the data to JSON string
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Success:", responseData);
    return responseData; // Return the response data
  } catch (error) {
    console.error("Error:", error.message);
    throw error; // Re-throw the error to handle it in the calling component
  }
};
updateAttendanceData([]);
export default updateAttendanceData;
