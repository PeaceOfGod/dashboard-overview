import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonBase from '@material-ui/core/ButtonBase';
import './box.css';
import { ChevronRight } from 'react-bootstrap-icons';
import wheel from '../../../images/Group.svg'

export default function Settings () {    
    return (
        <ButtonBase onClick= {() => {}}>
            <Card style={{width: "22rem", margin: "15px 5px 2px 5px", boxShadow: "1px 1px 1px 1px #dfdad4", borderRadius: "10px", backgroundColor: "#ffffff",  }}>
                <div style={{display: "flex"}}>
                    <div>
                        <img src={wheel} alt="Manager" style={{height: "100px", position: "fixed", margin: "35px 0 0 10px" }}/>
                    </div>
                    <div>
                        <Card.Body style={{ width: '20rem', height: "10rem", padding: "60px 5px 15px 60px"}}>
                            <Card.Title>Settings</Card.Title>                        
                            <Card.Text>
                                <div style={{display: "flex", flexDirection: "column"}}>
                                    <small>Make all necessary</small>
                                    <small>settings</small>
                                </div>
                            </Card.Text>                 
                        </Card.Body>
                        <ChevronRight className="bi bi-chevron-right" style={{margin: "0 0 10px 310px"}}></ChevronRight>
                    </div>
                </div>                        
            </Card>
        </ButtonBase>
    )
}

