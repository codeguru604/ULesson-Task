import React from 'react';
import './MockExam.css';

const MockExam = (props) => {
    const { status, examName, examType, examDate, startTime } = props;
    let bannerColor = '#EE6B6B';
    
    if (examType === 'Primary English')
        bannerColor = '#7876E9';
    else if (examType === 'Primary Mathematics')
        bannerColor = '#3BB8A3'

    return (
        <div className='mock-exam'>
            <div className='banner-exam' style={{ backgroundColor: bannerColor }}>
                <div className='banner-tag-exam'>
                    <div className='tag'>{status}</div>
                </div>
                <div className='users'>
                    <img className='user-imgs' src='/mock-exam-users.svg' alt='svg'></img>
                    <p>+ 200 Registered</p>
                </div>
            </div>
            <div className="card-description">
                <p className='exam-name'>{examName}</p>
                <p className='exam-date'>{examDate}</p>
            </div>
            <div className='card-footer'>
                <div className='card-time'>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7.75146" cy="7" r="6.5" stroke="#313848" />
                        <path d="M3.86279 7.00119H7.75168V3.1123" stroke="#313848" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>{startTime}</p>
                </div>
                <button className='card-button'>
                    REGISTER
                </button>
            </div>
        </div>
    );
}

export default MockExam;
