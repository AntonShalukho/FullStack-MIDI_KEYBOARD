import React, { FC, ReactComponentElement, ReactElement, useCallback, useEffect, useState } from 'react'
import { Clock } from './components/Clock'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { selectorRegistrationMessage } from '../store'
import { Intro } from './components/Intro'
import { IntroConfig } from './config/IntroConfig';
import styles from "./IntroPage.module.css"

// export const Message: FC = () => {
//     const isRegistrationMessage = useSelector(selectorRegistrationMessage)

//     return (
//         <div 
//         className='message'
//         style={
//             isRegistrationMessage
//             ?   {opacity: '1'}
//             :   {opacity: '0'}
//         }
//         >
//             {isRegistrationMessage
//                         ?   'You have been successfully registered'
//                         :   'Some thing is wrong'
//                     }
//         </div>
//     )    
// }
    
export const IntroPage = () => {
    const location = useLocation()
    // const isRegistrationMessage = useSelector(selectorRegistrationMessage)
    const [messageFlag, setMessageFlag] = useState<boolean>(false)

    // useEffect((): void => {
    //     if (isRegistrationMessage) {
    //         setMessageFlag(true)
    //         setTimeout((): void => {setMessageFlag(false)}, 2200 )
    //     }
    //     console.log('isRegistrationMessage: ', isRegistrationMessage)
    //     console.log('messageFlag: ', messageFlag)
    // }, [isRegistrationMessage])


    return (
        <div className={styles.wrapper}>
            <Clock/>
            {/* <IntroConfig/> */}
            <Intro/>
            {/* <Outlet/> */}
        </div>
    )
}