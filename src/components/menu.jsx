import React, { useState } from "react";const Menu = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(true);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <div id="menu" className={isMenuOpen ? "menu-open" : "menu-closed"}>
         <div className="menu">
            <button id="toggle" onClick={toggleMenu}>
               <img
                  src={isMenuOpen ? "img/close.svg" : "img/menu.png"}
                  alt=""
               />
            </button>
            {isMenuOpen && (
               <>
                  <div className="navigation">
                     <img id='logo' src="img/logo.svg" alt="" />
                     <a href="#">
                        <img src="img/chats.png" alt="" />
                        Chats
                     </a>
                     <a href="#">
                        <img src="img/explore.png" alt="" />
                        Explore
                     </a>
                     <a href="#">
                        <img src="img/create.png" alt="" />
                        Create
                     </a>
                     <button id="new-chat">New chat</button>
                  </div>
                  <div className="account">
                     <div className="avatar">
                        <img src="img/traveller.png" alt="" />
                        <p>Traveller</p>
                     </div>
                     <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                     </div>
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

export default Menu;
