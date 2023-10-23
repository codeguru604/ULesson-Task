import React, { useState, useEffect } from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const videoList = [
    'https://drive.google.com/uc?export=download&id=1R8UGFePHQCMZA6aLlnp4kGWjUCWqjpTu',
    'https://drive.google.com/uc?export=download&id=1jgwX8_gwGuwg5OJ_J0Nrmql5eL-ierpq',
    'https://drive.google.com/uc?export=download&id=1EnRRKw7aiNnij_TdOPBsFcY_D7Af78KV'
];

const ChapterModal = (props) => {
    const { showModal, onClose } = props;
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videoState, setVideoState] = useState({
        videoSrc: null,
        currentTime: 0,
        isPlaying: false,
    });

    useEffect(() => {
        // Load the playback state from localStorage when the modal is opened
        if (showModal) {
            const storedState = localStorage.getItem('videoPlayerState');
            if (storedState) {
                const parsedState = JSON.parse(storedState);
                setSelectedVideo(parsedState.videoSrc);
                setVideoState(parsedState);
            }
        }
    }, [showModal]);

    const handleClose = (e) => {
        // Save the video playback state to localStorage
        if (selectedVideo) {
            const stateToStore = { ...videoState, isPlaying: false };
            localStorage.setItem('videoPlayerState', JSON.stringify(stateToStore));
        }
        onClose && onClose();
    };

    const handleVideoSelection = (videoSrc) => {
        setSelectedVideo(videoSrc);
        setVideoState({
            videoSrc: videoSrc,
            currentTime: 0,
            isPlaying: true,
        });
    };

    const returnMenu = () => {
        if (selectedVideo) {
            const stateToStore = { ...videoState, isPlaying: false };
            localStorage.setItem('videoPlayerState', JSON.stringify(stateToStore));
        }
        setSelectedVideo(null);
    }


    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="w-[800px] relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className='prev' onClick={returnMenu}>
                                    <div className='p-4 pl-12'>
                                    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.10986 11.21L0.999863 6.32L6.10986 1" stroke="#313848" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
                                            <path d="M17.0005 6L1.00049 6" stroke="#313848" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='modal-title'>
                                    <p>VIDEO</p>
                                    {selectedVideo ? (
                                        <VideoPlayer videoSrc={selectedVideo} currentTime={0} isPlaying={true} />
                                    ) : (
                                        <div>
                                            <p>Select a video:</p>
                                            <ul>
                                                {videoList.map((videoSrc, index) => (
                                                    <li key={index} onClick={() => handleVideoSelection(videoSrc)}>
                                                        <span>{videoSrc}</span> {/* Display the video title or other information */}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={handleClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChapterModal;

