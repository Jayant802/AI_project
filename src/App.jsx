// import (Routes, Route) from 'react-router-dom'

// import LandingPage from "./pages/LandingPage";
// import Signup from "./pages/SignUp";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import InterviewPrep from "./pages/InterviewPrep";


// const App = () => {
//   return (
//     <Routes>
//           <Route path="/"element={<LandingPage />} />
//           <Route path="/Signup" element={<Signup />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/interview/:id" element={<InterviewPrep />} />
//     </Routes>
   

//   )
// }

// export default App-0

import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import InterviewPrep from "./pages/InterviewPrep";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/interview/:id" element={<InterviewPrep />} />
    </Routes>
  );
};

export default App;





// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import Dashboard from "./pages/Dashboard";
// import InterviewPrep from "./pages/InterviewPrep";
// import LandingPage from "./pages/LandingPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/dashboard" element={<Dashboard />} />

//         {/* ✅ IMPORTANT */}
//         <Route path="/interview/:id" element={<InterviewPrep />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




// import { Routes, Route } from "react-router-dom";

// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import Dashboard from "./pages/Dashboard";
// import InterviewPrep from "./pages/InterviewPrep";
// import LandingPage from "./pages/LandingPage";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/dashboard" element={<Dashboard />} />

//       {/* ✅ Interview Route */}
//       <Route path="/interview/:id" element={<InterviewPrep />} />
//     </Routes>
//   );
// }

// export default App;
