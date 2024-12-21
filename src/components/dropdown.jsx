import React, { useState } from "react";
const Dropdown = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div id="dropdown">
         <div className="container">
            <div className="dropdown">
               <button className="dropdown-toggle" onClick={toggleDropdown}>
                  New Chat
                  <img
                     src="img/arrow-down.svg"
                     alt="arrow"
                     className="arrow-icon"
                  />
               </button>
               {isOpen && (
                  <ul className="dropdown-menu">
                     <li>Almaty Travel Tips</li>
                     <li>Exploring Europe</li>
                     <li>Backpacking Asia</li>
                     <li>Adventure in Patagonia</li>
                  </ul>
               )}
            </div>
            <div className="actions">
               <button>Invite</button>
               <button>
                  <img src="img/create.png" alt="" />
                  Create a tip
                  </button>
            </div>
         </div>
      </div>
   );
};

export default Dropdown;
