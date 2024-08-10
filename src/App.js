import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProfileSection from "./components/ProfileSection";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-grow">
        <MainContent />
        <ProfileSection />
      </div>
    </div>
  );
}

export default App;
