import React, { useEffect, useRef, useState } from "react";
import "./index.css";

export const Audiobook = ({ tracks, configs }) => {
  const [trackProgress, setTrackProgress] = useState(0);
  const [displayTimer, setDisplayTimer] = useState("00:00");
  const [isPlaying, setIsPlaying] = useState(false);
  const { title, audioSrc } = tracks;
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const { duration } = audioRef.current;

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (configs.defaultActive) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [configs]);

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTrackProgress(audioRef.current.currentTime);
      setDisplayTimer(
        getFormattedTime(
          audioRef.current.duration - audioRef.current.currentTime
        )
      );
    }, [1000]);
  };

  const onScrub = (value) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
    setDisplayTimer(
      getFormattedTime(audioRef.current.duration - audioRef.current.currentTime)
    );
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const getFormattedTime = (unformattedDuration) => {
    const date = new Date(0);
    if (unformattedDuration > 0) {
      date.setSeconds(unformattedDuration % 60);
      date.setMinutes(unformattedDuration / 60);
    }
    if (date.toLocaleString("en-za").slice(15, 20) === "30:00") {
      return "00:00";
    } else {
      return date.toLocaleString("en-za").slice(15, 20);
    }
  };

  return (
    <React.Fragment>
      <div
        className="ir-audio-book-sample-wrapper web-audio-player"
        style={{
          display: configs.active ? "block" : "none",
        }}
      >
        <h4>Audiobook</h4>
        <div className="ir-audio-sample-wrapper">
          {isPlaying ? (
            <span
              className="ir-audio-sample-pause-icon"
              onClick={() => setIsPlaying(false)}
            ></span>
          ) : (
            <span
              className="ir-audio-sample-play-icon"
              onClick={() => setIsPlaying(true)}
            ></span>
          )}
          <div className="ir-audio-sample-input-range-wrapper">
            <span className="ir-audio-chapter-name">{title}</span>
            <input
              className="ir-audio-sample-input-range ir-web-progress-range"
              type="range"
              value={trackProgress}
              min="0"
              max={`${duration}`}
              onChange={(e) => onScrub(e.target.value)}
              onMouseUp={onScrubEnd}
              onKeyUp={onScrubEnd}
              step="1"
            ></input>
          </div>
          <span className="ir-audio-sample-time-duration web-current-time current-time">
            {displayTimer}
          </span>
          <img
            className="ir-audio-sample-thumbnail-image"
            src="https://webservice.instaread.co/books/images?imageUrl=https://d1cm35kbp068hs.cloudfront.net/ulqsstcvmp/thumbnail.jpg&amp;type=cover"
            alt="Astrophysics for People in a Hurry"
          ></img>
        </div>
      </div>
    </React.Fragment>
  );
};
