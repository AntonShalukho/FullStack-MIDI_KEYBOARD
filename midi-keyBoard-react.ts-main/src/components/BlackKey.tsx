import React, { FC, useEffect, useRef } from 'react';
import { changeBlackKeyUp, changeBlackKeyDown } from '../functions/KeyboardPianoFunctions';


type Props = {
    id: string,
    audio: HTMLAudioElement,
    keyClass: string,
    keyStyle: string,
    keyName: string 
}

const BlackKey: FC<Props> = ({id: name, audio: audio, keyClass: keyClass, keyStyle: keyStyle, keyName: keyName}) => {

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    document.addEventListener('keydown', keyDown)
    document.addEventListener('keyup', keyUp)
    document.addEventListener('mousedown', mouseDown)
    document.addEventListener('mouseup', mouseUp)
    document.addEventListener('touchstart', touchStart)
    document.addEventListener('touchend', touchEnd)

    return () => {
      document.removeEventListener('keydown', keyDown)
      document.removeEventListener('keyup', keyUp)
      document.removeEventListener('mousedown', mouseDown)
      document.removeEventListener('mouseup', mouseUp)
      document.removeEventListener('touchstart', touchStart)
    document.removeEventListener('touchend', touchEnd)
    }
  })

  function keyDown(event: KeyboardEvent): void {
    if (event.code === ref.current?.id) {
      changeBlackKeyDown(ref, audio)
    }
  }
  function keyUp(event: KeyboardEvent): void {
    if (event.code === ref.current?.id) {
      changeBlackKeyUp(ref, audio)
    }
  }

  function mouseDown(event: MouseEvent): void {
    if (event.target === ref.current) {
      changeBlackKeyDown(ref, audio)
    }
  }
  function mouseUp(event: MouseEvent): void {
    if (event.target === ref.current) {
      changeBlackKeyUp(ref, audio)
    }
  }
  function touchStart(event: TouchEvent): void {
    if (event.target === ref.current) {
      changeBlackKeyDown(ref, audio)
    }
  }
  function touchEnd(event: TouchEvent): void {
    if (event.target === ref.current) {
      changeBlackKeyUp(ref, audio)
    }
  }

    return (
      <div ref={ref} id={name} className={keyClass} style={{left: keyStyle}}>{keyName}</div>
    )
  
} 

export default BlackKey




  


