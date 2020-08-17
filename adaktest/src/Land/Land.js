import React, { Component } from 'react'
import Websocket from 'react-websocket';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import $ from 'jquery';
import './Land.css'
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
          
        })
    }
    render() {
        return (
            <div className='main row'>
                <div>
                  <Button ariant="primary" id='connect'></Button>   
                </div>
               
            </div>
        )
    }
}
export default Land