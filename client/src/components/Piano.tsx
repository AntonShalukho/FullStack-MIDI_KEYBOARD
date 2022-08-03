import React, { FC, useEffect, useState } from 'react'
import {whiteKeys, blackKeys} from '../appService/Keys'
import Account from './Account'
import Desk from './Desk'
import WhiteKey from './WhiteKey'
import BlackKey from './BlackKey'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthController from '../appService/AuthController'
import ChangeKeysStyle from '../functions/KeyboardPianoFunctions';
import RefKeyInterface from '../interfaces/RefKeyInterface'

const Piano: FC = () => {   
    const navigate = useNavigate()
    const [keyRefs, setKeyRef] = useState<Array<RefKeyInterface> | null>([])

    useEffect(() => {
      document.addEventListener('keydown', keyDown)
      document.addEventListener('keyup', keyUp)
      document.addEventListener('mousedown', mouseDown)
      document.addEventListener('mouseup', mouseUp)
      document.addEventListener('touchstart', touchStart)
      document.addEventListener('touchend', touchEnd)
      console.log('start', keyRefs)
  
      return () => {
        document.removeEventListener('keydown', keyDown)
        document.removeEventListener('keyup', keyUp)
        document.removeEventListener('mousedown', mouseDown)
        document.removeEventListener('mouseup', mouseUp)
        document.removeEventListener('touchstart', touchStart)
      document.removeEventListener('touchend', touchEnd)
      console.log('end', keyRefs)
      }
    })

    function keyDown(event: KeyboardEvent): void {
      keyRefs?.forEach(ref => {
        if (event.code === ref.ref.current?.id) {
          ChangeKeysStyle.changeKeyDown(ref)
          console.log('keyDown', ref.ref.current)
        }
      })
    }
    function keyUp(event: KeyboardEvent): void {
      keyRefs?.forEach(ref => {
        if (event.code === ref.ref.current?.id) {
          ChangeKeysStyle.changeKeyUp(ref)
          console.log('keyUp', ref.ref.current)
        }
      })
    }
  
    function mouseDown(event: MouseEvent): void {
      keyRefs?.forEach(ref => {
        if (event.target === ref.ref.current) {
          ChangeKeysStyle.changeKeyDown(ref)
        }
      })
    }
    function mouseUp(event: MouseEvent): void {
      keyRefs?.forEach(ref => {
        if (event.target === ref.ref.current) {
          ChangeKeysStyle.changeKeyUp(ref)
        }
      })
    }
    function touchStart(event: TouchEvent): void {
      keyRefs?.forEach(ref => {
        if (event.target === ref.ref.current) {
          ChangeKeysStyle.changeKeyUp(ref)
        }
      })
    }
    function touchEnd(event: TouchEvent): void {
      keyRefs?.forEach(ref => {
        if (event.target === ref.ref.current) {
          ChangeKeysStyle.changeKeyUp(ref)
        }
      })
    }

    async function logout() {
      const controller = new AuthController();
      const response = await controller.logout();
      navigate('/')
    }

    function getWhiteKeyRef(ref: RefKeyInterface) {
      setKeyRef((preveState) => {
        preveState?.push(ref)
        console.log('add keys')
        return preveState
      })
      // keyRef.current.push(ref)
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
                callback={getWhiteKeyRef}
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