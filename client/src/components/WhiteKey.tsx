import React, { FC, useEffect, useRef } from 'react';
import RefKeyInterface from '../interfaces/RefKeyInterface';
// import { changeKeyDown, changeKeyUp } from '../functions/KeyboardPianoFunctions';

type Props = {
    id: string,
    audio: HTMLAudioElement | null,
    keyClass: string,
    keyStyle: string,
    keyName: string ,
    callback: (callbackAgrum: RefKeyInterface) => void
}


const Key: FC<Props> = ({id: name, audio: audio, keyClass: keyClass, keyStyle: keyStyle, keyName: keyName, callback}) => {

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    callback({ref, audio})
  })

  // useEffect(() => {
  //   document.addEventListener('keydown', keyDown)
  //   document.addEventListener('keyup', keyUp)
  //   document.addEventListener('mousedown', mouseDown)
  //   document.addEventListener('mouseup', mouseUp)
  //   document.addEventListener('touchstart', touchStart)
  //   document.addEventListener('touchend', touchEnd)
  //   console.log('start', ref.current)

  //   return () => {
  //     document.removeEventListener('keydown', keyDown)
  //     document.removeEventListener('keyup', keyUp)
  //     document.removeEventListener('mousedown', mouseDown)
  //     document.removeEventListener('mouseup', mouseUp)
  //     document.removeEventListener('touchstart', touchStart)
  //   document.removeEventListener('touchend', touchEnd)
  //   console.log('end', ref.current)
  //   }
  // })

  // function keyDown(event: KeyboardEvent): void {
  //   if (event.code === ref.current?.id) {
  //     changeKeyDown(ref, audio)
  //   }
  // }
  // function keyUp(event: KeyboardEvent): void {
  //   if (event.code === ref.current?.id) {
  //     changeKeyUp(ref, audio)
  //   }
  // }

  // function mouseDown(event: MouseEvent): void {
  //   if (event.target === ref.current) {
  //     changeKeyDown(ref, audio)
  //   }
  // }
  // function mouseUp(event: MouseEvent): void {
  //   if (event.target === ref.current) {
  //     changeKeyUp(ref, audio)
  //   }
  // }
  // function touchStart(event: TouchEvent): void {
  //   if (event.target === ref.current) {
  //     changeKeyDown(ref, audio)
  //   }
  // }
  // function touchEnd(event: TouchEvent): void {
  //   if (event.target === ref.current) {
  //     changeKeyUp(ref, audio)
  //   }
  // }

    return (
      <div ref={ref} id={name} className={keyClass} style={{left: keyStyle}}>{keyName}</div>
    )
  
} 

export default Key




  


