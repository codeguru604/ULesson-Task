import React from 'react';
import ChapterCard from '../../Components/ChapterCard/ChapterCard'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';

const Mathematics = () => {
    return (
        <div className='flex w-full'>
            <Navbar />
            <div className='ma-body'>
                <div className='ma-top-bar w-full flex pt-12'>
                    <Link className="prev-btn" to={'/'}>
                        <div className='p-4 pl-12'>
                            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.10986 11.21L0.999863 6.32L6.10986 1" stroke="#313848" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round" />
                                <path d="M17.0005 6L1.00049 6" stroke="#313848" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </Link>
                    <div className='ma-title pt-2 w-1/2'>
                        <p className='font-[Mulish] font-semibold text-[24px] leading-[27.41px]'>Mathematics</p>
                        <p className='mt-2 font-["M_PLUS_Rounded_1c"] text-[#313848] font-bold text-[14px] leading-[15.29px] opacity-50'>16 ChapterCards / 140 Lessons</p>
                    </div>
                    <div className='search-box w-1/2 z-10'>
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" className="z-10 w-[500px] h-[48px] top-[16px] left-[40.41px] border border-1.5 border-gray-300 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[40px] focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:w-[340px] xl:w-[500px]" placeholder="Search for a lesson or topic" required />
                        </div>
                    </div>
                    <div className='fixed top-[-16px] right-[0px] z-0'>
                        <svg width="156" height="214" viewBox="0 0 156 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.3">
                                <path d="M0.309628 4.30237C-2.93785 -2.04837 21.1633 -17.6997 25.723 -15.849C37.5235 -11.0578 33.9078 53.4078 22.2773 51.6322C9.98598 49.7533 25.2227 9.2721 15.6407 2.06646C12.9691 0.0560188 1.72568 7.07377 0.309628 4.30237Z" fill="#EA7052" />
                                <path d="M0.00239139 82.043C0.634894 67.7256 56.0591 51.5482 57.1448 58.0868C57.7301 61.6286 33.2324 74.2267 10.264 82.8697C6.89384 84.138 -0.148654 85.6129 0.00239139 82.043Z" fill="#EA7052" />
                                <path d="M40.5586 141.211C41.5876 140.882 63.7252 138.881 63.8668 133.15C63.999 127.682 42.0313 125.277 42.0313 125.277L40.5586 141.211Z" fill="#EA7052" />
                                <path d="M35.5918 86.7967C27.1238 90.0472 -0.5081 126.996 6.94033 137.264C10.2161 141.774 25.7172 134.906 30.5884 137.95C37.6686 142.375 34.1663 171.771 44.5412 170.38C52.1973 169.347 55.728 79.0743 35.5918 86.7967ZM37.9707 122.289C36.0543 125.108 24.5843 125.568 23.1777 122.073C21.6861 118.372 28.4077 106.835 32.6464 107.418C35.0631 107.737 39.6039 119.884 37.9707 122.289Z" fill="#EA7052" />
                                <path d="M79.3934 107.625C80.1487 90.3955 146.854 70.93 148.157 78.7932C148.865 83.0584 119.373 98.2212 91.732 108.621C87.6915 110.152 79.2141 111.928 79.3934 107.625Z" fill="#EA7052" />
                                <path d="M128.202 178.836C129.439 178.432 156.089 176.027 156.259 169.131C156.419 162.555 129.977 159.652 129.977 159.652L128.202 178.836Z" fill="#EA7052" />
                                <path d="M122.236 113.346C112.04 117.254 78.7818 161.728 87.7596 174.082C91.7056 179.512 110.36 171.245 116.222 174.908C124.747 180.235 120.527 215.606 133.017 213.943C142.221 212.703 146.469 104.055 122.236 113.346ZM125.096 156.063C122.793 159.454 108.981 159.999 107.301 155.8C105.507 151.337 113.588 137.462 118.696 138.157C121.603 138.551 127.069 153.169 125.096 156.063Z" fill="#EA7052" />
                                <path d="M114.42 43.4128C115.411 43.0933 136.718 41.1674 136.86 35.6528C136.992 30.3919 115.845 28.0714 115.845 28.0714L114.42 43.4128Z" fill="#EA7052" />
                                <path d="M109.642 -8.96132C101.485 -5.83293 74.8921 29.7349 82.0667 39.6087C85.2198 43.9489 100.145 37.3446 104.827 40.2663C111.643 44.522 108.264 72.8091 118.261 71.4751C125.624 70.498 129.023 -16.3924 109.642 -8.96132ZM112.125 25.545C110.397 28.0909 100.041 28.5043 98.7761 25.3477C97.4356 22.0032 103.496 11.5846 107.32 12.1107C109.5 12.4113 113.607 23.3842 112.125 25.545Z" fill="#EA7052" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className='ma-container p-12'>
                    <div className='resume-learning pt-4'>
                        <p className='font-bold text-[18px] font-["M_PLUS_Rounded_1c"] leading-[19.66px] tracking-[0.2px]' >Resume learning</p>
                        <div className='resume-class rounded-lg w-[495px] h-[105px] bg-[#EA7052] mt-4 flex items-center'>
                            <div className='w-1/4 pl-8'>
                                <svg width="67" height="70" viewBox="0 0 67 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M59.465 46.089C41.8882 48.8852 25.2646 48.8852 7.68458 46.089C5.49321 45.7403 3.80957 43.987 3.50494 41.8002C1.92283 30.3842 1.92283 18.8052 3.50494 7.38588C3.80957 5.19914 5.49321 3.44583 7.68458 3.09713C25.2613 0.300958 41.8849 0.300958 59.465 3.09713C61.6563 3.44583 63.34 5.19914 63.6446 7.38588C65.2267 18.8019 65.2267 30.3809 63.6446 41.8002C63.34 43.987 61.6563 45.7403 59.465 46.089Z" fill="#F9AD6D" stroke="black" strokeWidth="1.31846" />
                                    <path d="M26.665 11.7884V36.351C26.665 37.3873 27.8442 37.9902 28.6893 37.3873L45.9713 25.1044C46.6854 24.596 46.6854 23.5401 45.9713 23.0317L28.6893 10.7488C27.841 10.1459 26.665 10.7488 26.665 11.7851V11.7884Z" fill="white" stroke="black" strokeWidth="1.31846" />
                                    <path opacity="0.2" d="M26.8403 12.3291L44.0682 24.5018L26.8403 36.8917C26.8403 37.928 28.0195 38.5309 28.8646 37.928L46.1466 25.6451C46.8607 25.1367 46.8607 24.0808 46.1466 23.5724L28.8646 11.2895C28.0163 10.6866 26.8403 11.2895 26.8403 12.3258V12.3291Z" fill="black" />
                                    <path d="M26.665 11.7884V36.351C26.665 37.3873 27.8442 37.9902 28.6893 37.3873L45.9713 25.1044C46.6854 24.596 46.6854 23.5401 45.9713 23.0317L28.6893 10.7488C27.841 10.1459 26.665 10.7488 26.665 11.7851V11.7884Z" stroke="black" strokeWidth="1.31846" />
                                    <path d="M2.89957 59.2462H63.7041C64.7569 59.2462 65.6045 60.4226 65.6045 61.8825C65.6045 63.3425 64.7569 64.5201 63.7041 64.5201H2.89957C1.84677 64.5201 1 63.3437 1 61.8825C1 60.4214 1.84763 59.2462 2.89957 59.2462Z" fill="#F9AD6D" stroke="black" strokeWidth="1.31846" />
                                    <path d="M16.3885 55.2911H18.3733C19.7484 55.2911 20.8555 56.3982 20.8555 57.7721V66.7074C20.8555 68.0825 19.7484 69.1885 18.3733 69.1885H16.3885C15.0134 69.1885 13.9062 68.0825 13.9062 66.7074V57.7721C13.9062 56.3971 15.0134 55.2911 16.3885 55.2911Z" fill="#67BD99" stroke="black" strokeWidth="1.31846" />
                                </svg>
                            </div>
                            <div className='resume-desc w-2/4 text-white font-["M_PLUS_Rounded_1c"] leading-[19.66px] tracking-[0.2px] font-semobold text-center'>
                                <p className='text-[16px]'>Properties of Plane Shpaes</p>
                                <p className='text-[14px]'>You've watched 3 of 7 lessons</p>
                            </div>
                            <div className='bg-opacity-25 pt-[18px] pl-[16px] bg-white rounded-[50px] w-[50px] h-[50px] items-center  items-center ml-[35px]'>
                                <div className='m-auto'>
                                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.7856 11.4184L16.9999 6.42857L11.7856 1" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round" />
                                        <path d="M0.672852 6.10205L16.9994 6.10205" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='chapter-container pt-6 w-full mt-4'>
                        <p className='font-bold text-[18px] font-["M_PLUS_Rounded_1c"] leading-[19.66px] tracking-[0.2px]' >All ChapterCards</p>
                        <div className='flex flex-wrap gap-5 mt-4'>
                            <Link to=''>
                                <ChapterCard
                                    chapterNumber='1'
                                    chapterName='Properties Of Plane Shapes'
                                />
                            </Link>
                            <ChapterCard
                                chapterNumber='2'
                                chapterName='Indices, Standard Form And Logarithm'
                            />
                            <ChapterCard
                                chapterNumber='3'
                                chapterName='Fractions, Decimals, Percentages And N...'
                            />
                            <ChapterCard
                                chapterNumber='4'
                                chapterName='Introduction To Linear Equation'
                            />
                            <ChapterCard
                                chapterNumber='5'
                                chapterName='Introduction To Linear Equation'
                            />
                            <ChapterCard
                                chapterNumber='6'
                                chapterName='Introduction To Linear Equation'
                            />
                            <ChapterCard
                                chapterNumber='7'
                                chapterName='Introduction To Linear Equation'
                            />
                            <ChapterCard
                                chapterNumber='8'
                                chapterName='Introduction To Linear Equation'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mathematics;