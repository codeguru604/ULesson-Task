import React from 'react';
import './LiveClass.css';


const LiveClass = (props) => {
    const { labelName, classType, className, teacherName, startTime } = props;
    const imageUrl = `/${teacherName}.svg`;
    let bannerColor = '#EE6B6B';



    if (classType === 'Primary English')
        bannerColor = '#7876E9';
    else if (classType === 'Primary Mathematics')
        bannerColor = '#3BB8A3'

    return (
        <div class='live-class'>
            <div class='banner' style={{ backgroundColor: bannerColor }}>
                <div class='banner-picture'>
                    <img src={imageUrl} alt="Image"></img>
                </div>
                <div class='banner-label'>
                    {labelName === 'live' ? (
                        <div class='label'>
                            <div class='label-tag' style={{ backgroundColor: '#DA0000', width: '83px' }}>
                                <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="3.07101" cy="3.35714" rx="2.85714" ry="2.85714" fill="white" />
                                </svg>
                                LIVE CHAT
                            </div>
                            <div class='five-dots'>
                                <img src='/5-dots.png'></img>
                            </div>

                        </div>
                    ) : (labelName === 'replay' ? (
                        <div class='label'>
                            <div class='label-tag' style={{ backgroundColor: '#F2984D', width: '68px' }}>
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_48_6047)">
                                        <path d="M-0.281865 10.0007C-0.286326 10.7773 0.557373 11.2623 1.2262 10.8678L7.62273 7.09449C8.27532 6.70952 8.27941 5.76691 7.63018 5.37631L1.27729 1.55416C0.612983 1.15448 -0.233769 1.63003 -0.238224 2.40528L-0.281865 10.0007Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_48_6047">
                                            <rect width="8.57143" height="12" fill="white" transform="translate(0.499023)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                REPLAY
                            </div>
                        </div>
                    ) : (
                        <div class='label'>
                            <div class='label-tag' style={{ backgroundColor: '#606572', width: '95px' }}>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.37402 0.803183C2.44506 0.803183 2.51319 0.831404 2.56343 0.881637C2.61366 0.931869 2.64188 1 2.64188 1.07104V1.53559H6.92759V1.07104C6.92759 1 6.95582 0.931869 7.00605 0.881637C7.05628 0.831404 7.12441 0.803183 7.19545 0.803183C7.26649 0.803183 7.33462 0.831404 7.38486 0.881637C7.43509 0.931869 7.46331 1 7.46331 1.07104V1.53559H7.99902C8.28318 1.53559 8.55571 1.64848 8.75664 1.84941C8.95757 2.05034 9.07045 2.32286 9.07045 2.60702V8.49988C9.07045 8.78404 8.95757 9.05656 8.75664 9.25749C8.55571 9.45843 8.28318 9.57131 7.99902 9.57131H1.57045C1.28629 9.57131 1.01377 9.45843 0.812838 9.25749C0.611906 9.05656 0.499023 8.78404 0.499023 8.49988V3.67845H9.07045V3.14274H0.499023V2.60702C0.499023 2.32286 0.611906 2.05034 0.812838 1.84941C1.01377 1.64848 1.28629 1.53559 1.57045 1.53559H2.10617V1.07104C2.10617 1 2.13439 0.931869 2.18462 0.881637C2.23485 0.831404 2.30298 0.803183 2.37402 0.803183Z" fill="white" />
                                </svg>
                                UPCOMING
                            </div>
                        </div>
                    )
                    )
                    }
                </div>
            </div>
            <div class="card-description">
                <p class='class-type' style={{ color: bannerColor }}>{classType}</p>
                <p class='class-name'>{className}</p>
                <p class='teacher-name'>{teacherName}</p>
            </div>
            <div class='card-footer'>
                {labelName === 'replay' ? (
                    <div class='card-time'>
                        <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.94604 1.00012V3.41249C1.94604 5.30184 3.47766 6.83345 5.36701 6.83345V6.83345V6.83345C7.25636 6.83345 8.78798 5.30183 8.78798 3.41249V1.00012" stroke="#313848" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.94604 12.6667V10.2544C1.94604 8.36503 3.47766 6.83342 5.36701 6.83342V6.83342V6.83342C7.25636 6.83342 8.78798 8.36504 8.78798 10.2544V12.6667" stroke="#313848" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M0.804443 1.00012H9.92702" stroke="#313848" stroke-linecap="round" />
                            <path d="M0.804443 12.6667H9.92702" stroke="#313848" stroke-linecap="round" />
                        </svg>
                        <p>{startTime}</p>
                    </div>
                ) : (
                    <div class='card-time'>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7.75146" cy="7" r="6.5" stroke="#313848" />
                            <path d="M3.86279 7.00119H7.75168V3.1123" stroke="#313848" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>{startTime}</p>
                    </div>
                )}
                <button class='card-button'>
                    {labelName === 'replay' ? 'REPLAY' : (labelName === 'live' ? 'JOIN' : 'REMIND ME')}
                </button>
            </div>
        </div>
    );
}

export default LiveClass;
