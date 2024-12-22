import React, { useState } from "react";
const Dropdown = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [activeItem, setActiveItem] = useState("Almaty Travel Tips");

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   const handleItemClick = (item) => {
      setActiveItem(item);
      setIsOpen(false); // Close dropdown after selection
   };

   const menuItems = [
      { title: "New chat", link: "/" },
      { title: "Almaty Travel Tips", link: "/second" },
      { title: "Exploring Europe", link: "/third" },
      { title: "Backpacking Asia", link: "#" },
   ];

   return (
      <div id="dropdown">
         <div className="container">
            <div className="dropdown">
               <button className="dropdown-toggle" onClick={toggleDropdown}>
                  {activeItem}
                  <img
                     src="img/arrow-down.svg"
                     alt="arrow"
                     className="arrow-icon"
                  />
               </button>
               {isOpen && (
                  <ul className="dropdown-menu">
                     {menuItems.map((item) => (
                        <li key={item.title}>
                           <a
                              href={item.link}
                              onClick={() => handleItemClick(item.title)}
                           >
                              {item.title}
                           </a>
                        </li>
                     ))}
                  </ul>
               )}
            </div>
            <div className="actions">
               <button>Invite</button>
               <button id="create">
                  <img src="img/create.png" alt="" />
                  <p>Create a tip</p>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Dropdown;
