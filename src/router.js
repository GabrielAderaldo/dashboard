import React, { Component } from "react"
import { isAuth } from "./auth/auth"

import { BrowserRouter,Route, Switch,Redirect} from "react-router-dom"
import Login from './components/login'
import Listagem from "./components/listagem"

const PrivateRoute = ({ component:Component, ...rest}) => (
    <Route {...rest} render={props => ( 
        
        isAuth() ? (
            <Component {...props}/>
        ):(
            <Redirect to={{pathname: '/login',state:{ from: props.location} }}/>
        )
        
        )} />
)

const Router = () =>(
    
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Hello world</h1>}/>
            <Route exact path="/login" component={Login}/>
            <PrivateRoute path="/App" component={Listagem}/>
        </Switch>
    </BrowserRouter>
)


export default Router