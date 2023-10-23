import React, { useState } from 'react';
import ChapterModal from '../ChapterModal/ChapterModal';

const ChapterCard = (props) => {
    const { chapterNumber, chapterName } = props;
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
    }
    const url = `/Chapter ${parseInt(chapterNumber) % 5 !== 0 ? parseInt(chapterNumber) % 5 : 5}.svg`;

    return (
        <div>
            <div className='bg-white p-4 w-[240px] h-[252px] grid font-["M_PLUS_Rounded_1c"] tracking-[0.4px] items-center text-center' onClick={toggleModal}>
                <img className='m-auto' src={url} alt={`Chapter ${chapterNumber}`} />
                <p className='text-[14px] leading-[16.16px] opacity-50'>Chapter {chapterNumber}</p>
                <p className='font-semibold text-[16px] leading-[22.4px]'>{chapterName}</p>
                <div className='slider w-[206px] h-[6px] flex'>
                    <div className='w-1/6 bg-[#EA7052] rounded'></div>
                    <div className='rounded'></div>
                </div>
                <p className='text-[12px] leading-[12px] opacity-25'>34 Lessons</p>
            </div>
            {showModal && <ChapterModal chapterNumber={chapterNumber} chapterName={chapterName} showModal={showModal} onClose={toggleModal} />}
        </div>
    );
}

export default ChapterCard;
