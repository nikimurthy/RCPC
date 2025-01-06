import ProfileCard from "./components/ProfileCard";
import OfficerCard from "./components/OfficerCard";
import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {

    const initialOfficers = [
      { title: "President", name: "Nadia Malik", uniqname: "nadiamalik" },
      { title: "VP DEI", name: "Arya Goel", uniqname: "aryagoel" },
      { title: "Room Res Officers", name: "Allison Li", uniqname: "allili" }
  ];

  return (
    <>
      <div className="Row1 container-fluid d-flex p-5">
        <ProfileCard />
        <div className="officers d-flex flex-column">
          <h1 className="txt-dblue txt-Merri">Rem & Company</h1>
          {initialOfficers.map((officer, index) => (
            <OfficerCard 
              key = {index}
              title= {officer.title}
              name = {officer.name}
              uniqname= {officer.uniqname} />
          ))}

          <button type="button" className ="btn bg-beige addButton"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-circle txt-dblue mt-4 me-5" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
          </button>
        </div>
      </div>

      <div className = "Row2 container-fluid p-5">
          <Dropdown name = "placeholder Name" content = "placeholder content"/>
      </div>
    </>
  );
}

export default App;