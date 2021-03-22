import React, { Fragment } from "react";
import "./Profile.css";
import PropTypes from "prop-types";

export default function Profile(props) {
    return (
        <Fragment>
            <div className="container">
                <h1>{props.fullName}</h1>
                <p>{props.bio}</p>
                <h3>{props.profession}</h3>
                {props.handleName(props.fullName)}
                {props.children}
            </div>
        </Fragment>
    );
}
Profile.defaultProps = {
    fullName: "Med Hedi Attia",
    bio: "Biography",
    profession:
        "My Profession is : Electromechanical engineering and Software developer",
    handleName: () => alert("Default name!"),
    children: "This is default image",
};
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func,
    children: PropTypes.array.isRequired,
};
