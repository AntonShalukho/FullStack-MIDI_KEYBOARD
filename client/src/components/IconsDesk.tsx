import React, { ReactElement, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import closeSVG from '../png/cross.png'
import { toggleIconsWrap } from '../store/slices/ChangeIconSlice'
import getIcons from '../API/GetIcons'
import { selectorChangeIcon } from '../store'
import axios from 'axios'
import Icons from '../UI/Icons'
import { changeIconSrc } from '../store/slices/AccountIconSlice'
import { createAction } from '@reduxjs/toolkit'

// const [fetchPost, isPostsLoading, postError] = useFetching(async (limit, page) => {
//   const response = await PostService.getAll(limit, page);
//   setPosts([...posts, ...response.data]);
//   const totalCount = response.headers['x-total-count'];
//   setTotalPages(getPageCount(totalCount, limit));
// })

type IconsObj = {
  image: string
}

const IconsDesk = () => {
  const isIconDis = useSelector(selectorChangeIcon);
  const dispatch = useDispatch();

  const [icons, setIcons] = useState([])
  
  useEffect(() => {
    respons()
  }, [])
  
  async function respons() {
    const arr = await getIcons()
    setIcons(arr)
  }

  function toggleIconWrap() {
    dispatch(toggleIconsWrap())
  }

  function newAccountIcon(src: string):void {
    // const newAction = createAction('NEW_ICON_SRC', (src) => {return payload: src})
    dispatch(changeIconSrc(src))
  }

  return (
    <div className="iconsWrapper iconsWrapperActive1">
        <div className="icons">
            <img  
                src={closeSVG} 
                alt="back image" 
                className="backAvatar" 
                onClick={() => {toggleIconWrap(); icons.forEach(arr => console.dir(arr))}}
            />
            {isIconDis && icons.map((arr: IconsObj) => <Icons key={arr.image} src={arr.image} changeIcon={newAccountIcon} />)}
        </div>
    </div>
  )
}

export default IconsDesk
