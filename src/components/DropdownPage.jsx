import React, { useState } from "react";

const DropdownPage = ({
  criteria,
  selected,
  onDropdownChange,
  onFetchData,
  isLoading,
  error,
  children,
}) => {
  console.log('Criteria:',criteria);
  console.log('Selected:',selected);
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const hasBranches = Boolean(criteria.branches && criteria.branches[selectedSemester]);
  console.log('hasBranches:',hasBranches);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");

  const handleSemesterChange = (e) => {
    const semester = e.target.value;
    setSelectedSemester(semester);
    setSelectedBranch("");
    setSelectedDivision("");
    setSelectedBatch("");
    onDropdownChange({ semester });
  };

  const handleBranchChange = (e) => {
    const branch = e.target.value;
    setSelectedBranch(branch);
    setSelectedDivision("");
    setSelectedBatch("");
    onDropdownChange({ semester: selectedSemester, branch });
  };

  const handleDivisionChange = (e) => {
    const division = e.target.value;
    setSelectedDivision(division);
    setSelectedBatch("");
    onDropdownChange({ semester: selectedSemester, branch: selectedBranch, division });
  };

  const handleBatchChange = (e) => {
    const batch = e.target.value;
    setSelectedBatch(batch);
    onDropdownChange({
      semester: selectedSemester,
      branch: selectedBranch,
      division: selectedDivision,
      batch,
    });
  };
  

  return (
//     <div className="p-4">
//       <div className="space-y-6 p-6 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
//         {/* Semesters Dropdown */}
//         <div className="flex flex-col">
//           <label className="text-gray-700 font-medium mb-2">Semester:</label>
//           <select
//             name="semester"
//             value={selectedSemester}
//             onChange={handleSemesterChange}
//             className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           >
//             <option value="">Select Semester</option>
//             {criteria.semesters && criteria.semesters.map((semester) => (
//               <option key={semester} value={semester}>
//                 {semester}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Branches Dropdown */}
//         {hasBranches && selectedSemester && (
//           <div className="flex flex-col">
//             <label className="text-gray-700 font-medium mb-2">Branch:</label>
//             <select
//               name="branch"
//               value={selectedBranch}
//               onChange={handleBranchChange}
//               className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             >
//               <option value="">Select Branch</option>
//               {criteria.branches[selectedSemester] && criteria.branches[selectedSemester].map((branch) => (
//                 <option key={branch} value={branch}>
//                   {branch}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

//         {/* Divisions Dropdown */}
//         {/* {selectedSemester && (!hasBranches || selectedBranch) && (
//           <div className="flex flex-col">
//             <label className="text-gray-700 font-medium mb-2">Division:</label>
//             <select
//               name="division"
//               value={selectedDivision}
//               onChange={handleDivisionChange}
//               className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             >
//               <option value="">Select Division</option>
//               {console.log(criteria.divisions)}
//               {criteria.divisions && criteria.divisions[selectedSemester] && (!hasBranches || criteria.divisions[selectedSemester][selectedBranch]) && criteria.divisions[selectedSemester][selectedBranch].map((division) => (
//                 <option key={division} value={division}>
//                   {division}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )} */}
//         {selectedSemester && (!hasBranches || selectedBranch) && (
//           <div className="flex flex-col">
//             <label className="text-gray-700 font-medium mb-2">Division:</label>
//             <select
//               name="division"
//               value={selectedDivision}
//               onChange={handleDivisionChange}
//               className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             >
//               <option value="">Select Division</option>
//               {criteria.divisions && criteria.divisions[selectedSemester] && (!hasBranches || criteria.divisions[selectedSemester][selectedBranch]) && (
//                 hasBranches
//                   ? criteria.divisions[selectedSemester][selectedBranch].map((division) => (
//                       <option key={division} value={division}>
//                         {division}
//                       </option>
//                     ))
//                   : criteria.divisions[selectedSemester].map((division) => (
//                       <option key={division} value={division}>
//                         {division}
//                       </option>
//                     ))
//               )}
//             </select>
//           </div>
//         )}

        

//         {/* Batches Dropdown */}
//         {selectedDivision && (
//           <div className="flex flex-col">
//             <label className="text-gray-700 font-medium mb-2">Batch:</label>
//             <select
//               name="batch"
//               value={selectedBatch}
//               onChange={handleBatchChange}
//               className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             >
//               {/* <option value="">Select Batch</option>
//               {criteria.batches && criteria.batches[selectedSemester] && criteria.batches[selectedSemester][selectedBranch] && criteria.batches[selectedSemester][selectedBranch][selectedDivision] && criteria.batches[selectedSemester][selectedBranch][selectedDivision].map((batch) => (
//                 <option key={batch} value={batch}>
//                   {batch}
//                 </option>
//               ))} */}
//               <option value="">Select Batch</option>
// {criteria.batches && criteria.batches[selectedSemester] && (
//   hasBranches
//     ? criteria.batches[selectedSemester][selectedBranch] && criteria.batches[selectedSemester][selectedBranch][selectedDivision] && criteria.batches[selectedSemester][selectedBranch][selectedDivision].map((batch) => (
//         <option key={batch} value={batch}>
//           {batch}
//         </option>
//       ))
//     : criteria.batches[selectedSemester][selectedDivision] && criteria.batches[selectedSemester][selectedDivision].map((batch) => (
//         <option key={batch} value={batch}>
//           {batch}
//         </option>
//       ))
// )}
//             </select>
//           </div>
//         )}
//       </div>

//       {/* Fetch Button */}
//       {selectedSemester && (!hasBranches || selectedBranch) && selectedDivision && selectedBatch && (
//   <div className="mt-4 text-center">
//     <button
//       onClick={() =>
//         onFetchData({
//           semester: selectedSemester,
//           branch: selectedBranch,
//           division: selectedDivision,
//           batch: selectedBatch,
//           subject_id: 'CS501'
//         })
//       }
//       className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//     >
//       Fetch Attendance Data
//     </button>
//   </div>
// )}
  
<div className="p-4">
<div className="space-y-6 p-6 bg-gray-100 rounded-lg shadow-md max-w-[50%] mx-auto">
  {/* Dropdown Container */}
  <div className="flex flex-wrap gap-6 flex-1 items-center justify-center">
    {/* Semesters Dropdown */}
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium mb-2">Semester:</label>
      <select
        name="semester"
        value={selectedSemester}
        onChange={handleSemesterChange}
        className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Select Semester</option>
        {criteria.semesters &&
          criteria.semesters.map((semester) => (
            <option key={semester} value={semester}>
              {semester}
            </option>
          ))}
      </select>
    </div>

    {/* Branches Dropdown */}
    {hasBranches && selectedSemester && (
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-2">Branch:</label>
        <select
          name="branch"
          value={selectedBranch}
          onChange={handleBranchChange}
          className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Branch</option>
          {criteria.branches[selectedSemester] &&
            criteria.branches[selectedSemester].map((branch) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
        </select>
      </div>
    )}

    {/* Divisions Dropdown */}
    {selectedSemester && (!hasBranches || selectedBranch) && (
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-2">Division:</label>
        <select
          name="division"
          value={selectedDivision}
          onChange={handleDivisionChange}
          className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Division</option>
          {criteria.divisions &&
            criteria.divisions[selectedSemester] &&
            (!hasBranches || criteria.divisions[selectedSemester][selectedBranch]) &&
            (hasBranches
              ? criteria.divisions[selectedSemester][selectedBranch].map((division) => (
                  <option key={division} value={division}>
                    {division}
                  </option>
                ))
              : criteria.divisions[selectedSemester].map((division) => (
                  <option key={division} value={division}>
                    {division}
                  </option>
                )))}
        </select>
      </div>
    )}

    {/* Batches Dropdown */}
    {selectedDivision && (
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-2">Batch:</label>
        <select
          name="batch"
          value={selectedBatch}
          onChange={handleBatchChange}
          className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Batch</option>
          {criteria.batches &&
            criteria.batches[selectedSemester] &&
            (hasBranches
              ? criteria.batches[selectedSemester][selectedBranch] &&
                criteria.batches[selectedSemester][selectedBranch][selectedDivision] &&
                criteria.batches[selectedSemester][selectedBranch][selectedDivision].map(
                  (batch) => (
                    <option key={batch} value={batch}>
                      {batch}
                    </option>
                  )
                )
              : criteria.batches[selectedSemester][selectedDivision] &&
                criteria.batches[selectedSemester][selectedDivision].map((batch) => (
                  <option key={batch} value={batch}>
                    {batch}
                  </option>
                )))}
        </select>
      </div>
    )}
  </div>

  {/* Fetch Button */}
  {selectedSemester &&
    (!hasBranches || selectedBranch) &&
    selectedDivision &&
    selectedBatch && (
      <div className="mt-4 text-center">
        <button
          onClick={() =>
            onFetchData({
              semester: selectedSemester,
              branch: selectedBranch,
              division: selectedDivision,
              batch: selectedBatch,
              subject_id: "CS501",
            })
          }
          className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Fetch Attendance Data
        </button>
      </div>
    )}
</div>




      {/* Loading Indicator */}
      {/* {isLoading && <p>Loading...</p>} */}

      {/* Error Message */}
      {/* {error && <p className="text-red-500">{error}</p>} */}

      {/* Render Additional Content */}
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default DropdownPage;
