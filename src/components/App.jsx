import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function handleChange(e) {
    const { value, name } = e.target;

    setContact((preVal) => {
      if (name === "fName") {
        return { fName: value, lName: preVal.lName, email: preVal.email };
      } else if (name === "lName") {
        return { fName: preVal.fName, lName: value, email: preVal.email };
      } else if (name === "email") {
        return { fName: preVal.fName, lName: preVal.lName, email: value };
      }
    });
  }

  return (
    <div className="container">
      <h1> {`Hello ${contact.fName} ${contact.lName}`}</h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleChange} />
        <input name="lName" placeholder="Last Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
