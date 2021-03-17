import React from 'react';
import { Switch, Route } from "react-router-dom";
import Dashboard from './../navbar/navComponent/dashboard';
import Activity from './../navbar/navComponent/activity';
import Timesheet from './../navbar/navComponent/timeSheet';
import ToDo from './../navbar/navComponent/toDo';
import Invoices from './../navbar/navComponent/invoices';
import Projects from './../navbar/navComponent/projects';
import Help from './../navbar/navComponent/help';
import DownloadApp from './../navbar/navComponent/downloadApp';
import "../../styles/main.css"

const Main = () => {
    return (
        <div className="main">
            <Switch>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/activity">
                    <Activity />
                </Route>
                <Route path="/timesheet">
                    <Timesheet />
                </Route>
                <Route path="/toDo">
                    <ToDo />
                </Route>
                <Route path="/invoices">
                    <Invoices />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/help">
                    <Help />
                </Route>
                <Route path="/downloadApp">
                    <DownloadApp />
                </Route>
            </Switch>
        </div>
    )
}

export default Main;