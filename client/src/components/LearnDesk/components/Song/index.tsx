import React from "react";
import { SongType } from "../../types";
import { useDispatch } from "react-redux";
import { disableSong1 } from "../../../../store/slices/Song1Slice";
import { disableSong2 } from "../../../../store/slices/Song2Slice";
import { disableSong3 } from "../../../../store/slices/Song3Slice";



export const Song = ({
  song,
  autoPlay,
  stopPlaying
}: SongType) => {
  const dispatch = useDispatch()

  const toggleSongs = () => {
    stopPlaying()
    dispatch(disableSong1())
    dispatch(disableSong2())
    dispatch(disableSong3())
  }

  const getAudio = () => {
    if(autoPlay !== undefined && song !== undefined) {
      autoPlay(song?.songCode)
    }
  }

  return (
    <div style={{display: 'contents'}}>
      <div className="text">{song?.songText}</div>
      <div className="buttWrapper">
        <div className='buttPlay' onClick={getAudio} >Play</div>
        <div className='buttPlay' onClick={toggleSongs} >Back</div>
      </div>
    </div>
  )
}