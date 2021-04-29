import React from 'react';
import './dashboard.css'
import Employee from './Employee';
import Overview from './Overview';
import Payroll from './Payroll';
import Report from './Report';
import Settings from './Settings';
import Hrm from './Hrm';
import dollars from '../../../images/Group 102.png'
//import naira from '../images/Group 103.png'

export default function Dashboard (){
    return (
        <body className="body">
            <div className="page" style={{margin: "6% 0 0 15%"}}>
                <div style={{margin: "0 0 5% 0"}}>
                    <div>
                        <p style={{fontFamily: "sans-serif", paddingTop: "15px"}}><b>DASHBOARD</b></p>
                    </div>
                    <div>                        
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <small className="welcome-tag" style={{fontFamily: "Courier New", fontSize: "45px"}}><b>Welcome,</b> Adunoye! </small>
                            <small style={{marginBottom: "10px"}}>israelthrone@gmail.com</small>
                            <small>Last Login: <b>Thursday, 25 Mar, 2021</b></small>
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", margin: "-3% 0 0 0"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <img src={dollars} alt="Human-with-Dollar" style={{marginTop: "5%", height: "500px", width: "480px"}}/>
                    </div>
                    <div style={{margin: "0 10px 0 10%"}}>
                        <div style={{ display: "flex"}}>
                            <Employee/>
                            <Overview/>
                        </div> 
                        <div style={{ display: "flex"}}>
                            <Payroll/>
                            <Report/>
                        </div>
                        <div style={{ display: "flex"}}>
                            <Settings/>
                            <Hrm/>
                        </div>              
                    </div>
                </div>
            </div>
        </body>
    )
}