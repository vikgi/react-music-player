import React from 'react'
import './bottombar.css'
import { FaPlay , FaPause} from 'react-icons/fa';
import {IoPlaySkipForward} from 'react-icons/io5'
import {IoPlaySkipBack} from 'react-icons/io5'
import playing from '../playing.gif';

export default function Bottombar(props) {

  const {isplaying, title, onNextSong, onPreviousSong, songprogress, onseeksong} = props;
  return (

    <div className="bottom">
      <input type="range" name='range' id = "myprogressbar" min='0' max='100' value={String(songprogress)  } onChange={(e) => 
        { onseeksong(parseFloat(e.target.value)) } } /> 
      <div className="icons">  
            <IoPlaySkipBack onClick={onPreviousSong}/>  
            <div className='masterplay' id= 'masterplay'  >
            {isplaying ?<FaPause />: <FaPlay/> } 
            </div>
            
            <IoPlaySkipForward onClick={onNextSong}/> 
      </div>
      <div className="songinfo"  style = {{opacity: isplaying? 1: 0}}>
        <img src={playing} alt="hi"  width={100} height={33} />
        <h1>{title}</h1>
      </div>
      
    </div>

  )
}

