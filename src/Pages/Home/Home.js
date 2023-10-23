import React, { useState, useEffect } from 'react';
import LiveClass from '../../Components/LiveClass/LiveClass';
import MockExam from '../../Components/MockExam/MockExam';
import Lesson from '../../Components/Lesson/Lesson';
import { Link } from 'react-router-dom';
import './Home.css';
import { useColor } from '../../Context/ColorContext';
import { PRIMARY_COLOR, SECOND_COLOR, LESSON_TYPE } from '../../Utils/constants';
import Navbar from '../../Components/Navbar/Navbar';
const Home = () => {
    const { selectedColor, toggleColor } = useColor();
    const [isOpen, setIsOpen] = useState(false);
    const [style, setStyle] = useState(`bg-[${PRIMARY_COLOR}] home w-full`)
    const toggleDropdown = (e) => {
        const newColor = e.target.innerHTML.slice(0, 9);
        setIsOpen(!isOpen);
        toggleColor(newColor);
    };
    
    useEffect(() => {
        const bgColor = selectedColor === 'PRIMARY 2' ? SECOND_COLOR : PRIMARY_COLOR;
        setStyle('bg-[' + bgColor + '] home w-full');
    }, [selectedColor])

    return (
        <div className='flex w-full'>
            <Navbar />
            <div className={style}>
            <div className='top-bar w-full h-[100px] border-b border-gray-300 p-6 items-center flex'>
                <div className='left-bar w-3/4 float-lef'>
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="simple-search" className="h-[48px] top-[16px] left-[40.41px] border border-1.5 border-gray-300 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:w-[300px] lg:w-[500px]" placeholder="What would you like to learn?" required />
                    </div>
                </div>
                <div className="style-button relative z-1 w-1/8 p-6">
                    <button id="dropdown-button" data-dropdown-toggle="dropdown-list" className="style-btn bg-gray-900 text-white flex w-[150px] h-[38px] top-[24px] left-[1309px] p-4 items-center rounded-lg gap-4 font-[Mulish] text-[14px] font-semibold leading-[14px] tracking-[1px] text-left " type="button" onClick={toggleDropdown}>
                        {selectedColor}
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.1073 7.85742L0.490079 0.638672L11.7245 0.638673L6.1073 7.85742Z" fill="white" />
                        </svg>
                    </button>
                    <div id="dropdown-list" className={`${isOpen ? '' : 'hidden'} bg-white z-10 fixed top-[70px]`}>
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <button type="button" onClick={(toggleDropdown)}>PRIMARY 1</button>
                            </li>
                            <li>
                                <button type="button" onClick={(toggleDropdown)}>PRIMARY 2</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='right-bar w-1/8 flex items-center gap-6'>
                    <div className='noti-btn'>
                        <button>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.79482 12.2866C3.76523 10.7581 4.2887 8.9939 4.2887 7.17837V6.04857C4.2887 3.12137 6.49399 0.75 9.59074 0.75C12.6875 0.75 15.0367 3.12188 15.0367 6.04857V7.17837C14.8531 9.30938 15.707 11.2293 16.3898 12.2896M11.7673 15.1022C11.7673 16.2894 10.7938 17.25 9.59078 17.25C8.38772 17.25 7.41425 16.2894 7.41425 15.1022M16.408 15.1021H2.7764C1.98661 15.1021 1.34375 14.4708 1.34375 13.6884C1.34375 12.909 1.98355 12.2746 2.7764 12.2746H16.4111C17.2009 12.2746 17.8438 12.906 17.8438 13.6884C17.8407 14.4708 17.1978 15.1021 16.408 15.1021Z" stroke="#313848" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round" />
                            </svg>

                        </button>
                    </div>
                    <div>
                        <button className="user-btn w-[43px] h-[43px]">
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-none place-items-center w-980 mx-auto py-16 z-5 sm:w-[640px] md:w-[720px] lg:w-[900px] xl:w-[980px]">
                <div id="default-carousel" className="home-carousel relative w-full" data-carousel="slide">
                    <div className="relative h-36 overflow-hidden rounded-lg md:h-56">
                        <div className="duration-700 ease-in-out">
                            <img src="carousel-image.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        <div className="hidden duration-700 ease-in-out">
                            <img src="carousel-image.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        <div className="hidden duration-700 ease-in-out">
                            <img src="carousel-image.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        <div className="duration-700 ease-in-out">
                            <img src="carousel-image.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        <div className="duration-700 ease-in-out">
                            <img src="carousel-image.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                    </div>
                    <div className="carousel-btns b-[10px] absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" className="carousel-btn rounded-lg h-[6px] bg-white opacity-100 w-[147px] h-3 rounded-full sm:w-[100px] lg:w-[300px]" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="carousel-btn bg-white rounded-lg h-[6px] opacity-20 w-24 h-3 rounded-full sm:w-[100px] lg:w-[300px]" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="carousel-btn bg-white rounded-lg h-[6px] opacity-20 w-24 h-3 rounded-full sm:w-[100px] lg:w-[300px]" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    </div>
                </div>
                <div className="video-lesson pt-[50px] font-[M PLUS Rounded 1c] text-[18px] font-semibold leading-[14px] w-full">
                    <p>Watch Video Lessons</p>
                    <div className="video-container pt-4 grid grid-cols-2 gap:2 sm:grid-cols-3 md:grid-cols-4 md:gap-3 xl:grid-cols-5 gap-4">
                        {LESSON_TYPE.map((type, index) => {
                            const url = `/${type}`;
                            return (
                                <Link to={url} key={index}>
                                    <Lesson lessonType={type} />
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="homework-help grid sm:grid-cols-1 lg:grid-cols-2">
                    <div className="homework-practice w-[400px]">
                        <p className="homework-label">PRACTICE EXAM</p>
                        <h2 className="homework-title">Ready to test your knowledge?</h2>
                        <p className="homework-description">Take practice exams to prepare for upcoming exams. Practice makes perfect grades!</p>

                        <button className="homework-button">START PRACTICE</button>
                    </div>
                    <div className='homework-img w-[400px]'>
                        <img src="/homework-exam.svg" alt="..." />
                    </div>
                </div>
                <div className="join-live-class">
                    <div className="join-live-top">
                        <div className="join-button">
                            <p className="join-title">Join Live Classes</p>
                            <button className="join-all-button"><u>See all</u></button>
                        </div>
                        <div className="join-carousel-button">
                            <button className="join-prev">
                                <svg className="m-auto" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M6.46536 1.55566L1.66537 6.35567L6.46536 11.1557M12.332 6.35567H1.66537H12.332Z" stroke="#ADAFB6" strokeWidth="2" />
                                </svg>
                            </button>
                            <button className="join-next">
                                <svg className="m-auto" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.53464 1.55566L11.3346 6.35567L6.53464 11.1557M0.667969 6.35567H11.3346H0.667969Z" stroke="#6F747F" strokeWidth="2" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="join-live-container" >
                        <div className='carousel'>

                            <LiveClass
                                labelName="live"
                                classType="Science & Technology"
                                className="Metallic & Non Metallic Propperties and all Things red"
                                teacherName="Bella Thorne"
                                startTime="Started at 1:30 PM"
                                data-carousel="active"
                            />
                            <LiveClass
                                labelName="replay"
                                classType="Primary English"
                                className="Metallic & Non Metallic Propperties and all Things red"
                                teacherName="Bella Thorne"
                                startTime="Available for 2hrs"
                            />
                            <LiveClass
                                labelName="upcoming"
                                classType="Primary Mathematics"
                                className="Metallic & Non Metallic Propperties and all Things red"
                                teacherName="Bella Thorne"
                                startTime="Aug 19, 3:00 PM"
                            />
                            <LiveClass
                                labelName="upcoming"
                                classType="Primary Mathematics"
                                className="Metallic & Non Metallic Propperties and all Things red"
                                teacherName="Bella Thorne"
                                startTime="Aug 19, 3:00 PM"
                            />
                        </div>
                    </div>
                </div>
                <div className="take-mock-exam">
                    <div className="join-live-top">
                        <div className="join-button">
                            <p className="join-title">Take Mock Exams</p>
                            <button className="join-all-button"><u>See all</u></button>
                        </div>
                        <div className="join-carousel-button">
                            <button className="join-prev">
                                <svg className="m-auto" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M6.46536 1.55566L1.66537 6.35567L6.46536 11.1557M12.332 6.35567H1.66537H12.332Z" stroke="#ADAFB6" strokeWidth="2" />
                                </svg>
                            </button>
                            <button className="join-next">
                                <svg className="m-auto" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.53464 1.55566L11.3346 6.35567L6.53464 11.1557M0.667969 6.35567H11.3346H0.667969Z" stroke="#6F747F" strokeWidth="2" />
                                </svg>

                            </button>
                        </div>
                    </div>
                    <div className="take-exam-container" >
                        <MockExam
                            status="Mock Exam"
                            examName="Primary Mathematics- Grade 8 Examination"
                            examType="Primary Mathematics"
                            examDate="May 11, 11:00 am"
                            startTime="Closes in 2 days"
                            registerStatus="registered"
                        />
                        <MockExam
                            status="Mock Exam"
                            examName="Primary Mathematics- Grade 8 Examination"
                            examType="Primary Mathematics"
                            examDate="May 11, 11:00 am"
                            startTime="Closes in 2 days"
                            registerStatus="registered"
                        />
                        <MockExam
                            status="Mock Exam"
                            examName="Primary Mathematics- Grade 8 Examination"
                            examType="Primary Mathematics"
                            examDate="May 11, 11:00 am"
                            startTime="Closes in 2 days"
                            registerStatus="registered"
                        />
                    </div>
                </div>
                <div className='quiz-content'>
                    <button className="quiz-button">
                        <img src='/quiz-button.svg' alt='svg'></img>
                        PLAY QUIZ
                    </button>
                </div>
                <div className="help-frame grid sm:grid-cols-1 lg:grid-cols-2">
                    <div className="homework-practice w-[400px]">
                        <p className="homework-label">HOMEWORK HELP</p>
                        <h2 className="homework-title">Get Homework help from experienced tutors</h2>
                        <p className="homework-description">Ask a question and get detailed explanations to difficult questions</p>

                        <button className="homework-button">ASK A QUESTION</button>
                    </div>
                    <div className="homework-img w-[400px]">
                        <img src="/help-frame.svg" alt="..." />
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default Home;
