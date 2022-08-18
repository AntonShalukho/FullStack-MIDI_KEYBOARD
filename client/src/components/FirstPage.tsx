import React, { FC, ReactComponentElement, ReactElement, useCallback, useEffect, useState } from 'react'
import Clock from './Clock'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectorRegistrationMessage } from '../store'

const Message: FC = () => {
    const isRegistrationMessage = useSelector(selectorRegistrationMessage)

    return (
        <div 
        className='message'
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
    )    
}
    
const FirstPage: FC = () => {
    const location = useLocation()
    const isRegistrationMessage = useSelector(selectorRegistrationMessage)
    const [messageFlag, setMessageFlag] = useState<boolean>(false)

    useEffect((): void => {
        if (isRegistrationMessage) {
            setMessageFlag(true)
            setTimeout((): void => {setMessageFlag(false)}, 2200 )
        }
        console.log('isRegistrationMessage: ', isRegistrationMessage)
        console.log('messageFlag: ', messageFlag)
    }, [isRegistrationMessage])


    return (
        <div className="root1">
            <Clock/>
            <div className="picture">
                {messageFlag && <Message/>}
                {/* {messageFlag === true 
                    ? <Message/>
                    : ''
                } */}
                {/* {getComponent()} */}
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