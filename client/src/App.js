import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CandidateViewer from "./components/CandidateViewer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <CandidateViewer />
      <Footer />  
    </>
  );
};

export default App;
