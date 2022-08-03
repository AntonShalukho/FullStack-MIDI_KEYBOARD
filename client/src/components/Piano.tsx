import React, { FC, useEffect, useRef, useState } from 'react'
import {whiteKeys, blackKeys} from '../appService/Keys'
import Account from './Account'
import Desk from './Desk'
import WhiteKey from './WhiteKey'
import BlackKey from './BlackKey'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthController from '../appService/AuthController'
import RefKeyInterface from '../interfaces/RefKeyInterface'
import { makeKeyDown, makeKeyUp } from '../functions/KeyboardPianoFunctions'
import { useSelector } from 'react-redux'
import { selectorChangeName } from '../store'
import AutoPlay from '../functions/AutoPlay'

const Piano: FC = () => {   
  const [keyRefs, setKeyRef] = useState<Array<RefKeyInterface | null>>([])
  const isChangeName: boolean = useSelector(selectorChangeName)
  const navigate = useNavigate()
  const autoPlay = new AutoPlay(keyRefs)

    useEffect(() => {
      if(!isChangeName) {
        addEvent()
        console.log('start', keyRefs)
      } else {
        removeEvent()
        console.log('end', keyRefs)
      }

      return () => {
        removeEvent()
        console.log('end', keyRefs)
      }
    }, [isChangeName])

    function addEvent() {
      document.addEventListener('keydown', keyDown)
      document.addEventListener('keyup', keyUp)
      document.addEventListener('mousedown', mouseDown)
      document.addEventListener('mouseup', mouseUp)
      document.addEventListener('touchstart', touchStart)
      document.addEventListener('touchend', touchEnd)
      console.log('addEvent')
    }

    function removeEvent() {
      document.removeEventListener('keydown', keyDown)
      document.removeEventListener('keyup', keyUp)
      document.removeEventListener('mousedown', mouseDown)
      document.removeEventListener('mouseup', mouseUp)
      document.removeEventListener('touchstart', touchStart)
      document.removeEventListener('touchend', touchEnd)
      console.log('removeEvent')
    }

    function keyDown(event: KeyboardEvent): void {
      keyRefs?.forEach(ref => {
        if (event.code === ref?.ref.current?.id) { 
          makeKeyDown(ref)
        }
      })
    }
    function keyUp(event: KeyboardEvent): void {
      keyRefs?.forEach(ref => {
        if (event.code === ref?.ref.current?.id) {
          makeKeyUp(ref)
        }
      })
    }
  
    function mouseDown(event: MouseEvent): void {
      keyRefs?.forEach(ref => {
        if (event.target === ref?.ref.current) {
          makeKeyDown(ref)
        }
      })
    }
    function mouseUp(event: MouseEvent): void {
      keyRefs?.forEach(ref => {
        if (event.target === ref?.ref.current) {
          makeKeyUp(ref)
        }
      })
    }
    function touchStart(event: TouchEvent): void {
      keyRefs?.forEach(ref => {
        if (event.target === ref?.ref.current) {
          makeKeyDown(ref)
        }
      })
    }
    function touchEnd(event: TouchEvent): void {
      keyRefs?.forEach(ref => {
        if (event.target === ref?.ref.current) {
          makeKeyUp(ref)
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
        let flag = true;
        preveState?.forEach(el => {
          if(el?.ref.current === ref.ref.current) {
            flag = false
          }
        })
        if(flag) {
          console.log('add keys')
          preveState?.push(ref)
        }
        return preveState
      })
    }

    function playing(song: string): void {
      autoPlay.playSong(song)
    }
    function stopPlaying(): void {
      autoPlay.clearApi()
    }
  
    return (
      <div  className='root4'>
        <div className="bodyShadow">
        </div>
        <Desk autoPlay={playing} stopPlaying={stopPlaying} />
        <div className="piano"  >
            {whiteKeys.map((k) => 
              <WhiteKey
                key={k.name} 
                id={k.name}
                audio={k.audio}
                keyClass={k.keyClass} 
                keyStyle={k.keyStyle} 
                keyName={k.keyName}
                name={k.key}
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
                name={k.key}
                callback={getWhiteKeyRef}
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