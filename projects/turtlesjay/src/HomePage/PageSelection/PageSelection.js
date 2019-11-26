import React, {Component} from 'react'
import './PageSelectionCss.css'

class PageSelection extends Component{
    render(){
        return(
            <div id='pageSelectionMain'>
                <div id='storeLink' className='smallLink'>Store</div>
                <div id='galleryLink' >Gallery</div>
                <div id='projectsLink' className='smallLink'>Projects</div>
            </div>
        )
    }
}

export default PageSelection