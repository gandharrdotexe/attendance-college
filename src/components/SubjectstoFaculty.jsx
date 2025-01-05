import React, { useState, useEffect } from "react";
import SubjectsToFaculty from "../SubjectsToFaculty";
import fetchSubjectsAndFaculty from "../api/fetchSubjectsAndFaculty";



const SubjectstoFacultyDropdown = ({ data, onSelectionChange,facultytosubject ,handelView,selected}) => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
    const [selectedSubject, setSelectedSubject] = useState("");
    const [selectedFaculty, setSelectedFaculty] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [faculty, setFaculty] = useState([]);

  const hasBranches = Boolean(data.branches); // Check if branches are available

  useEffect(() => {
    if (selectedDivision) {
          handleFetchSubjectsAndFaculty();
       
    }
  }, [selectedDivision]);

  const handleSemesterChange = (e) => {
    const semester = e.target.value;
    setSelectedSemester(semester);
    setSelectedBranch("");
    setSelectedDivision("");
    setSelectedBatch("");
    setSelectedSubject("");

    onSelectionChange({ semester, branch: "", division: "", batch: "", subject: "" });
  };

  const handleBranchChange = (e) => {
    const branch = e.target.value;
    setSelectedBranch(branch);
    setSelectedDivision("");
    setSelectedBatch("");
    setSelectedSubject("");

    onSelectionChange({ semester: selectedSemester, branch, division: "", batch: "", subject: "" });
  };

  const handleDivisionChange = (e) => {
    const division = e.target.value;
    setSelectedDivision(division);
    setSelectedBatch("");
    setSelectedSubject("");

    onSelectionChange({ semester: selectedSemester, branch: selectedBranch, division, batch: "", subject: "" });
  };

  const handleBatchChange = (e) => {
    const batch = e.target.value;
    setSelectedBatch(batch);
    setSelectedSubject("");

    onSelectionChange({ semester: selectedSemester, branch: selectedBranch, division: selectedDivision, batch, subject: "" });
  };

  const handleSubjectChange = (e) => {
    const subject = e.target.value;
    setSelectedSubject(subject);

    onSelectionChange({
      semester: selectedSemester,
      branch: selectedBranch,
      division: selectedDivision,
      batch: selectedBatch,
      subject_id:subject,
    });
  };
    
    const handelSelectedFaculty = (faculty) =>
    {
      setSelectedFaculty(faculty);
      
    }

  const handleFetchSubjectsAndFaculty = async () => {
      try
      {
         setSelectedBranch("CS");
      const data = await fetchSubjectsAndFaculty(selectedSemester, "CS", selectedDivision);
      setSubjects(data.subjects);
        setFaculty(data.faculty);
        console.log(subjects);
    } catch (error) {
      console.error("Error fetching subjects and faculty:", error);
    }
  };

    
  return (
    <div className="p-4">
      <div className="space-y-6 p-6 bg-gray-100 rounded-lg shadow-md max-w-[50%] mx-auto">
        <div className="flex flex-wrap gap-6 flex-1 items-center justify-center">
          {/* Semester Dropdown */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Semester:</label>
            <select
              value={selectedSemester}
              onChange={handleSemesterChange}
              className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Semester</option>
              {data.semesters.map((semester) => (
                <option key={semester} value={semester}>
                  {semester}
                </option>
              ))}
            </select>
          </div>

          {/* Branch Dropdown */}
          {hasBranches && selectedSemester && (
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Branch:</label>
              <select
                value={selectedBranch}
                onChange={handleBranchChange}
                className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Branch</option>
                {data.branches[selectedSemester]?.map((branch) => (
                  <option key={branch} value={branch}>
                    {branch}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Division Dropdown */}
          {selectedSemester && (!hasBranches || selectedBranch) && (
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Division:</label>
              <select
                value={selectedDivision}
                onChange={handleDivisionChange}
                className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Division</option>
                {hasBranches
                  ? data.divisions[selectedSemester]?.[selectedBranch]?.map((division) => (
                      <option key={division} value={division}>
                        {division}
                      </option>
                    ))
                  : data.divisions[selectedSemester]?.map((division) => (
                      <option key={division} value={division}>
                        {division}
                      </option>
                    ))}
              </select>
            </div>
          )}

          {/* Batch Dropdown */}
          {selectedDivision && (
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Batch:</label>
              <select
                value={selectedBatch}
                onChange={handleBatchChange}
                className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Batch</option>
                {hasBranches
                  ? data.batches[selectedSemester]?.[selectedBranch]?.[selectedDivision]?.map((batch) => (
                      <option key={batch} value={batch}>
                        {batch}
                      </option>
                    ))
                  : data.batches[selectedSemester]?.[selectedDivision]?.map((batch) => (
                      <option key={batch} value={batch}>
                        {batch}
                      </option>
                    ))}
              </select>
            </div>
          )}

          {/* Subject Dropdown */}
          {selectedBatch && (
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Subject:</label>
              <select
                value={selectedSubject}
                onChange={handleSubjectChange}
                className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Subject</option>
                {subjects.map((subject) => (
                  <option key={subject.subject_id} value={subject.subject_id}>
                    {subject.subject_name} ({subject.subject_id})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Faculty Dropdown */}
          {selectedSubject && (
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Faculty:</label>
              <select
                value={
                  subjects.find((subject) => subject.subject_id === selectedSubject)?.faculty_id || ""
                }
                onChange={(e) => {
                  const updatedFacultyId = e.target.value;
                  setSubjects((prevSubjects) =>
                    prevSubjects.map((subject) =>
                      subject.subject_id === selectedSubject
                        ? { ...subject, faculty_id: updatedFacultyId }
                        : subject
                    )
                  );
                  onSelectionChange({
                    semester: selectedSemester,
                    branch: selectedBranch,
                    division: selectedDivision,
                    batch: selectedBatch,
                    subject_id: selectedSubject,
                    faculty_id: updatedFacultyId,
                  });
                    handelSelectedFaculty(updatedFacultyId);
                }}
                className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Faculty</option>
                {faculty.map((f) => (
                  <option key={f.faculty_id} value={f.faculty_id}>
                    {f.faculty_name} 
                  </option>
                ))}
              </select>
            </div>
                  )}
                  
              </div>
            
          </div>
          
      <div className="mt-4 text-center">
         {selectedFaculty &&(
                 <button
          /*onClick={handelFacultyAllocation()} */
          className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
     onClick={facultytosubject}   >
          Assign Faculty
          </button>        
         )}
              <button
          /*onClick={handelFacultyAllocation()} */
          className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
     onClick={handelView}   >
          view Data
          </button>   
               </div>  
          
          
          
    </div>
  );
};

export default SubjectstoFacultyDropdown;
