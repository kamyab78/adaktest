import React, { Component } from 'react'
import Websocket from 'react-websocket';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import $ from 'jquery';
import './Land.css'
import Particles from 'react-particles-js';
var ws = ''

class Land extends Component {
    componentDidMount() {


        $(document).ready(function () {
            $("#connect").click(function () {
                ws = new WebSocket('wss://echo.websocket.org/')
                ws.onopen = function () {
                    console.log("connect")
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
                <div className='webs' id='webs_page'></div>
            </div>
        )
    }
}
export default Land