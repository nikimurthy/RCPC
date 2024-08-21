import React, { useState } from "react";

interface CreateOfficerProps {
    title: string;
    name: string;
    uniqname: string;
}

function CreateOfficer(props: CreateOfficerProps) {
    const [officer, setOfficer] = useState({
      title: "",
      name: "",
      uniqname: ""
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setOfficer((prevOfficer) => ({
          ...prevOfficer,
          [name]: value,
        }));
      }

    
    // Handle form submission
    function newOfficer(event: React.FormEvent<HTMLFormElement>) {
        props.onAdd(officer);
        setOfficer({ title: "", name: "", uniqname: "" });
        event.preventDefault();
    }

    // Handle "Enter" key press for submission
    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            submitOfficer(event);
        }
    }

    return (
        <div>
          <form>
            <input
              name="title"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              value={officer.title}
              placeholder="Title"
            />
            <input
              name="title"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              value={officer.name}
              placeholder="First and Last Name"
            />

            <input
              name="title"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              value={officer.name}
              placeholder="uniqname"
            />
          </form>
        </div>
      );
    }
    