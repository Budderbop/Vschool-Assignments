import React, {Component} from 'react'
import './PageSelectionCss.css'

class PageSelection extends Component{
    render(){
        return(
            <div id='pageSelectionMain'>
                <div id='storeLink' className='smallLink'><p className='top'>Store</p></div>
                <div id='galleryLink'><p className='top'>Gallery</p></div>
                <div id='projectsLink' className='smallLink'><p className='top'>Projects</p></div>
            </div>
        )
    }
}

export default PageSelection