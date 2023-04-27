import React, { useState } from "react";
import "./App.css";

function App() {
  const [popup, setPopUp] = useState(false);
  const handleClickOpen = () => {
    console.log(":::::>", popup);
    setPopUp(!popup);
  };
  const handleClickClose = (value) => {
    console.log("======>>>", value);
    setPopUp(false);
  };
  return (
    <div className="App">
      <button onClick={handleClickOpen}> PopUp</button>
      <div>
        {popup ? (
          <div className="main">
            <div className="popup">
              <div className="popup-header">
                <h1>Pop Up</h1>
                <h1 onClick={handleClickClose}>x</h1>
              </div>
              <div>
                <p>This is react popup!!....</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
