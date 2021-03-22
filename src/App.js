import "./App.css";
import React, { Fragment } from "react";
import Profile from "./Profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import Med from "./Med.jpg";

function handleName(fullName) {
    alert(`My name is: ${fullName}.`);
}
function App() {
    return (
        <Fragment>
            <Profile
                /*fullName='Med hedi Attia'*/ bio="Biography"
                profession="Electromechanical engineering and Software developer"
                handleName={handleName}
            >
                {" "}
                {/* fullName removed to check for default props */}
                <img src={Med} alt="Image" className="imgCont" />{" "}
                {/* Default prop children */}
            </Profile>
        </Fragment>
    );
}

export default App;
