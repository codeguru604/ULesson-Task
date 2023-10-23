import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoSrc, currentTime, isPlaying }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Load the playback state from localStorage
    const storedState = localStorage.getItem('videoPlayerState');
    if (storedState) {
      const { videoSrc: storedVideoSrc, currentTime: storedTime, isPlaying: storedPlaying } = JSON.parse(storedState);
      if (storedVideoSrc === videoSrc) {
        playerRef.current.seekTo(storedTime);
        if (storedPlaying) {
          playerRef.current.play();
        }
      }
    }
  }, [videoSrc]);

  useEffect(() => {
    // Save the playback state to localStorage when the video is paused or unmounted
    if (!isPlaying) {
      const stateToStore = { videoSrc, currentTime, isPlaying: false };
      localStorage.setItem('videoPlayerState', JSON.stringify(stateToStore));
    }
  }, [videoSrc, currentTime, isPlaying]);

  return (
    <ReactPlayer
      ref={playerRef}
      url={videoSrc}
      pip={true}
      controls={true}
      playing={isPlaying}
    />
  );
};

export default VideoPlayer;
