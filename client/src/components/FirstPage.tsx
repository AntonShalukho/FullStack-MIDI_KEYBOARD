import React from 'react'
import Clock from './Clock'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectorRegistrationMessage } from '../store'

const FirstPage = () => {
    const location = useLocation()
    const isRegistrationMessage = useSelector(selectorRegistrationMessage)
    
    return (
        <div className="root1">
            <Clock/>
            <div className="picture">
                <div 
                    className="message"
                    style={
                        isRegistrationMessage
                        ?   {opacity: '1'}
                        :   {opacity: '0'}
                    }
                >
                    {isRegistrationMessage
                        ?   'You have been successfully registered'
                        :   'Some thing is wrong'
                    }
                    
                </div>
                <div className="pictureContent pictureFirstContent1">Would you like to learn how to play the piano?</div>
                <div className="pictureContent pictureFirstContent2">You can achieve your dreams with us!</div>
                <div className="pictureContent pictureFirstContent3">
                    <div className="buttonWrapper">
                        <Link to={'entrance'} className='button buttonLogOn' >Log on</Link>
                        <Link to={'registration'} className='button buttonLogOn' >Log in</Link>
                    </div>
                </div>
                <div className="pictureShadow" style={
                    location.pathname === '/registration' || location.pathname === '/entrance' || isRegistrationMessage
                        ? {zIndex: '2'} 
                        : {zIndex: '0'}
                    } 
                ></div>
            </div>
            <Outlet/>
        </div>
    )
}

export default FirstPage