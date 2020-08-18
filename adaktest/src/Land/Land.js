import React, { Component } from 'react'
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
            $(".inputfield").prop("readonly", true);
            $('.inputfield').val('Rock it with HTML5 WebSocket')
            document.getElementById('disconnect').disabled = 'disabled'
            document.getElementById('send_btn').disabled = 'disabled'
            $("#connect").click(function () {
                ws = new WebSocket(url)
                ws.onopen = function () {
                    var x = document.getElementById("snackbar-connect");
                    x.className = "show";
                    setTimeout(function () {
                        x.className = x.className.replace("show", "");
                    }, 3000);
                   
                    $(".pm").append("<div id='pm_base'>Connect</div>")
                    $(".pm").append("<br/>")
                    $(".inputfield").prop("readonly", false);
                  
                    document.getElementById('connect').disabled = 'disabled'
                    document.getElementById('disconnect').disabled = false
                    document.getElementById('send_btn').disabled = false
                    var element = document.getElementById("pmid");
                    element.scrollTop = element.scrollHeight;
                };
            })
            $("#disconnect").click(function () {
               
                ws.close()
                ws.onclose = function () {
                    var x = document.getElementById("snackbar-disconnect");
                    x.className = "show";
                    setTimeout(function () {
                        x.className = x.className.replace("show", "");
                    }, 3000);
                    
                  
                    $(".pm").append("<div id='pm_base' >Disconnect</div>")
                    $(".pm").append("<br/>")
                    $(".inputfield").prop("readonly", true);
                   
                    document.getElementById('disconnect').disabled = 'disabled'
                    document.getElementById('send_btn').disabled = 'disabled'
                    document.getElementById('connect').disabled = false
                    var element = document.getElementById("pmid");
                    element.scrollTop = element.scrollHeight;
                };

            })
            $("#send_btn").click(function () {
               var input= $(".inputfield").val()
                
                ws.send("SENT: "+input)
               
                $('.pm').append("<div id='pm_base'>Sent: "+input+"</div>")
                $(".pm").append("<br/>")
                var x = document.getElementById("snackbar-send");
                x.className = "show";
                setTimeout(function () {
                    x.className = x.className.replace("show", "");
                }, 3000);
                ws.onmessage = evt => {
                    var res = evt.data.split(':')
                   
                  
                    $('.pm').append( "<div id='pm_base' style='color: blue;'>Response: "+res[1] +"</div>")
                    $(".pm").append("<br/>")
                }
                var element = document.getElementById("pmid");
                    element.scrollTop = element.scrollHeight;
            })
            $(".btn_start").click(function () {
                var elmnt = document.getElementById("webs_page");
                elmnt.scrollIntoView({ behavior: 'smooth' });
            })
            $("#clear").click(function () {
                document.getElementById('Modal').style.display = 'block'
            })
            $(".modal").click(function () {
                $(".modal").fadeOut()
            })
            $(".no ").click(function () {
                $(".modal").fadeOut()

            })
            $(".yes").click(function () {
                $('.pm').html('')
                var x = document.getElementById("snackbar-clear");
                x.className = "show";
                setTimeout(function () {
                    x.className = x.className.replace("show", "");
                }, 3000);
                $(".modal").fadeOut()

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
                            <Button id='connect' variant="success" style={{ marginLeft: '20px'  }}>Connect</Button>
                            <Button id='disconnect' variant="danger" style={{ marginLeft: '20px' }} >Disconect</Button>
                        </div>
                        <div style={{ marginLeft: '40px' }}>
                            <input type='text' className='inputfield'  ></input>
                            <Button id='send_btn' variant="outline-info" style={{ marginLeft: '20px' }} >Send</Button>
                        </div>
                        <div style={{display:'flex' , flexDirection:'row'}} className='col-sm-12 col-lg-12 col-xl-12 col-md-12 justify-content-center' >
                            <div id='pmid' className="pm" readOnly> </div>
                            <Button id='clear' variant="outline-danger" style={{ height:'50px' , marginTop:'150px' , marginLeft:'10px'}} >Clear</Button>

                        </div>

                    </div>
                    <div id="snackbar-connect">Successfully Connect</div>
                    <div id="snackbar-disconnect">Successfully Disconnect</div>
                    <div id="snackbar-send">Successfully Send</div>
                    <div id="snackbar-clear">Successfully Clear</div>
                    <div id="Modal" class="modal">
                        <div class="modal-content">
                            <h3 className='txt'>Are you sure? </h3>

                            <div className='btns'>


                                <Button style={{ backgroundColor: "Red" }} size='large'
                                    className="no" variant="contained" color="secondary">
                                    <p>No&nbsp;</p>
                                </Button>

                                <Button style={{
                                    backgroundColor: 'gray',
                                    marginRight: "4px"

                                }} size='large' className="yes" variant="contained" color="secondary">
                                    <p>Yes</p>
                                </Button>

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Land