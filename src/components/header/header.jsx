import React from 'react';
import "../../styles/header.css"
import { Button } from 'react-bootstrap';
import withAlert from "../../HOC/withAlert"

const Header = ({onAlert}) => {

    return (
        <div className="headerChild">
            <Button variant="secondary" className="designBtn">Design Task</Button>
            <Button variant="secondary" className="projectsBtn" onClick={() => onAlert("please try again")}>+ Add Projects</Button>
        </div>
    );
}

export default withAlert(Header);