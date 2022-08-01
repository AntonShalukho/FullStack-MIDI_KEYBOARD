import React, { FC } from 'react'
import {whiteKeys, blackKeys} from '../appService/Keys'
// import Button from '../UI/Button'
import Account from './Account'
import Desk from './Desk'
import WhiteKey from './WhiteKey'
import BlackKey from './BlackKey'
// import IconsDesk from './IconsDesk'
// import { useSelector } from 'react-redux'
// import { selectorChangeIcon } from '../store'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthController from '../appService/AuthController'



const Piano: FC = () => {   
    // const isIcon = useSelector(selectorChangeIcon)
    const navigate = useNavigate()

    async function logout() {
      const controller = new AuthController();
      const response = await controller.logout();
      navigate('/')
    }
  
    return (
      <div  className='root4'>
        <div className="bodyShadow">
        </div>
        <Desk/>
        <div className="piano"  >
            {whiteKeys.map((k) => 
              <WhiteKey
                key={k.name} 
                id={k.name}
                audio={k.audio}
                keyClass={k.keyClass} 
                keyStyle={k.keyStyle} 
                keyName={k.keyName}
              />
            )}
            {blackKeys.map((k) => 
              <BlackKey 
                key={k.name} 
                id={k.name}
                audio={k.audio}
                keyClass={k.keyClass} 
                keyStyle={k.keyStyle} 
                keyName={k.keyName}
              />
            )}
        </div>
        <div className='buttonExit' onClick={() => logout()}>Exit</div> 
        <Account/>
        <Outlet/>
      </div>
    )
}

export default Piano