import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import DashboardData from "./dashboard.json";
import "./dashboard.css";

const Dashboard = () => {
    const RenderTimeSheet = () => {
        return (
            <div>
                {DashboardData.map((item, index) => {
                    return (
                        <tr key={index}>
                            {Object.keys(item).map((tdKey, i) => {
                                return <td key={i}>{item[tdKey]}</td>;
                            })}
                        </tr>
                    );
                })}
            </div>
        );
    };

    const header = [
        {
            id: "1",
            value: "Project",
        },
        {
            id: "2",
            value: "Data",
        },
        {
            id: "3",
            value: "StartTime",
        },
        {
            id: "4",
            value: "StopTime",
        },
        {
            id: "5",
            value: "Duration",
        },
    ];
    return (
        <div>
            <ReactBootstrap.Table className='table table-striped'>
                <thead className="d-flex">
                    <tr>
                        {header.map((item, id) => {
                            return (
                                <th scope='col' key={id}>
                                    {item.value}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    <RenderTimeSheet />
                </tbody>
            </ReactBootstrap.Table>
        </div>
    );
};

export default Dashboard;
