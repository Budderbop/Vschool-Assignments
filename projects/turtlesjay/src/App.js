import React, {Component} from 'react'
import Gallery from './Gallery/Gallery'
import Store from './Store/Store'
import Projects from './Projects/Projects'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage/HomePage'

class App extends Component{
    render(){
        return (
                    <div>
                        <HomePage />
                        <Switch>
                            <Route path="/Gallery" component={Gallery} />
                            <Route path="/Store" component={Store} />
                            <Route path="/Projects" component={Projects} />
                        </Switch>
                    </div>
        )
    }

}

export default App

/* <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/Gallery'>Gallery</Link>
                            </li>
                            <li>
                                <Link to='/Store'>Store</Link>
                            </li>
                            <li>
                                <Link to='/Projects'>Projects</Link>
                            </li>
                        </ul> */
                        /* put in a navbar/ whatever */