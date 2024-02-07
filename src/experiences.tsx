import React from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faObjectGroup, faVideo } from '@fortawesome/free-solid-svg-icons'


function Experiences() {
   return (
      <div className='experiences-container'>
         <p className='wedo'>What We Do</p>
         <div className='allExp'>
            <div className='experience1'>
               <div className='exp-header-section'>
                  <FontAwesomeIcon icon={faCode} className='codeIcon' />
                  <h5>Frontend Development</h5>
               </div>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam et non tempore. Exercitationem error, nostrum officia atque quae sequi iure?</p>
            </div>
            <div className='experience1'>
               <div className='exp-header-section'>
                  <FontAwesomeIcon icon={faObjectGroup} className='codeIcon' />
                  <h5>UI/UX Designer</h5>
               </div>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam et non tempore. Exercitationem error, nostrum officia atque quae sequi iure?</p>
            </div>
            <div className='experience1'>
               <div className='exp-header-section'>
                  <FontAwesomeIcon icon={faVideo} className='codeIcon' />
                  <h5>Video Editing</h5>
               </div>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam et non tempore. Exercitationem error, nostrum officia atque quae sequi iure?</p>
            </div>
         </div>
      </div>
   );
}

export default Experiences;





