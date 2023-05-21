import React, { useRef, useState } from 'react'
import { Message } from '../../../../components/Message'
import { Link, useParams } from 'react-router-dom';
import styles from "./Intro.module.css"
import classNames from 'classnames';
import { LOG_IN_PATH, REGISTRATION_PATH } from '../../consts';
import { IntroContent } from './IntroContent';
import { IntroConfig } from '../../config/IntroConfig';

export const Intro = () => {
  const [isSuccessSignUp, setIsSuccessSignUp] = useState<boolean>(false)
  const [isMessage, setIsMessage] = useState<boolean>(false)
  // const { step } = useParams()

  return (
    <div className={styles.wrapper}>
      {/* {isMessage && ( */}
        {/* <Message timer={2500}  >
          {isSuccessSignUp 
            ? 'You have been successfully registered'
            : 'Some thing is wrong'
          }
        </Message> */}
      {/* )} */}
      {/* <IntroContent/> */}
      <IntroConfig/>
      {/* <div className="pictureShadow" style={
          location.pathname === '/registration' || location.pathname === '/entrance' || isRegistrationMessage
              ? {zIndex: '2'} 
              : {zIndex: '0'}
          } 
      ></div> */}
    </div>
  )
}
