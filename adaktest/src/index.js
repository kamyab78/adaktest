import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Land from './Land/Land'
const App = () => {
    return (
        <Router>
        <Switch>
                <Route exact path="/adaktest" component={Land}/>
        </Switch>           
        </Router>
 
 
    )
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
)