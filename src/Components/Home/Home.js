import React, { Component, useState } from 'react';
import './Home.css';
import LiveClass from '../LiveClass/LiveClass';
import MockExam from '../MockExam/MockExam';
import Lesson from '../../Lesson/Lesson';
import { Link } from 'react-router-dom';
/**
 * Container React Class - This is where router is implemented to switch between pages
 * @class Container
 */
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    toggleDropdown = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
        console.log(this.isOpen);
    };
    render() {
        const { isOpen } = this.state;
        return (
            <div class='home w-full'>
                <div class='top-bar w-full h-[100px] border-b border-gray-300 p-6 items-center flex'>
                    <div class='left-bar w-3/4 float-lef'>
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" class="w-[532px] h-[48px] top-[16px] left-[40.41px] border border-1.5 border-gray-300 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What would you like to learn?" required />
                        </div>
                    </div>
                    <div class="style-button relative z-1 w-1/8">
                            <button id="dropdown-button" data-dropdown-toggle="dropdown-list" class="style-btn bg-gray-900 text-white flex w-[150px] h-[38px] top-[24px] left-[1309px] p-4 items-center rounded-lg gap-4 font-[Mulish] text-[14px] font-semibold leading-[14px] tracking-[1px] text-left " type="button" onClick={this.toggleDropdown}>
                                PRIMARY 2
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.1073 7.85742L0.490079 0.638672L11.7245 0.638673L6.1073 7.85742Z" fill="white" />
                                </svg>
                            </button>
                            <div id="dropdown-list" class={`${isOpen ? '' : 'hidden'} bg-white z-10`}>
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                    <li>
                                        <button type="button">PRIMARY 1</button>
                                    </li>
                                    <li>
                                        <button type="button">PRIMARY 2</button>
                                    </li>
                                    <li>
                                        <button type="button">PRIMARY 3</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    <div class='right-bar w-1/8 flex items-center gap-6'>
                        <div class='noti-btn'>
                            <button>
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.79482 12.2866C3.76523 10.7581 4.2887 8.9939 4.2887 7.17837V6.04857C4.2887 3.12137 6.49399 0.75 9.59074 0.75C12.6875 0.75 15.0367 3.12188 15.0367 6.04857V7.17837C14.8531 9.30938 15.707 11.2293 16.3898 12.2896M11.7673 15.1022C11.7673 16.2894 10.7938 17.25 9.59078 17.25C8.38772 17.25 7.41425 16.2894 7.41425 15.1022M16.408 15.1021H2.7764C1.98661 15.1021 1.34375 14.4708 1.34375 13.6884C1.34375 12.909 1.98355 12.2746 2.7764 12.2746H16.4111C17.2009 12.2746 17.8438 12.906 17.8438 13.6884C17.8407 14.4708 17.1978 15.1021 16.408 15.1021Z" stroke="#313848" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
                                </svg>

                            </button>
                        </div>
                        <div>
                            <button class="user-btn w-[43px] h-[43px]">
                            </button>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-none place-items-center w-980 mx-auto py-16 z-5 md:w-[720px] lg:w-[900px] xl:w-[980px]">
                    <div id="default-carousel" class="home-carousel relative w-full" data-carousel="slide">
                        <div class="relative h-36 overflow-hidden rounded-lg md:h-56">
                            <div class="duration-700 ease-in-out" data-carousel-item>
                                <img src="carousel-image.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="carousel-image.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="carousel-image.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div class="duration-700 ease-in-out" data-carousel-item>
                                <img src="carousel-image.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div class="duration-700 ease-in-out" data-carousel-item>
                                <img src="carousel-image.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                        </div>
                        <div class="carousel-btns b-[10px] absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                            <button type="button" class="carousel-btn rounded-lg w-[300px] h-[6px] bg-white opacity-100 w-[147px] h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" class="carousel-btn bg-white rounded-lg w-[300px] h-[6px] opacity-20 w-24 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button type="button" class="carousel-btn bg-white rounded-lg w-[300px] h-[6px] opacity-20 w-24 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        </div>

                    </div>
                    <div class="video-lesson pt-[50px] font-[M PLUS Rounded 1c] text-[18px] font-semibold leading-[14px] w-full">
                        <p>Watch Video Lessons</p>
                        <div class="video-container pt-4 grid grid-cols-3 gap:2 md:grid-cols-4 md:gap-3 xl:grid-cols-5 gap-4">
                            <Link to='/mathematics'><Lesson  lessonType="MATHEMATICS"/></Link>
                            <Lesson  lessonType="ENGLISH LANGUAGE"/>
                            <Lesson  lessonType="CHEMISTRY"/>
                            <Lesson  lessonType="BIOLOGY"/>
                            <Lesson  lessonType="PHYSICS"/>
                            <Lesson  lessonType="ECONOMICS"/>
                            <Lesson  lessonType="ACCOUNTING"/>
                            <Lesson  lessonType="LITERATURE IN ENGLISH"/>
                            <Lesson  lessonType="GOVERNMENT"/>
                        </div>
                    </div>
                    <div class="homework-help">
                        <div class="homework-practice">
                            <p class="homework-label">PRACTICE EXAM</p>
                            <h2 class="homework-title">Ready to test your knowledge?</h2>
                            <p class="homework-description">Take practice exams to prepare for upcoming exams. Practice makes perfect grades!</p>

                            <button class="homework-button">START PRACTICE</button>
                        </div>
                        <div>
                            <img src="/homework-exam.svg" alt="..." />
                        </div>
                    </div>
                    <div class="join-live-class">
                        <div class="join-live-top">
                            <div class="join-button">
                                <p class="join-title">Join Live Classes</p>
                                <button class="join-all-button"><u>See all</u></button>
                            </div>
                            <div class="join-carousel-button" data-carousel-prev>
                                <button class="join-prev">
                                    <svg class="m-auto" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M6.46536 1.55566L1.66537 6.35567L6.46536 11.1557M12.332 6.35567H1.66537H12.332Z" stroke="#ADAFB6" stroke-width="2" />
                                    </svg>
                                </button>
                                <button class="join-next" data-carousel-next>
                                    <svg class="m-auto" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.53464 1.55566L11.3346 6.35567L6.53464 11.1557M0.667969 6.35567H11.3346H0.667969Z" stroke="#6F747F" stroke-width="2" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                        <div class="join-live-container" >
                            <div class='carousel'>

                                <LiveClass
                                    labelName="live"
                                    classType="Science & Technology"
                                    class="Metallic & Non Metallic Propperties and all Things red"
                                    teacherName="Bella Thorne"
                                    startTime="Started at 1:30 PM"
                                    data-carousel="active"
                                />
                                <LiveClass
                                    labelName="replay"
                                    classType="Primary English"
                                    class="Metallic & Non Metallic Propperties and all Things red"
                                    teacherName="Bella Thorne"
                                    startTime="Available for 2hrs"
                                />
                                <LiveClass
                                    labelName="upcoming"
                                    classType="Primary Mathematics"
                                    class="Metallic & Non Metallic Propperties and all Things red"
                                    teacherName="Bella Thorne"
                                    startTime="Aug 19, 3:00 PM"
                                />
                                <LiveClass
                                    labelName="upcoming"
                                    classType="Primary Mathematics"
                                    class="Metallic & Non Metallic Propperties and all Things red"
                                    teacherName="Bella Thorne"
                                    startTime="Aug 19, 3:00 PM"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="take-mock-exam">
                        <div class="join-live-top">
                            <div class="join-button">
                                <p class="join-title">Take Mock Exams</p>
                                <button class="join-all-button"><u>See all</u></button>
                            </div>
                            <div class="join-carousel-button" data-carousel-prev>
                                <button class="join-prev">
                                    <svg class="m-auto" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M6.46536 1.55566L1.66537 6.35567L6.46536 11.1557M12.332 6.35567H1.66537H12.332Z" stroke="#ADAFB6" stroke-width="2" />
                                    </svg>
                                </button>
                                <button class="join-next" data-carousel-next>
                                    <svg class="m-auto" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.53464 1.55566L11.3346 6.35567L6.53464 11.1557M0.667969 6.35567H11.3346H0.667969Z" stroke="#6F747F" stroke-width="2" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                        <div class="take-exam-container" >
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
                    <div class='quiz-content'>
                        <button class="quiz-button">
                            <img src='/quiz-button.svg'></img>
                            PLAY QUIZ
                        </button>
                    </div>
                    <div class="help-frame">
                        <div class="homework-practice">
                            <p class="homework-label">HOMEWORK HELP</p>
                            <h2 class="homework-title">Get Homework help from experienced tutors</h2>
                            <p class="homework-description">Ask a question and get detailed explanations to difficult questions</p>

                            <button class="homework-button">ASK A QUESTION</button>
                        </div>
                        <div>
                            <img src="/help-frame.svg" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
