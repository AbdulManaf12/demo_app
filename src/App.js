import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProfileSection from "./components/ProfileSection";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-grow">
        <div className="flex-grow h-screen overflow-y-scroll">
          <MainContent />
        </div>
        <ProfileSection />
      </div>
    </div>
  );
}

export default App;
