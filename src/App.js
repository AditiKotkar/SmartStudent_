import { faArrowRightFromBracket, faCircleInfo, faCircleUser, faEllipsisVertical, faGear, faHouse, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState } from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import './App.css';


import homework from './images/Homework1.png';
import syllabus from './images/Syllabus2.png';
import chat from './images/chat box 3.png';
import attendence from './images/Attendence4.png';
import feedback from './images/feedback8.png';
import calender from './images/Calender7.png';
import lecture from './images/video 5.png';
import paper from './images/Qpaper6.png';
import reports from './images/report9.png';
import results from './images/result10.png';

import Homework from './Homework';
import Attendence from './Attendence';
import Calender from './Calender';
import Chat from './Chat';
import Feedback from './Feedback';
import Paper from './Paper';
import Reports from './Reports';
import Results from './Results';
import Syllabus from './Syllabus';
import Lecture from './Lecture';

const App = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };
  return (
    <div className="content">
     <div className="bgimg">

     <nav className="navbar">
      <div className="max-width">
        <ul className={`menu ${isActive ? 'active' : ''}`}>
          <li><FontAwesomeIcon icon={faHouse} /><a href="#Home" className="menu-btn">Home</a></li>
          <li><FontAwesomeIcon icon={faCircleUser} /><a href="#Profile" className="menu-btn">Profile</a></li>
          <li><FontAwesomeIcon icon={faCircleInfo} /><a href="#About" className="menu-btn">About School</a></li>
          <li><FontAwesomeIcon icon={faGear} /><a href="#Setting" className="menu-btn">Setting</a></li>
          <li><FontAwesomeIcon icon={faArrowRightFromBracket} /><a href="#Logout" className="menu-btn">Logout</a></li>
        </ul>
        <div className="menu-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isActive ? faTimes : faEllipsisVertical} />
        </div>
      </div>
    </nav>

                <div className="img-1"></div>
                <div className="Name">
                <span className="hiSaiChudhari">Hi, Sai Chudhari</span>
                <span className="rollNumber1">Roll Number : 01</span>
                <span className="class12Std">Class : 12 Std</span>
                </div>
                
            </div>

            <div className="con">
            <div className="contener">
            <Link to="/Homework">Homework</Link>
                <div className="img">
                    <img src={homework} alt="Homework" />
                </div>
                <h1>Homework</h1>
            </div>

        <div className="contener">
        <Link to="/Syllabus">Syllabus</Link>
            <div className="img">
                <img src={syllabus} alt="Syllabus" />
            </div>
            <h1>Syllabus</h1>
        </div>
 
        <div className="contener">
        <Link to="/Chat">Chat</Link>
            <div className="img">
                <img src={chat} alt="Chat" />
            </div>
            <h1>Chat Option</h1>
        </div>
             
        <div className="contener">
            <div className="img">
            <Link to="/Attendence">Attendence</Link>
                <img src={attendence} alt="Attendence_Sheet" />
            </div>
            <h1>Attendence Sheet</h1>
        </div>
        
        <div className="contener">
            <div className="img">
            <Link to="/Lecture">Lecture</Link>
                <img src={lecture} alt="Video_Lecture" />
            </div>
            <h1>Video Lecture</h1>
        </div>
             
        <div className="contener">
            <div className="img">
            <Link to="/Paper">Paper</Link>
                <img src={paper} alt="QPaper"/>
            </div>
            <h1>Previous Year Question Paper</h1>
        </div>
     
        <div className="contener">
            <div className="img">
            <Link to="/Calender">Calender</Link>
                <img src={calender} alt="Calender"/>
            </div>
            <h1>Event Calender</h1>
        </div>
            
        <div className="contener">
            <div className="img">
            <Link to="/Feedback">Feedback</Link>
                <img src={feedback} alt="Feedback" />
            </div>
            <h1>Feedback of Teacher</h1>
        </div>

        <div className="contener">
            <div className="img">
            <Link to="/Reports">Reports</Link>
                <img src={reports} alt="report" />
            </div>
            <h1>Reports</h1>
        </div>
 
        <div className="contener">
            <div className="img">
            <Link to="/Results">Results</Link>
                <img src={results} alt="result"/>
            </div>
            <h1>Results</h1>
        </div>
            <Routes>
            <Route path='/Homework' element={<Homework />} />
            <Route path='/Syllabus' element={<Syllabus />} />
            <Route path='/Chat' element={<Chat />} />
            <Route path='/Attendence' element={<Attendence />} />
            <Route path='/Lecture' element={<Lecture />} />
            <Route path='/Paper' element={<Paper />} />
            <Route path='/Calender' element={<Calender />} />
            <Route path='/Feedback' element={<Feedback />} />
            <Route path='/Reports' element={<Reports />} />
            <Route path='/Results' element={<Results />} />
            </Routes>
        </div>
            </div>
  );
}

export default App;
