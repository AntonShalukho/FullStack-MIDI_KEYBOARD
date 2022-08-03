import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectorSong1, selectorSong2, selectorSong3 } from '../store'
import { toggleSongView, disableSong1 } from '../store/slices/Song1Slice'
import { toggleSong2View, disableSong2 } from '../store/slices/Song2Slice'
import { toggleSong3View, disableSong3 } from '../store/slices/Song3Slice'
// import Button from '../UI/Button'
import { SongObjType, SongService } from '../appService/SongService'

interface SongInterface {
  song?: SongObjType,
  autoPlay?: (song: string) => void | undefined,
  stopPlaying: () => void,
}

const Song: FC<SongInterface> = (props) => {
  const dispatch = useDispatch()

  function toggleSongs() {
    props.stopPlaying()
    dispatch(disableSong1())
    dispatch(disableSong2())
    dispatch(disableSong3())
  }

  function getAudio() {
    if(props.autoPlay !== undefined && props.song !== undefined) {
      props.autoPlay(props.song?.songCode)
    }
  }

  return (
    <div style={{display: 'contents'}}>
      <div className="text">{props.song?.songText}</div>
      <div className="buttWrapper">
        <div className='buttPlay' onClick={getAudio} >Play</div>
        {/* <Button buttClass='buttPlay' text='Play' /> */}
        <div className='buttPlay' onClick={toggleSongs} >Back</div>
        {/* <Button buttClass='buttPlay' text='Back' toggle={toggleSongs} /> */}
      </div>
    </div>
  )
}

type DeskProps = {
  autoPlay: (song: string) => void,
  stopPlaying: () => void
} 

const Desk: FC<DeskProps> = (props) => {
  const isSong1: boolean = useSelector(selectorSong1)
  const isSong2: boolean = useSelector(selectorSong2)
  const isSong3: boolean = useSelector(selectorSong3) 

  const dispatch = useDispatch()
  
  function getTrulySong(): SongObjType | undefined {
    if(isSong1) return SongService.song1
    if(isSong2) return SongService.song2
    if(isSong3) return SongService.song3
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
          <Song song={getTrulySong()} autoPlay={props.autoPlay} stopPlaying={props.stopPlaying} />
        )
      }
    </div>
  )
}

export default Desk
