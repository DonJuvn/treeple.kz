import React, { useState, useEffect } from "react";

const Menu = () => {
   // Dynamically determine the initial state
   const [isMenuOpen, setIsMenuOpen] = useState(() => {
      return window.innerWidth > 768; // Default to `true` for web (desktop) and `false` for mobile
   });

   // Handle screen resize to update the state dynamically
   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth > 768) {
            setIsMenuOpen(true); // Automatically open the menu on desktop
         } else {
            setIsMenuOpen(false); // Automatically close the menu on mobile
         }
      };

      // Attach the resize listener
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on unmount
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

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
                     <img id="logo" src="img/logo.svg" alt="" />
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
