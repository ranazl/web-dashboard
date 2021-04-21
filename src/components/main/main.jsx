import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './../navbar/navComponent/dashboard1';
import Activity from './../navbar/navComponent/activity';
import Timesheet from './../navbar/navComponent/timeSheet';
import ToDo from './../navbar/navComponent/toDo';
import Invoices from './../navbar/navComponent/invoices';
import Projects from './../navbar/navComponent/projects';
import Help from './../navbar/navComponent/help';
import DownloadApp from './../navbar/navComponent/downloadApp';
import '../../styles/main.css';
import MainHeader from './mainHeader';

const Main = () => {
    const myRoute = [
        {
            path: 'dashboard1',
            component: <Dashboard />,
        },
        {
            path: 'activity',
            component: <Activity />,
        },
        {
            path: 'timesheet',
            component: <Timesheet />,
        },
        {
            path: 'toDo',
            component: <ToDo />,
        },
        {
            path: 'invoices',
            component: <Invoices />,
        },
        {
            path: 'projects',
            component: <Projects />,
        },
        {
            path: 'help',
            component: <Help />,
        },
        {
            path: 'downloadApp',
            component: <DownloadApp />,
        },
    ];

    return (
        <div className='myMain'>
            <MainHeader />
            <Switch>
                {myRoute.map((item, id) => {
                    const TagName = item.pageName;
                    return (
                        <Route key={id} path={item.path}>
                            {item.component}
                        </Route>
                    );
                })}
            </Switch>
        </div>
    );
};

export default Main;