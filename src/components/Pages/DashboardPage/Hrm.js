import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonBase from '@material-ui/core/ButtonBase';
import './box.css';
import { ChevronRight } from 'react-bootstrap-icons';
import humanResource from '../../../images/manager 1.svg'

export default function Hrm (props) {    
    return (
        <ButtonBase onClick= {() => {}}>
            <Card style={{width: "22rem", margin: "15px 5px 2px 5px", boxShadow: "1px 1px 1px 1px #dfdad4", borderRadius: "10px", backgroundColor: "#ffffff",  }}>
                <div style={{display: "flex"}}>
                    <div>
                        <img src={humanResource} alt="Manager" style={{height: "100px", position: "fixed", margin: "35px 0 0 10px" }}/>
                    </div>
                    <div>
                        <Card.Body style={{ width: '20rem', height: "10rem", padding: "60px 5px 15px 60px"}}>
                            <Card.Title>HRM</Card.Title>                        
                            <Card.Text>
                                <small>Company's HR Portal</small>
                            </Card.Text>                        
                        </Card.Body>
                        <ChevronRight className="bi bi-chevron-right" style={{margin: "0 0 10px 310px"}}></ChevronRight>
                    </div>
                </div>                        
            </Card>
        </ButtonBase>
    )
}

