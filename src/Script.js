import React, { useEffect, useRef , useState} from 'react';
import Bottombar from './components/Bottombar';
import song1 from './Hukam Jailer-(PagalWorld).mp3';
import song2 from './Ordinary Person-(PagalWorld).mp3'
import song3 from './Pathala-Pathala-MassTamilan.so.mp3'
import song4 from './Loser.mp3'
import Display from './Display';

export default function Script() {



  
  const audioElementRef = useRef(null);
  const [Isplaying, setIsplaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [songProgress, setSongProgress] = useState(0);

  const songs = [
      {
        songName: 'Hukum -Anirudh Ravinder',
        coverPath: 'cover1.jpg',
        filePath: song1,
      },
      {
        songName: 'Ordinary Person -Anirudh Ravichander',
        coverPath: 'cover2.jpg',
        filePath: song2,
      },
      {
        songName: 'Pathala Pathala -Anirudh',
        coverPath: 'cover3.jpg',
        filePath: song3,
      },

      {
        songName: 'Loser - charlie puth',
        coverPath: 'cover4.jpg',
        filePath: song4,
      },
      
    ];

  const handleMasterPlay = () => {
  const audioElement = audioElementRef.current;
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    setIsplaying(true);
  } else {
    audioElement.pause();
    setIsplaying(false);
  }
};


    const handleTimeUpdate = () => {
      console.log('timeupdate');
      // update seekbar
    };

  const handleNextSong = () => {
  const nextSongIndex = (currentSongIndex + 1) % songs.length;
  setCurrentSongIndex(nextSongIndex);
  setIsplaying(true);
};

const handlePreviousSong = () => {
  const previousSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  setCurrentSongIndex(previousSongIndex);
  setIsplaying(true);
};


const handleSelectedSong = (tochangesong) =>{

  if(currentSongIndex === tochangesong){
    
    //do nothing
  }
  else{
    setCurrentSongIndex(tochangesong);
    setIsplaying(true);
  }

  
};


const onSeekSong = (percentage) => {
  const audioElement = audioElementRef.current;
  const newTime = (percentage / 100) * audioElement.duration;
  audioElement.currentTime = newTime;
  setSongProgress(percentage);
};





    useEffect(() => {
  // eslint-disable-next-line
  const audioElement = audioElementRef.current;



    

    const masterplay = document.getElementById('masterplay');
    const myProgressBar = document.getElementById('myprogressbar');

    if (masterplay && myProgressBar) {
      masterplay.addEventListener('click', handleMasterPlay);
      myProgressBar.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        masterplay.removeEventListener('click', handleMasterPlay);
        myProgressBar.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);


  useEffect(() => {
  const audioElement = audioElementRef.current;

  // Event handler for canplaythrough event
  const handleCanPlayThrough = () => {
    if (Isplaying) {
      audioElement.play();
    }
  };

  // Add event listener
  audioElement.addEventListener('canplaythrough', handleCanPlayThrough);

  return () => {
    // Remove event listener on cleanup
    audioElement.removeEventListener('canplaythrough', handleCanPlayThrough);
  };
}, [currentSongIndex, Isplaying]);


useEffect(() => {
  const audioElement = audioElementRef.current;
  audioElement.src = songs[currentSongIndex].filePath;
  audioElement.load(); // Trigger load for the new audio

  setIsplaying(Isplaying); //simply to run the another useeffect which has a dependency of isplaying
  // eslint-disable-next-line
}, [currentSongIndex]);



useEffect(() => {
  const audioElement = audioElementRef.current;

  const handleTimeUpdate = () => {
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    setSongProgress(progress);
  };

  audioElement.addEventListener('timeupdate', handleTimeUpdate);

  return () => {
    audioElement.removeEventListener('timeupdate', handleTimeUpdate);
  };
});

  

    

  return (
    <div>
        <div>
          <Display isplaying = {Isplaying} currentsong = {currentSongIndex} handleselectedsong = {handleSelectedSong}/>
        </div>

      {/* Render any content related to your component */}
        <div>
        <audio ref={audioElementRef}  src={songs[currentSongIndex].filePath}/>
        </div>
      <Bottombar isplaying = {Isplaying} title = {songs[currentSongIndex].songName} 
      onNextSong = {handleNextSong} onPreviousSong = {handlePreviousSong}
      songprogress = {songProgress}  onseeksong = {onSeekSong} />

    </div>
  );
}


