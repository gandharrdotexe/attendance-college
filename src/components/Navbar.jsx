
// import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     return (
//       <nav className="bg-blue-500 text-white shadow-md">
//         <div className="container mx-auto px-4 flex items-center justify-between h-16">
//           {/* Logo */}
//           <a href="/" className="text-2xl font-bold">
//             MyLogo
//           </a>
  
//           {/* Links for Desktop */}
//           <div className="hidden md:flex space-x-6">
//             <RouterLink to="/faculty" className="hover:text-blue-200">
//               Faculty
//             </RouterLink>
//             <RouterLink to="/hod" className="hover:text-blue-200">
//               HOD
//             </RouterLink>
//             <RouterLink to="/principal" className="hover:text-blue-200">
//               Principal
//             </RouterLink>
            
//           </div>
  
//           {/* Hamburger Menu for Mobile */}
//           <button
//             className="md:hidden focus:outline-none"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <span className="block w-6 h-0.5 bg-white mb-1"></span>
//             <span className="block w-6 h-0.5 bg-white mb-1"></span>
//             <span className="block w-6 h-0.5 bg-white"></span>
//           </button>
//         </div>
  
//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-blue-600">
//             <RouterLink
//               to="/faculty"
//               className="block px-4 py-2 hover:bg-blue-700"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Faculty
//             </RouterLink>
//             <RouterLink
//               to="/hod"
//               className="block px-4 py-2 hover:bg-blue-700"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               HOD
//             </RouterLink>
//             <RouterLink
//               to="/principal"
//               className="block px-4 py-2 hover:bg-blue-700"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Principal
//             </RouterLink>
            
//           </div>
//         )}
//       </nav>
//     );
// }

// export default Navbar

// import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-blue-500 text-white shadow-md">
//       <div className="container mx-auto px-4 flex items-center justify-between h-16">
//         {/* Logo */}
//         <a href="/" className="text-2xl font-bold">
//           MyLogo
//         </a>

//         {/* Links for Desktop */}
//         <div className="hidden md:flex space-x-6 relative">
//           <RouterLink to="/faculty" className="hover:text-blue-200">
//             Faculty
//           </RouterLink>

//           {/* HOD Dropdown */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setIsDropdownOpen(true)}
//             onMouseLeave={() => setIsDropdownOpen(false)}
//           >
//             <RouterLink
//               to="/hod"
//               className="hover:text-blue-200"
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             >
//               HOD
//             </RouterLink>
//             {isDropdownOpen && (
//               <div className="absolute top-full left-0 mt-2 w-40 bg-white text-blue-500 rounded-md shadow-lg z-10">
//                 <RouterLink
//                   to="/hod/link1"
//                   className="block px-4 py-2 hover:bg-blue-200"
//                 >
//                   Link1
//                 </RouterLink>
//                 <RouterLink
//                   to="/hod/link2"
//                   className="block px-4 py-2 hover:bg-blue-200"
//                 >
//                   Link2
//                 </RouterLink>
//                 <RouterLink
//                   to="/hod/link3"
//                   className="block px-4 py-2 hover:bg-blue-200"
//                 >
//                   Link3
//                 </RouterLink>
//               </div>
//             )}
//           </div>

//           <RouterLink to="/principal" className="hover:text-blue-200">
//             Principal
//           </RouterLink>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <span className="block w-6 h-0.5 bg-white mb-1"></span>
//           <span className="block w-6 h-0.5 bg-white mb-1"></span>
//           <span className="block w-6 h-0.5 bg-white"></span>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-blue-600">
//           <RouterLink
//             to="/faculty"
//             className="block px-4 py-2 hover:bg-blue-700"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Faculty
//           </RouterLink>
//           <div className="relative">
//             <RouterLink
//               to="/hod"
//               className="block px-4 py-2 hover:bg-blue-700"
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             >
//               HOD
//             </RouterLink>
//             {isDropdownOpen && (
//               <div className="bg-blue-500">
//                 <RouterLink
//                   to="/hod/link1"
//                   className="block px-4 py-2 hover:bg-blue-700"
//                 >
//                   Link1
//                 </RouterLink>
//                 <RouterLink
//                   to="/hod/link2"
//                   className="block px-4 py-2 hover:bg-blue-700"
//                 >
//                   Link2
//                 </RouterLink>
//                 <RouterLink
//                   to="/hod/link3"
//                   className="block px-4 py-2 hover:bg-blue-700"
//                 >
//                   Link3
//                 </RouterLink>
//               </div>
//             )}
//           </div>
//           <RouterLink
//             to="/principal"
//             className="block px-4 py-2 hover:bg-blue-700"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Principal
//           </RouterLink>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleMouseEnter = () => setIsDropdownOpen(true);
//   const handleMouseLeave = () => setIsDropdownOpen(false);

//   return (
//     <nav className="bg-blue-500 text-white shadow-md">
//       <div className="container mx-auto px-4 flex items-center justify-between h-16">
//         {/* Logo */}
//         <a href="/" className="text-2xl font-bold">
//           MyLogo
//         </a>

//         {/* Links for Desktop */}
//         <div className="hidden md:flex space-x-6 relative">
//           <RouterLink to="/faculty" className="hover:text-blue-200">
//             Faculty
//           </RouterLink>

//           {/* HOD Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <RouterLink
//               // to="/hod"
//               className="hover:text-blue-200"
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             >
//               HOD
//             </RouterLink>
//             {isDropdownOpen && (
//               <div className="absolute top-full left-0 mt-2 w-40 bg-white text-blue-500 rounded-md shadow-lg z-10">
//                 <RouterLink
//                   to="/hod/link1"
//                   className="block px-4 py-2 hover:bg-blue-200"
//                 >
//                   Link1
//                 </RouterLink>
//                 <RouterLink
//                   to="/hod/link2"
//                   className="block px-4 py-2 hover:bg-blue-200"
//                 >
//                   Link2
//                 </RouterLink>
//                 <RouterLink
//                   to="/hod/link3"
//                   className="block px-4 py-2 hover:bg-blue-200"
//                 >
//                   Link3
//                 </RouterLink>
//               </div>
//             )}
//           </div>

//           <RouterLink to="/principal" className="hover:text-blue-200">
//             Principal
//           </RouterLink>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <span className="block w-6 h-0.5 bg-white mb-1"></span>
//           <span className="block w-6 h-0.5 bg-white mb-1"></span>
//           <span className="block w-6 h-0.5 bg-white"></span>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-blue-600">
//           <RouterLink
//             to="/faculty"
//             className="block px-4 py-2 hover:bg-blue-700"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Faculty
//           </RouterLink>
//           <div>
//             <RouterLink
              
//               className="block px-4 py-2 hover:bg-blue-700"
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             >
//               HOD
//             </RouterLink>
//             {isDropdownOpen && (
//               <div className="bg-blue-500">
//                 <RouterLink
//                   to="/hod/link1"
//                   className="block px-4 py-2 hover:bg-blue-700"
//                 >
//                   Link1
//                 </RouterLink>
//                 <RouterLink
//                   to="/hod/link2"
//                   className="block px-4 py-2 hover:bg-blue-700"
//                 >
//                   Link2
//                 </RouterLink>
//                 <RouterLink
//                   to="/hod/link3"
//                   className="block px-4 py-2 hover:bg-blue-700"
//                 >
//                   Link3
//                 </RouterLink>
//               </div>
//             )}
//           </div>
//           <RouterLink
//             to="/principal"
//             className="block px-4 py-2 hover:bg-blue-700"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Principal
//           </RouterLink>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav className="bg-blue-500 text-white shadow-md">
//       <div className="container mx-auto px-4 flex items-center justify-between h-16">
//         {/* Logo */}
//         <a href="/" className="text-2xl font-bold">
//           MyLogo
//         </a>

//         {/* Links for Desktop */}
//         <div className="hidden md:flex space-x-6">
//           <RouterLink to="/faculty" className="hover:text-blue-200">
//             Faculty
//           </RouterLink>

//           {/* HOD Dropdown */}
//           <div className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="hover:text-blue-200 focus:outline-none"
//             >
//               HOD
//             </button>
//             <div
//               className={`absolute top-full left-0 mt-2 w-40 bg-white text-blue-500 rounded-md shadow-lg z-10 transition-transform duration-300 ease-in-out ${
//                 isDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
//               }`}
//             >
//               <RouterLink
//                 to="/hod/link1"
//                 className="block px-4 py-2 hover:bg-blue-200"
//                 onClick={() => setIsDropdownOpen(false)}
//               >
//                 Link1
//               </RouterLink>
//               <RouterLink
//                 to="/hod/link2"
//                 className="block px-4 py-2 hover:bg-blue-200"
//                 onClick={() => setIsDropdownOpen(false)}
//               >
//                 Link2
//               </RouterLink>
//               <RouterLink
//                 to="/hod/link3"
//                 className="block px-4 py-2 hover:bg-blue-200"
//                 onClick={() => setIsDropdownOpen(false)}
//               >
//                 Link3
//               </RouterLink>
//             </div>
//           </div>

//           <RouterLink to="/principal" className="hover:text-blue-200">
//             Principal
//           </RouterLink>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//         >
//           <span className="block w-6 h-0.5 bg-white mb-1"></span>
//           <span className="block w-6 h-0.5 bg-white mb-1"></span>
//           <span className="block w-6 h-0.5 bg-white"></span>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isDropdownOpen && (
//         <div className="md:hidden bg-blue-600">
//           <RouterLink
//             to="/faculty"
//             className="block px-4 py-2 hover:bg-blue-700"
//             onClick={() => setIsDropdownOpen(false)}
//           >
//             Faculty
//           </RouterLink>
//           <div>
//             <RouterLink
//               to="/hod"
//               className="block px-4 py-2 hover:bg-blue-700"
//               onClick={toggleDropdown}
//             >
//               HOD
//             </RouterLink>
//             {isDropdownOpen && (
//               <div className="bg-blue-500">
//                 <RouterLink
//                   to="/hod/link1"
//                   className="block px-4 py-2 hover:bg-blue-700"
//                 >
//                   Link1
//                 </RouterLink>
//                 <RouterLink
//                   to="/hod/link2"
//                   className="block px-4 py-2 hover:bg-blue-700"
//                 >
//                   Link2
//                 </RouterLink>
//                 <RouterLink
//                   to="/hod/link3"
//                   className="block px-4 py-2 hover:bg-blue-700"
//                 >
//                   Link3
//                 </RouterLink>
//               </div>
//             )}
//           </div>
//           <RouterLink
//             to="/principal"
//             className="block px-4 py-2 hover:bg-blue-700"
//             onClick={() => setIsDropdownOpen(false)}
//           >
//             Principal
//           </RouterLink>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          MyLogo
        </a>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          <RouterLink to="/faculty" className="hover:text-blue-200">
            Faculty
          </RouterLink>

          {/* HOD Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 hover:text-blue-200 focus:outline-none"
            >
              HOD
              <span
                style={{fontSize: '0.6rem'}}
                className={`transform transition-transform duration-300 ${
                  isDropdownOpen ? 'rotate-180' : 'rotate-0'
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`absolute top-full left-0 mt-2 w-40 bg-white text-blue-500 rounded-md shadow-lg z-10 transition-all duration-300 ease-in-out ${
                isDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
              }`}
            >
              <RouterLink
                to="/hod/getAttendance"
                className="block px-4 py-2 hover:bg-blue-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                Get Attendance
              </RouterLink>
              <RouterLink
                to="/hod/getSubjectsAndFaculty"
                className="block px-4 py-2 hover:bg-blue-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                Get Subjects and Faculty
              </RouterLink>
              <RouterLink
                to="/hod/getFacultyByDepartment"
                className="block px-4 py-2 hover:bg-blue-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                Get Faculty by Department
              </RouterLink>
            </div>
          </div>

          <RouterLink to="/principal" className="hover:text-blue-200">
            Principal
          </RouterLink>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-600">
          <RouterLink
            to="/faculty"
            className="block px-4 py-2 hover:bg-blue-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Faculty
          </RouterLink>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="block w-full text-left px-4 py-2 hover:bg-blue-700 focus:outline-none"
            >
              HOD
              <span
                className={`ml-2 inline-block transform transition-transform duration-300 ${
                  isDropdownOpen ? 'rotate-180' : 'rotate-0'
                }`}
              >
                ▼
              </span>
            </button>getFacultyByDepartment
            <div
              className={`bg-blue-500 transition-all duration-300 ease-in-out ${
                isDropdownOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <RouterLink
                to="/hod/getAttendance"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => {
                  setIsDropdownOpen(false);
                  setIsMobileMenuOpen(false);
                }}
              >
                Get Attendance
              </RouterLink>
              <RouterLink
                to="/hod/getSubjectsAndFaculty"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => {
                  setIsDropdownOpen(false);
                  setIsMobileMenuOpen(false);
                }}
              >
                Get Subjects and Faculty
              </RouterLink>
              <RouterLink
                to="/hod/getFacultyByDepartment"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => {
                  setIsDropdownOpen(false);
                  setIsMobileMenuOpen(false);
                }}
              >
                Get Faculty by Department
              </RouterLink>
            </div>
          </div>
          <RouterLink
            to="/principal"
            className="block px-4 py-2 hover:bg-blue-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Principal
          </RouterLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
