import React, { useEffect, useRef } from 'react'
import Button from '../UI/Button'
import Entrance from './Entrance'
import Clock from './Clock'
import { useDispatch, useSelector } from 'react-redux'
import { toggleEntranceState } from '../store/slices/EntranceSlice'
import { toggleRegistrationState } from '../store/slices/RegistrationSlice'
import Registration from './Registration'
import { selectorEnrtance } from '../store'
import { selectorRegistration } from '../store'

const FirstPage = () => {
    const isEntrance = useSelector(selectorEnrtance)
    const isRegistration = useSelector(selectorRegistration)
    const backShedow = useRef<HTMLDivElement>(null!)
    const dispatch = useDispatch()

    useEffect(() => {
        isBackShedow()
    },[isEntrance, isRegistration])


    function isBackShedow() {
        if(isEntrance || isRegistration) {
            backShedow.current.style.zIndex = '2'
        } else {
            backShedow.current.style.zIndex = '0'
        }
    }
    function getEntrance() {
        if (isEntrance) {
            return <Entrance/>
        }
    }
    function getRegistration() {
        if (isRegistration) {
            return <Registration/>
        }
    }
    
    return (
        <div className="root1">
            <Clock/>
            <div className="picture">
                <div className="message">'You have been successfully registered'</div>
                <div className="pictureContent pictureFirstContent1">Would you like to learn how to play the piano?</div>
                <div className="pictureContent pictureFirstContent2">You can achieve your dreams with us!</div>
                <div className="pictureContent pictureFirstContent3">
                    <div className="buttonWrapper">
                        <Button buttClass='button buttonLogOn' text='Log on' toggle={() => dispatch(toggleEntranceState())}/>
                        <Button buttClass='button buttonLogIn' text='Log in' toggle={() => dispatch(toggleRegistrationState())}/>
                    </div>
                </div>
                <div className="pictureShadow" ref={backShedow}></div>
            </div>
            {getEntrance()}
            {getRegistration()}
        </div>
    )
}

export default FirstPage