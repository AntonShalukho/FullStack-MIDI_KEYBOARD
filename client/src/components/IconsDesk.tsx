import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleIconsWrap } from '../store/slices/ChangeIconSlice'
import getIcons from '../API/GetIcons'
import { selectorChangeIcon } from '../store'
import Icons from '../UI/Icons'
import { changeIconSrc } from '../store/slices/AccountIconSlice'
import { useNavigate } from 'react-router-dom'
import ImgService from '../appService/ImgService'


type IconsObj = {
  image: string
}

const IconsDesk: FC = () => {
  const isIconDis = useSelector(selectorChangeIcon);
  const dispatch = useDispatch();

  const [icons, setIcons] = useState([])
  const navigate = useNavigate()
  
  useEffect(() => {
    respons()
  }, [])
  
  async function respons() {
    const arr = await getIcons()
    setIcons(arr)
  }

  function toggleIconWrap() {
    dispatch(toggleIconsWrap());
    navigate(-1)
  }

  function newAccountIcon(src: string):void {
    dispatch(changeIconSrc(src))
  }

  return (
    <div className="iconsWrapper iconsWrapperActive1">
        <div className="icons">
            <img  
                src={ImgService.cross} 
                alt="back" 
                className="backAvatar" 
                onClick={() => {toggleIconWrap()}}
            />
            {isIconDis && icons.map((arr: IconsObj) => <Icons key={arr.image} src={arr.image} changeIcon={newAccountIcon} />)}
        </div>
    </div>
  )
}

export default IconsDesk
