import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3774 4.12501C17.3968 2.21189 19.4609 0.901855 21.8321 0.901855H32.7489V23.3701H21.8306C17.161 23.3701 17.0609 27.7625 17.0556 27.9966L17.0555 28H16.2403H15.6919C15.6919 27.8095 15.6129 23.3701 10.9615 23.3701H0.0476911L0 22.7122V0.901855H10.9183C13.2894 0.901855 15.3536 2.21189 16.3774 4.12501ZM7.3878 12.2316C6.65008 11.7151 6.02264 11.125 5.50251 10.4585L4.23273 11.3573C4.64854 12.1725 5.23276 12.9934 5.98687 13.8172C6.7395 14.641 7.63669 15.3826 8.67695 16.0405C9.71721 16.6984 10.8871 17.2308 12.1867 17.6391C13.4863 18.0474 14.8902 18.2509 16.3984 18.2509C17.9067 18.2509 19.3106 18.0474 20.6102 17.6391C21.9097 17.2308 23.0797 16.6984 24.1199 16.0405C25.1587 15.3826 26.0559 14.641 26.81 13.8172C27.5626 12.9934 28.1483 12.1739 28.5641 11.3573L27.2899 10.4585C26.7698 11.1236 26.1408 11.7151 25.4046 12.2316C24.6669 12.7481 23.8651 13.1723 22.9992 13.5056C22.1333 13.8389 21.2182 14.0928 20.2569 14.2674C19.2957 14.4419 18.3284 14.53 17.3582 14.53H15.4342C14.464 14.53 13.4967 14.4419 12.5355 14.2674C11.5742 14.0928 10.6591 13.8389 9.79322 13.5056C8.92584 13.1723 8.12403 12.7481 7.3878 12.2316Z" fill="#7B7FDA" />
        </svg>
        <svg width="136" height="25" viewBox="0 0 136 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.6207 24.2616C0.903633 24.2616 0.486328 20.786 0.486328 17.0074V5.43203H5.12288V16.4995C5.12288 19.1658 5.57595 20.3128 8.08574 20.3128C10.0724 20.3128 12.1291 19.3346 13.0353 18.8613V5.43203H17.6718V23.8562H13.0353V21.8652C11.7804 22.7438 9.34063 24.2616 6.6207 24.2616ZM23.526 23.8562V0H28.2669V20.1454H38.9678V23.8576H23.526V23.8562ZM50.7849 24.2616C44.7892 24.2616 40.9902 22.1696 40.9902 14.9485C40.9902 7.42305 44.9292 4.99487 50.2976 4.99487C55.8045 4.99487 58.0356 8.50369 58.0356 14.2748V15.895H45.6267C45.6267 19.9448 48.2409 20.6186 51.6225 20.6186C52.9475 20.6186 55.2128 20.18 56.7807 19.8756L57.5125 23.3512C55.9431 23.823 53.399 24.2616 50.7849 24.2616ZM45.7311 12.8897H53.2604C53.2947 10.1225 52.1456 8.19926 49.8445 8.19926C47.5076 8.19926 45.9397 9.85267 45.7311 12.8897ZM67.3773 24.2616C64.6931 24.2616 62.5663 23.924 60.9642 23.4854L61.5216 20.0098C63.5082 20.3128 65.4606 20.6172 66.9242 20.6172C69.887 20.6172 70.7589 19.74 70.7589 18.7272C70.7589 15.8921 61.1728 17.0059 61.1728 10.4933C61.1728 6.78102 64.6588 4.9588 68.6321 4.9588C70.8632 4.9588 72.8842 5.3974 74.3492 5.90381L73.5817 9.24383C72.0824 8.90622 70.6531 8.56861 68.6321 8.56861C66.5054 8.56861 65.8094 9.479 65.8094 10.2552C65.8094 13.1912 75.3254 12.3804 75.3254 18.4891C75.3239 23.1146 70.5488 24.2616 67.3773 24.2616ZM84.5955 24.2616C81.9114 24.2616 79.7846 23.924 78.1825 23.4854L78.7399 20.0098C80.7265 20.3128 82.6789 20.6172 84.1425 20.6172C87.1053 20.6172 87.9772 19.74 87.9772 18.7272C87.9772 15.8921 78.3911 17.0059 78.3911 10.4933C78.3911 6.78102 81.8771 4.9588 85.8504 4.9588C88.0815 4.9588 90.1025 5.3974 91.5675 5.90381L90.7999 9.24383C89.3006 8.90622 87.8714 8.56861 85.8504 8.56861C83.7237 8.56861 83.0276 9.479 83.0276 10.2552C83.0276 13.1912 92.5437 12.3804 92.5437 18.4891C92.5437 23.1146 87.7685 24.2616 84.5955 24.2616ZM104.708 24.2616C98.8167 24.2616 95.5066 20.685 95.5066 14.8129C95.5066 8.60468 99.3413 4.96024 104.988 4.96024C111.333 4.96024 114.26 8.57149 114.26 14.6441C114.26 20.988 110.217 24.2616 104.708 24.2616ZM104.953 20.6518C108.647 20.6518 109.553 17.9856 109.553 14.6456C109.553 11.5075 108.647 8.53831 104.882 8.53831C101.188 8.53831 100.177 11.5075 100.177 14.6802C100.177 18.0866 101.328 20.6518 104.953 20.6518ZM118.546 23.8562V5.43203H123.183V7.38987C124.578 6.41167 126.913 4.96024 129.562 4.96024C135.383 4.96024 135.766 8.36806 135.766 12.1813V23.8562H131.165V12.6877C131.165 9.8873 130.608 8.87448 128.062 8.87448C126.146 8.87448 124.332 9.7185 123.183 10.3259V23.8576H118.546V23.8562Z" fill="white" />
        </svg>

      </div>
      <ul>
        <li>
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.28565 11.8182H2.81818V18C2.81818 18.5523 3.2659 19 3.81818 19H8.27273V14.1818C8.27273 13.6295 8.72044 13.1818 9.27273 13.1818H12.7273C13.2796 13.1818 13.7273 13.6295 13.7273 14.1818V19H18.1818C18.7341 19 19.1818 18.5523 19.1818 18V11.8182H19.7144C20.4244 11.8182 21 11.2426 21 10.5325C21 10.1916 20.8645 9.86455 20.6234 9.62344L12.4142 1.41421C11.6332 0.633165 10.3668 0.633163 9.58579 1.41421L1.37656 9.62344C1.13545 9.86455 1 10.1916 1 10.5325C1 11.2426 1.57561 11.8182 2.28565 11.8182Z" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
            </svg>
            Home
          
        </li>
        <li>
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.69995 1.94922C8.21764 1.94922 9.44995 3.18153 9.44995 4.69922C9.44995 6.2169 8.21764 7.44922 6.69995 7.44922C5.17867 7.44922 3.94995 6.21749 3.94995 4.69922C3.94995 3.18095 5.17867 1.94922 6.69995 1.94922Z" stroke="white" stroke-width="1.5" />
            <path d="M17.9902 6.97942C18.105 6.71742 17.983 6.41234 17.721 6.30107C17.459 6.18622 17.1539 6.30825 17.039 6.57026L16.6299 7.52857C16.3499 7.48909 16.07 7.50703 15.869 7.62188C14.1103 8.73811 12.9151 9.17958 11.2497 9.74667C9.3295 10.4035 6.86374 10.2994 4.93636 10.3676C4.76408 10.3712 4.38722 10.3963 4.19341 10.4322C2.406 10.7301 1.3472 11.9827 1.20004 13.6445L1.19996 18.0009C1.19995 18.5532 1.64767 19.0009 2.19995 19.0009H9.20159C9.75387 19.0009 10.2016 18.5532 10.2016 18.0009L10.2017 13.5584C10.2986 13.3179 11.02 13.3143 11.4292 13.2066C12.8505 12.8262 19.8529 10.2599 17.5846 7.93055L17.9902 6.97942Z" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M12.3132 1H20.1154" stroke="white" stroke-width="1.5" />
            <path d="M12.3132 3.94727H17.5147" stroke="white" stroke-width="1.5" />
          </svg>

          Live Classes
        </li>
        <li>
          <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0362 7.54545C15.0362 11.1604 12.1057 14.0909 8.49075 14.0909C7.29853 14.0909 6.18077 13.7722 5.21802 13.2152L1.3999 14.0909L2.49075 10.1655C2.13993 9.36324 1.94529 8.47708 1.94529 7.54545C1.94529 3.9305 4.87579 1 8.49075 1C12.1057 1 15.0362 3.9305 15.0362 7.54545Z" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M18.1106 5.27246C20.4213 6.28292 22.036 8.58913 22.036 11.2725C22.036 12.2041 21.8414 13.0902 21.4906 13.8925L22.5425 17.8179L18.7633 16.9423C17.8005 17.4992 16.6828 17.8179 15.4906 17.8179C14.2983 17.8179 13.1806 17.4992 12.2178 16.9423" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M10.0768 5.63619C10.0768 6.14129 9.71894 6.61113 9.15272 6.82868L9.56091 7.89471C10.5666 7.50778 11.216 6.62141 11.216 5.63619L11.266 5.63631C11.266 5.63627 11.266 5.63623 11.266 5.63619C11.2677 4.95097 10.9676 4.31199 10.4257 3.83779C9.90466 3.38102 9.21774 3.13164 8.49046 3.13164C7.76309 3.13164 7.07624 3.38277 6.55529 3.83773L6.55526 3.83776C6.01327 4.312 5.71318 4.951 5.71318 5.63619V5.76573C5.71318 5.86835 5.79693 5.9521 5.89955 5.9521H6.71773C6.82034 5.9521 6.90409 5.86835 6.90409 5.76573V5.63619C6.90409 4.92025 7.60744 4.32255 8.49046 4.32255C9.37348 4.32255 10.0768 4.92025 10.0768 5.63619ZM7.75864 10.9544C7.75864 11.1485 7.83574 11.3346 7.97298 11.4718C8.11022 11.6091 8.29637 11.6862 8.49046 11.6862C8.68455 11.6862 8.87069 11.6091 9.00793 11.4718C9.14517 11.3346 9.22227 11.1485 9.22227 10.9544C9.22227 10.7603 9.14517 10.5741 9.00793 10.4369C8.87069 10.2997 8.68455 10.2225 8.49046 10.2225C8.29637 10.2225 8.11022 10.2997 7.97298 10.4369C7.83574 10.5741 7.75864 10.7603 7.75864 10.9544Z" fill="white" stroke="white" stroke-width="0.1" />
          </svg>
          Homework Help</li>
        <li>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.60584 14.4593C9.60322 14.9286 10.1161 15.2191 10.5172 14.9755L14.7635 12.3973C15.1463 12.1648 15.1487 11.6101 14.768 11.3743L10.5507 8.7627C10.1523 8.51596 9.63743 8.80082 9.63481 9.26946L9.60584 14.4593Z" fill="white" />
            <circle cx="12" cy="12" r="10" stroke="white" stroke-width="1.5" />
          </svg>
          Video Library</li>
        <li>
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4434 1V4.57092C14.4434 5.43418 15.1298 6.13772 15.9804 6.13772H19.3603" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M16.9086 19H3.46633C2.11584 19 1.01904 17.8819 1.01904 16.5053V3.4947C1.01904 2.11805 2.11584 1 3.46633 1H14.4426L19.3558 6.13771V16.5053C19.3558 17.8819 18.2628 19 16.9086 19Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M4 13.5L4.78107 11.8077M9.07692 13.5L8.29586 11.8077M4.78107 11.8077L6.53846 8L8.29586 11.8077M4.78107 11.8077H8.29586" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M13.4614 8.4231V13.5" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M10.9231 10.9615L16 10.9615" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
          </svg>
          Mock Exam</li>
        <li>
          <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2059 0.999878V6.21573C14.2059 8.90549 12.0549 11.0864 9.40194 11.0864C7.24614 11.0864 5.42495 9.647 4.81788 7.66481C4.67926 7.20924 4.60278 6.71976 4.60278 6.21573V0.999878H14.2059Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M4.78951 7.47534C2.82492 6.68538 1.45783 5.13131 1.19971 1.88422H4.67957" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M14.105 7.47534C16.0696 6.68538 17.4367 5.13131 17.6948 1.88422H14.2149" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M9.4082 13.9442V11.3077" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M12.9214 13.9451H5.89478V16.9547H12.9214V13.9451Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M9.38083 3.48083L10.1425 5.02435L11.8454 5.27053L10.6112 6.47017L10.9041 8.16607L9.38083 7.36892L7.85756 8.16607L8.1505 6.47017L6.91626 5.27053L8.61919 5.02435L9.38083 3.48083Z" fill="white" />
          </svg>
          Multiplayer Quiz</li>
        <li>
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4187 9H16.7187" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M10.4187 13.6H16.7187" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M7.7188 12.7H5.0188V15.4H7.7188V12.7Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M14.843 1V4.57092C14.843 5.43418 15.5295 6.13772 16.38 6.13772H19.76" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M17.3082 19H3.86599C2.5155 19 1.4187 17.8819 1.4187 16.5053V3.4947C1.4187 2.11805 2.5155 1 3.86599 1H14.8423L19.7555 6.13771V16.5053C19.7555 17.8819 18.6624 19 17.3082 19Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M8.04836 7L5.72275 9.20566L4.39966 7.94528" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
          </svg>
          Practice Exam</li>
        <li>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5511 4.16732C15.4416 2.27059 13.3897 1 10.9964 1C7.4008 1 4.56963 3.87439 4.56963 7.42251V8.79197C4.56963 10.9926 3.93513 13.131 2.75887 14.9838M19.2376 14.9874C18.4176 13.6949 17.861 12.2632 17.5975 10.7692M13.6346 18.3966C13.6346 19.8356 12.4547 21 10.9964 21C9.53815 21 8.35819 19.8356 8.35819 18.3966M19.2597 18.3965H2.73655C1.77922 18.3965 1 17.6312 1 16.6829C1 15.7382 1.77551 14.9692 2.73655 14.9692H19.2635C20.2208 14.9692 21 15.7345 21 16.6829C20.9963 17.6312 20.2171 18.3965 19.2597 18.3965ZM20.306 7.47385C20.306 9.29187 18.8125 10.7657 16.9702 10.7657C15.1279 10.7657 13.6344 9.29187 13.6344 7.47385C13.6344 5.65584 15.1279 4.18204 16.9702 4.18204C18.8125 4.18204 20.306 5.65584 20.306 7.47385Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
          </svg>
          Notifications</li>
        <li>
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9128 17.046H1.18164V0.272461" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M14.332 4.54323L18.0754 4.47168L18.1469 8.21218" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M4.67578 12.3734L9.3464 7.9031L12.0309 10.4731L17.9807 4.47168" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
          </svg>
          Learning Report</li>
        {/* Add more sidebar items as needed */}
      </ul>
      <ul>
        <li>
          <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.799805 1H4.2998L4.8924 5M15.7998 5H22.2998L20.4812 12.729C20.3749 13.1808 19.9718 13.5 19.5078 13.5H7.14784C6.6586 13.5 6.24119 13.146 6.16127 12.6634L4.8924 5M4.8924 5H10.3461M13.2998 1.5V10M13.2998 10L10.3461 7.5M13.2998 10L16.2998 7.5" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
            <circle cx="8.2998" cy="18" r="1.5" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
            <circle cx="17.2998" cy="18" r="1.5" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
          </svg>
          Buy Learning plan</li>
        <li>
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.749756 2C0.749756 1.30964 1.3094 0.75 1.99976 0.75H17.9998C18.6901 0.75 19.2498 1.30964 19.2498 2V13C19.2498 13.6904 18.6901 14.25 17.9998 14.25H1.99976C1.3094 14.25 0.749756 13.6904 0.749756 13V2Z" stroke="white" stroke-width="1.5" />
            <line x1="-0.000244141" y1="4.51324" x2="19.9998" y2="4.51324" stroke="white" stroke-width="1.5" />
            <rect x="2.99976" y="8.00024" width="14" height="1.26316" rx="0.631579" fill="white" />
          </svg>
          Manage Subscription</li>
        {/* Add more sidebar items as needed */}
      </ul>
    </div>
  );
}

export default Navbar;