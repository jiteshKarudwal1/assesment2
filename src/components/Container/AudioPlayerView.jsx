import React, { useState, useRef, useEffect } from "react";
import "../Common/style.css";
import { bookListMapping as books } from "../../contants/constants";
import { motion, useAnimation } from "framer-motion";
import arrowDown from "../../assets/Audio/arrowDown.svg";
import arrowLeft from "../../assets/Audio/arrowLeft.svg";
import arrowRight from "../../assets/Audio/arrowRight.svg";
import bottomMenu from "../../assets/Audio/bottomMenu.svg";
import moreImg from "../../assets/Audio/more.svg";
import playImg from "../../assets/Audio/Play.svg";
import uploadImg from "../../assets/Audio/Upload.svg";
import volumeImg from "../../assets/Audio/Volume.svg";

export default function AudioPlayer({ book, close }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    animateIn();
  }, []);

  const controls = useAnimation();

  const animateIn = async () => {
    await controls.start({ y: 0 });
  };

  const animateOut = async () => {
    await controls.start({ y: "100%" });
    close(false);
  };

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const timeUpdateHandler = (e) => {
    setCurrentTime(e.target.currentTime);
  };

  const songEndHandler = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <motion.div
      className="audio-player-container"
      initial={{ y: "100%" }}
      animate={controls}
    >
      <div className="audio-header">
        <img src={arrowDown} alt="close" onClick={animateOut} />
        <span className="audio-title" title={book.name}>
          {book.name}
        </span>
        <img src={moreImg} alt="more" />
      </div>
      <img className="audio-cover" src={book.cover} alt={book.name} />
      <span>
        <div className="audio-bar-text1">{book.name}</div>
        <div className="audio-bar-text2">{book.author}</div>
      </span>
      {/* NOTE: Just here to demonstrate the "audio" placeholder if the correct source is passed with all the eventHandlers */}
      <audio
        ref={audioRef}
        src="/"
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
        onEnded={songEndHandler}
      ></audio>

      <div className="timeline">
        <div className="time">{formatTime(currentTime)}</div>
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={(e) => {
            audioRef.current.currentTime = e.target.value;
            setCurrentTime(e.target.value);
          }}
        />
        <div className="time">{formatTime(duration)}</div>
      </div>

      <div className="player-controls">
        <img className="control-volume" src={volumeImg} alt="volume" />
        <img
          className="control-prev"
          src={arrowLeft}
          alt="prev"
          onClick={() =>
            setCurrentSongIndex(
              (prevIndex) => (prevIndex - 1 + books.length) % books.length
            )
          }
        />
        <img className="control-play" src={playImg} alt="play" onClick={playPauseHandler} />
        <img
          className="control-prev"
          src={arrowRight}
          alt="next"
          onClick={() =>
            setCurrentSongIndex((prevIndex) => (prevIndex + 1) % books.length)
          }
        />
        <img className="control-volume" src={uploadImg} alt="share" />
      </div>
    </motion.div>
  );
}
