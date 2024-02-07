import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';


function Experiences() {
  return (
    <div>
      <p className='wedo'>What We Do</p>
      <div className='allExp'>
        <div className='experience1'>
          <FontAwesomeIcon icon={faCode} className='codeIcon'/>
          <h5>Frontend Development</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam et non tempore. Exercitationem error, nostrum officia atque quae sequi iure?</p>
        </div>
        <div className='experience1'>
        <FontAwesomeIcon icon={faCode} className='codeIcon'/>
          <h5>UI/UX Designer</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam et non tempore. Exercitationem error, nostrum officia atque quae sequi iure?</p>
        </div>
        <div className='experience1'>
        <FontAwesomeIcon icon={faCode} className='codeIcon'/>
          <h5>Video Editing</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam et non tempore. Exercitationem error, nostrum officia atque quae sequi iure?</p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
