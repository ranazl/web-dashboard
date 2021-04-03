import React from 'react';
import { Button } from 'react-bootstrap';
import './mainHeader.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Route, useParams } from 'react-router-dom';

const MainHeader = () => {
    function Title() {
        const { itemName } = useParams()

        return <h6>{itemName}</h6>
    }
    return (
        <div className="mainHeaderParent">
            <Route path='/:itemName'>
                <span>
                    <Title />
                </span>
            </Route>
            <span>
                <Button className="mainHeaderChild">VIEW FULL SHEET</Button>
                <FontAwesomeIcon icon={faEllipsisH} />
            </span>
        </div>
    );
}

export default MainHeader;