import React from 'react';
import "../../styles/header.css"
import { Button } from 'react-bootstrap';
import withAlert from "../../HOC/withAlert"

const Header = ({ alertMessage }) => {

    // const addAlert = () => {
    //     alert("add Project")
    // }

    return (
        <div className="headerChild">
            <Button variant="secondary" className="designBtn">Design Task</Button>
            <Button variant="secondary" className="projectsBtn" onClick={() => alertMessage()}>+ Add Projects</Button>
        </div>
    );
}

export default withAlert(Header);