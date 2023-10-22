import React, { Component } from 'react';
import './MockExam.css';

class MockExam extends Component {

    render() {
        const { status, examName, examType, examDate, startTime, registerStatus } = this.props;
        let bannerColor = '#EE6B6B';
        if (examType === 'Primary English') 
            bannerColor = '#7876E9';
        else if (examType === 'Primary Mathematics') 
            bannerColor = '#3BB8A3'

        return (
            <div class='mock-exam'>
                <div class='banner-exam' style={{backgroundColor: bannerColor}}>
                    <div class='banner-tag-exam'>
                        <div class='tag'>{status}</div>
                    </div>
                    <div class='users'>
                        <img class='user-imgs' src='/mock-exam-users.svg'></img>
                        <p>+ 200 Registered</p>
                    </div>
                </div>
                <div class="card-description">
                    <p class='exam-name'>{examName}</p>
                    <p class='exam-date'>{examDate}</p>
                </div>
                <div class='card-footer'>
                    <div class='card-time'>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7.75146" cy="7" r="6.5" stroke="#313848" />
                            <path d="M3.86279 7.00119H7.75168V3.1123" stroke="#313848" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>{startTime}</p>
                    </div>
                    <button class='card-button'>
                        REGISTER
                    </button>
                </div>
            </div>
        );
    }
}

export default MockExam;
