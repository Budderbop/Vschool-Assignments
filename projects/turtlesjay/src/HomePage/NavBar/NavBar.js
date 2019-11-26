import React, {Component} from 'react'
import './NavBarCss.css'

// LATER MAKE IT EASIER TO CLICK LOG IN AND PROFILE AND CART

class NavBar extends Component{
    render(){
        return(
            <div className='navBar'>
                <div className='topLine'></div>
                <div className='navBarMain'>
                    <div id='socialMedia'>
                        <div className='mediaIcons' id='facebookIcon'>F</div>
                        <div className='mediaIcons' id='instagramIcon'>I</div>
                        <div className='mediaIcons' id='googleIcon'>G</div>
                    </div>
                    <span id='homeTitle'>TurtlesJay</span>
                    <div id='profileSection'>
                        <div id='profileDivider'>
                            <div className='profileButtons' id='loginButton'>LOG IN</div>
                        </div>
                        <div id='profileDivider2'>
                            <div className='profileButtons' id='profileButton'>Profile</div>
                            <div className='profileButtons' id='cartButton'>Cart</div>
                        </div>
                    </div>
                </div>
                <div id='navSlogan'>Quote Of The Day</div>
                <div id='navSlogan'>Two Sandwiches Are Certainly Better Than No Sandwiches. -- Buddha</div>
            </div>
        )
    }
}

export default NavBar