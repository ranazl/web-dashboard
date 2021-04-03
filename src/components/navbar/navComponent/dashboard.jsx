import React from 'react';
import * as ReactBootstrap from 'react-bootstrap'
import './dashboard.css'

const Dashboard = () => {

    const timeSheet = [
        { Project: "Loading page Design", Data: "May21,2019", StartTime: "1:10pm", StopTime: "9:20pm", Duration: "8:10:37" },
        { Project: "Loading page Design", Data: "May21,2019", StartTime: "1:10pm", StopTime: "9:20pm", Duration: "8:10:37" },
        { Project: "Loading page Design", Data: "May21,2019", StartTime: "1:10pm", StopTime: "9:20pm", Duration: "8:10:37" },
        { Project: "Loading page Design", Data: "May21,2019", StartTime: "1:10pm", StopTime: "9:20pm", Duration: "8:10:37" },
        { Project: "Loading page Design", Data: "May21,2019", StartTime: "1:10pm", StopTime: "9:20pm", Duration: "8:10:37" }
    ];

    const renderTimeSheet = (obj, index) => {
        return (
            <tr key={index}>
                <td>{obj.Project}</td>
                <td>{obj.Data}</td>
                <td>{obj.StartTime}</td>
                <td>{obj.StopTime}</td>
                <td>{obj.Duration}</td>
            </tr>
        )
    }

    return (
        <div className="tableDiv">
            <ReactBootstrap.Table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Project</th>
                        <th scope="col">Data</th>
                        <th scope="col">StartTime</th>
                        <th scope="col">StopTime</th>
                        <th scope="col">Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {timeSheet.map(renderTimeSheet)}
                </tbody>
            </ReactBootstrap.Table>
        </div>
    )
}

export default Dashboard;