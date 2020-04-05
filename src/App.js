import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import { adminRoutes } from './routes'

export default class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {adminRoutes.map((item)=>{
                        return (
                            <Route key={item.pathName} path={item.pathName} component={item.compoment} exact={item.exact}></Route>
                        )
                    })}
                    <Redirect to={adminRoutes[0].pathName} from="/admin" exact/>
                    <Redirect to='/404'/>
                    
                </Switch>
            </div>
        )
    }
}
