import React from 'react'
import { Route, Switch } from 'react-router'
import About from './components/About'
import Projects from './components/Projects'

function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <About/>
                </Route>
                <Route path="/projects" exact>
                    <Projects/>
                </Route>
                <Route>
                    <h1>no page</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
