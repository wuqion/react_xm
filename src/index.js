import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import { mainRoutes } from './routes'

import App from './App'

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/admin" render={(routerProps)=>{
                return (
                    <App {...routerProps}></App>
                )
            }} />
            {mainRoutes.map((item)=>{
                return (
                    <Route key={item.pathName} path={item.pathName} component={item.compoment} />
                )
            })}
            <Redirect to="/admin" from="/" exact/>
            <Redirect to="/404"  />
        </Switch>
    </Router>
    ,
    document.getElementById('root')
)
