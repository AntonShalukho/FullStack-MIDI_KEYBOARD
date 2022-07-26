import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectorSong1, selectorSong2, selectorSong3 } from '../store'
import { toggleSongView, disableSong1 } from '../store/slices/Song1Slice'
import { toggleSong2View, disableSong2 } from '../store/slices/Song2Slice'
import { toggleSong3View, disableSong3 } from '../store/slices/Song3Slice'
import Button from '../UI/Button'
import { SongService } from '../appService/SongService'

interface SongInterface {
  songText?: string
}

const Song: FC<SongInterface> = (props) => {
  const dispatch = useDispatch()

  function toggleSongs() {
    dispatch(disableSong1())
    dispatch(disableSong2())
    dispatch(disableSong3())
  }

  return (
    <div style={{display: 'contents'}}>
      <div className="text">{props.songText}</div>
      <div className="buttWrapper">
        <Button buttClass='buttPlay' text='Play' />
        <Button buttClass='buttPlay' text='Back' toggle={toggleSongs} />
      </div>
    </div>
  )
}

const Desk = () => {
  const isSong1 = useSelector(selectorSong1)
  const isSong2 = useSelector(selectorSong2)
  const isSong3 = useSelector(selectorSong3) 

  const dispatch = useDispatch()
  
  function getTrulySong(): string | undefined {
    if(isSong1) return SongService.songText1
    if(isSong2) return SongService.songText2
    if(isSong3) return SongService.songText3
  }

  return (
    <div className="note">
      <div className="title">Please choose the song in what you are interested in:</div>
      {!isSong1 && !isSong2 && !isSong3
        ? (
          <div className="songName">
            <div className="song" onClick={() => dispatch(toggleSongView())} >In the end (Linkin park)</div>
            <div className="song" onClick={() => dispatch(toggleSong2View())} >Ёлочка</div>
            <div className="song" onClick={() => dispatch(toggleSong3View())} >Песенка Мамонтёнка</div>
          </div>
          )
        : (
          <Song songText={getTrulySong()}/>
        )
      }
      
            
    </div>
  )
}

export default Desk
