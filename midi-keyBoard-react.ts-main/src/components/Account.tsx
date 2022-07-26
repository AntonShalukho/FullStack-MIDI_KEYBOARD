import React, { useRef } from 'react'
import Button from '../UI/Button'
import closeSVG from '../png/closeSVG.svg' 
import { useDispatch, useSelector } from 'react-redux'
import { toggleIconsWrap } from '../store/slices/ChangeIconSlice'
import { selectorAccountIcon } from '../store'

const Account = () => {
    const imgRef = useRef<HTMLImageElement>(null)
    const linkWrapRef = useRef<HTMLDivElement>(null)
    const accountIcon: string = useSelector(selectorAccountIcon)

    const dispatch = useDispatch()

    function openLinkWrap(): void {
        imgRef.current?.classList.toggle('imgMarkActive')
        linkWrapRef.current?.classList.toggle('linksWrapActive')
    }

    function toggleIconWrap(): void {
        dispatch(toggleIconsWrap())
    }
    // "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
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
                        src={closeSVG} 
                        alt="close image" 
                        className="imgMark"
                        ref={imgRef} 
                        onClick={() => openLinkWrap()}
                    />
                </div>
                <div className="welcome">Welcome</div>
                <Button buttClass='links link1' text='Change Avatar' toggle={toggleIconWrap} />
                <Button buttClass='links link2' text='Change Name' />
                <Button buttClass='links link3' text='Change Password' />
            </div>
            
        </div>
    </div>
  )
}

export default Account