import React, { Component } from 'react';


class Lesson extends Component {

    render() {
        const { lessonType } = this.props;
        const url = `/${lessonType}.svg`;
        return (
            <div class="lesson w-[180px] h-[80px] rounded-lg p-4 bg-[#EA7052]">
                <img src={url} />
                <p class="pt-[2px] pl-[40px] font-[Mulish] text-[12px] font-semibold leading-[14px] tracking-[1px] text-right text-white ">{lessonType}</p>            
            </div>
        )
    };
}

export default Lesson;