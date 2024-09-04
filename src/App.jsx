import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Github from "./components/Github";
import { User } from "./components/User/User";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <div className="main-container m-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/github" element={<Github />} />
          <Route path="/blog" element={<Github />} />
          <Route path="/blog/:ID" element={<Home />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;












// import React from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Github from "./components/Github";
// import { User } from "./components/User/User";
// import NotFound from "./components/NotFound"; // Import the NotFound component
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { getUserData } from "./api/GithubData/User"; // Import the UserData service
// console.log('getting data from Github: ',await getUserData())

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="main-container m-auto">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/github" element={<Github />} />
//           <Route path="/blog" element={<Github />} />
//           <Route path="/blog/ID" element={<Home />} />
//           <Route loader={getUserData} path="/user/:userId" element={<User />} />
//           <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
//         </Routes>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
