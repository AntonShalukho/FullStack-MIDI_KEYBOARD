import React, { FC, useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectorAccountIcon, selectorChangeName, selectorUserName } from '../../store'
import { AccountIntro } from './components/AccountIntro'
import { ChangeNameForm } from './components/ChangeNameForm'
import { CLOSE_SVG } from '../../assets/iconsUrls'

export const Account: FC = () => {
    const imgRef = useRef<HTMLImageElement>(null)
    const linkWrapRef = useRef<HTMLDivElement>(null)
    const accountIcon: string = useSelector(selectorAccountIcon)
    const isChangeName: boolean = useSelector(selectorChangeName)


    function openLinkWrap(): void {
        imgRef.current?.classList.toggle('imgMarkActive')
        linkWrapRef.current?.classList.toggle('linksWrapActive')
    }
    
  return (
    <div className="root5" id="root5">
      <div className="wrapper">
        <div className="usersIcon">
          <img 
              src={accountIcon} 
              alt="avatar" 
              className="avatar" 
          />
        </div>
        <div className="linksWrap linkWrapActive" ref={linkWrapRef} >
          <div className="openMark">
            <img  
              src={CLOSE_SVG} 
              alt="close image" 
              className="imgMark"
              ref={imgRef} 
              onClick={() => openLinkWrap()}
            />
          </div>
          {!isChangeName
            ? <AccountIntro/>
            : <ChangeNameForm/>
          }
        </div>
      </div>
    </div>
  )
}