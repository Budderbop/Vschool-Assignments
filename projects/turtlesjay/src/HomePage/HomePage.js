import React, {Component} from 'react'
import NavBar from './NavBar/NavBar'
import PageSelection from './PageSelection/PageSelection'

class HomePage extends Component {
    
    render(){
        return(
            <div>
                <NavBar />
                <PageSelection />
            </div>
        )
    }
}

export default HomePage