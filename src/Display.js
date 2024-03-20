import logo from './logo.png'
import './style.css'
import cover1 from './hukumsong.jpg'
import cover2 from './ordinary_person.jpg'
import cover3 from './Pathala_Pathala cover.jpeg'
import cover4 from './loser charlie cover.jpg'
import { FaPause, FaPlay } from 'react-icons/fa';




import React from 'react'

export default function Display(props) {
    const {isplaying, currentsong, handleselectedsong} = props;

  return (
    <div>
            <nav>
            <ul>
                <li className='brand'><img src={logo} width={'60px'} alt='spotify.jpg' /> musiv </li>
                <li>HOME</li>
                <li>ABOUT</li>
            </ul>
            </nav>

        <div className="container">
        
            <h1>All along -playlist by you</h1>
                <div className="songList" >
                            <div className='songItem'>
                            <img src={cover1} alt="1" />
                            <span>HUKUM -Anirudh Ravichander</span>
                            <span className="songlistplay"><span className='timestamp'>05:35  {isplaying && currentsong === 0 ? <FaPause onClick={() => handleselectedsong(0)} /> : <FaPlay onClick={() => handleselectedsong(0)} />}</span></span>

                            </div>

                            <div className='songItem'>
                            <img src={cover2} alt="1" />
                            <span>Ordinary Person -Anirudh Ravichander</span>
                            <span className="songlistplay"><span className='timestamp'>05:35  {isplaying && currentsong === 1 ? <FaPause onClick={() => handleselectedsong(1)}/> : <FaPlay onClick={() => handleselectedsong(1)}/>}</span></span>

                            </div>

                            <div className='songItem'>
                            <img src={cover3} alt="1" />
                            <span>Pathala Pathala -Anirudh..</span>
                            <span className="songlistplay"><span className='timestamp'>05:35  {isplaying && currentsong === 2 ? <FaPause onClick={() => handleselectedsong(2)}/> : <FaPlay onClick={() => handleselectedsong(2)}/>}</span></span>

                            </div>

                            <div className='songItem'>
                            <img src={cover4} alt="1" />
                            <span>Loser -Charlie puth..</span>
                            <span className="songlistplay"><span className='timestamp'>05:35  {isplaying && currentsong === 3 ? <FaPause onClick={() => handleselectedsong(3)}/> : <FaPlay onClick={() => handleselectedsong(3)}/>}</span></span>

                            </div>







                </div>
        </div>

    </div>
  )
}


