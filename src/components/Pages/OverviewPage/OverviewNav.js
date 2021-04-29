import React from 'react';
import Employee from '../DashboardPage/Employee';
import Hrm from '../DashboardPage/Hrm';
import Payroll from '../DashboardPage/Payroll';
import Report from '../DashboardPage/Report';
import { ArrowLeft } from 'react-bootstrap-icons';
import '../DashboardPage/dashboard.css';

export default function OverviewNav () {
    return (
        <body className="body" style={{padding: "6% 0 50px 15%"}}>
            <b>
                <div style={{display: "flex", padding: "40px 0 0 8px"}}>
                    <ArrowLeft className="bi bi-arrow-left" style={{ marginRight: "20px", marginTop: "5px"}}></ArrowLeft>
                    <p>OVERVIEW</p>
                </div>
            </b>
            <div style={{display: "flex"}}>
                <Employee/>
                <Hrm/>
                <Payroll/>
                <Report/>
            </div>
        </body>
    )
} 