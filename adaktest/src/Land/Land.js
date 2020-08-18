import React, { Component } from 'react'
import Websocket from 'react-websocket';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import $ from 'jquery';
import './Land.css'
import Particles from 'react-particles-js';
var ws = ''
const url = 'wss://echo.websocket.org/'
class Land extends Component {
    componentDidMount() {

      
        $(document).ready(function () {
            $("#connect").click(function () {
                ws = new WebSocket(url)
                ws.onopen = function () {
                    var x = document.getElementById("snackbar-connect");
                    x.className = "show";
                    setTimeout(function () {
                        x.className = x.className.replace("show", "");
                    }, 3000);
                    $(".pm").append("Connect")
                };
            })
            $(".btn_start").click(function () {
                var elmnt = document.getElementById("webs_page");
                elmnt.scrollIntoView({ behavior: 'smooth' });
            })
        })
    }
    render() {
        return (
            <div >
                <div className='main'>
                    <div className='main_black'>
                        <Particles height='100vh'

                            params={{

                                "particles": {
                                    "number": {
                                        "value": 150
                                    },
                                    "size": {
                                        "value": 5
                                    },
                                    "color": {
                                        "value": "#ff0000"
                                    },
                                },
                                "interactivity": {
                                    "events": {
                                        "onHover": {
                                            "enable": true,
                                            "mode": "repulse"
                                        }
                                    }
                                }
                            }}
                        >

                        </Particles>
                        <div className="txt-container " >

                            <div className="txt-content col-sm-12 col-lg-8 col-xl-8 col-md-8" style={{ display: "block" }}>
                                Welcome To Adak Test Project
           </div>
                            <Button variant="danger" className="btn_start">Get Start</Button>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-lg-12 col-xl-12 col-md-12 webs' id='webs_page'>
                    <h1 className='title'>WebSocket Page</h1>
                    
                    <div className='row connection'>
                   
                    <div >
                    <Button id='connect' variant="success" style={{marginLeft:'20px'}}>Connect</Button>
                   <Button variant="danger" style={{marginLeft:'20px'}}>Disconect</Button>
                   </div>
                   <div style={{marginLeft:'40px'}}>
                   <input className='inputfield'></input>
                   <Button variant="outline-info" style={{marginLeft:'20px'}}>Send</Button>
                   </div>
                   <div >
                   <textarea id='pmid' className="pm">


</textarea>
                   </div>

                    </div>
                    <div id="snackbar-connect">Successfully Connect</div>
                    <div id="snackbar-disconnect">Successfully Connect</div>
                </div>
            </div>
        )
    }
}
export default Land