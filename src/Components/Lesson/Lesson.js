import React from 'react';

const Lesson = (props) => { 
    const {lessonType} = props;
    const url = `/${lessonType}.svg`;

    return (
        <div className="lesson w-[180px] h-[80px] rounded-lg p-4 bg-[#EA7052] m-auto">
            <img src={url} alt={lessonType} />
            <p className="pt-[2px] pl-[40px] font-[Mulish] text-[12px] font-semibold leading-[14px] tracking-[1px] text-right text-white ">
                {lessonType}
            </p>
        </div>
    );
}

export default Lesson;