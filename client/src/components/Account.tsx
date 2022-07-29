import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleIconsWrap } from '../store/slices/ChangeIconSlice'
import { selectorAccountIcon, selectorChangeName } from '../store'
import { useNavigate } from 'react-router-dom'
import { ChangeName } from './ChangeName'
import { toggleChangeNameComponent } from '../store/slices/ChangeNameSlice'
import ImgService from '../appService/ImgService'

const Account = () => {
    const imgRef = useRef<HTMLImageElement>(null)
    const linkWrapRef = useRef<HTMLDivElement>(null)
    const accountIcon: string = useSelector(selectorAccountIcon)
    const isChangeName: boolean = useSelector(selectorChangeName)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    function openLinkWrap(): void {
        imgRef.current?.classList.toggle('imgMarkActive')
        linkWrapRef.current?.classList.toggle('linksWrapActive')
    }

    function toggleIconWrap(): void {
        dispatch(toggleIconsWrap())
        navigate('/piano/icons')
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
                        src={ImgService.closeSVG} 
                        alt="close image" 
                        className="imgMark"
                        ref={imgRef} 
                        onClick={() => openLinkWrap()}
                    />
                </div>
                {!isChangeName
                    ?   (
                            <>
                                <div className="welcome">Welcome</div>
                                <div onClick={() => toggleIconWrap()} className='links link1'>Change Avatar</div>
                                <div onClick={() => dispatch(toggleChangeNameComponent())} className='links link2'>Change Name</div>
                            </>
                        )
                    :   <ChangeName/>
                }
            </div>
            
        </div>
    </div>
  )
}

export default Account