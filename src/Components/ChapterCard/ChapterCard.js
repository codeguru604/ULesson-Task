import React, { Component } from 'react';

class ChapterCard extends Component {
    render() {
        const {chapterNumber, chapterName } = this.props;
        const url=`/Chapter ${parseInt(chapterNumber) % 5 != 0 ? parseInt(chapterNumber) % 5 : 5}.svg`;
        return (
            <div class='bg-white p-4 w-[240px] h-[252px] grid font-["M_PLUS_Rounded_1c"]tracking-[0.4px] items-center text-center'>
                <img class='m-auto' src={url} />
                <p class='text-[14px] leading-[16.16px] opacity-50'>Chapter {chapterNumber}</p>
                <p class='font-semobold text-[16px] leading-[22.4px]'>{chapterName}</p>
                <div class='slider w-[206px] h-[6px] flex'>
                    <div class='w-1/6 bg-[#EA7052] rounded'></div>
                    <div class='rounded'></div>
                </div>
                <p class='text-[12px] leading-[12px] opacity-25'>34 Lessons</p>
            </div>
        );
    }
}

export default ChapterCard;