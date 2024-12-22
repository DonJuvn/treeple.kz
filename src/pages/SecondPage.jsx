import React from "react";
const SecondPage = () => {
   return (
      <div id="second-page">
         <div className="list">
            <p id="none">Almaty</p>
            <p id="grey">When</p>
            <p>2 travelers</p>
            <p id="grey">Budget</p>
         </div>
         <div className="left">
            <div className="list1">
               <p id="black">
                  <img src="img/chat.png" alt="" />
                  Chat
               </p>
               <p>
                  <img src="img/search.png" alt="" />
                  Search
               </p>
               <p>
                  <img src="img/likes.png" alt="" />
                  Likes
               </p>
            </div>
            <div className="tour">
               <img src="img/traveller.png" alt="" />
               <p>Тур в Алматы на 2 дня</p>
            </div>
            <div className="mark">
               <img src="img/mark.png" alt="" />
               <div className="text">
                  <p>
                     <b>Almaty</b> is a vibrant city with a unique blend of
                     culture, nature, and modernity. Let's plan an exciting
                     itinerary for your trip! <br />
                     <br />
                     Day 1: Arrival in Almaty Upon your arrival
                     at Almaty International Airport, make your way to your
                     accommodation at <b>Ritz-Carlton Almaty﻿</b>. After
                     settling in, take a leisurely stroll around the city center
                     to get acquainted with the local atmosphere. <br />
                     <br />
                  </p>
                  <p id="none">
                     {" "}
                     Day 2: Explore Almaty's Cultural Heritage Start your day by
                     visiting <b>Central State Museum of Kazakhstan﻿</b> to
                     learn about the country's rich history. Then, head to 
                     <b>Panfilov Park﻿</b>, where you can admire the stunning 
                     <b>Zenkov Cathedral﻿</b>. For lunch, enjoy traditional
                     Kazakh cuisine at <b>Gakku Restaurant﻿</b>.
                  </p>
               </div>
            </div>
            <div className="ritz">
               <img src="img/ritz-carlton.png" alt="" />
               <h1>The Ritz-Carlton Almaty</h1>
               <p>Almaty</p>
            </div>
            <div className="chat">
               <button id="hint">What can i ask Treeple.kz? </button>
               <div className="input">
                  <input
                     type="text"
                     placeholder="Where are we going today?"
                     className="input-field"
                  />
                  <div className="icons">
                     <img id="create" src="img/create.png" alt="" />
                     <div className="social-media">
                        <img src="img/voice.png" alt="" />
                        <img src="img/telegram.png" alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="right">
            <img id="increase" src="img/increase.png" alt="" />
            <div className="name">
               <h1>The Ritz-Carlton Almaty</h1>
               <div className="reviews">
                  <img src="img/star.png" alt="" />
                  <p id="black">4.69</p>
                  <p>3.2k reviews Almaty</p>
               </div>
               <p>
                  <img src="img/bed.png" alt="" />
                  Hotel
               </p>
            </div>
            <img id="collage" src="img/collage.png" alt="" />
            <div className="list2">
               <p id="active">Overview</p>
               <p>Rooms</p>
               <p>Amenities</p>
               <p>Policies</p>
               <p>Location</p>
               <p>Reviews</p>
            </div>
            <div className="bottom">
               <div className="left">
                  <p>
                     The Ritz-Carlton Almaty is a luxury hotel located within
                     the Esentai Tower, one of the tallest buildings in
                     Kazakhstan. This hotel offers panoramic views of the city
                     and the Trans-Ili Alatau mountains. It features elegantly
                     designed rooms and suites...
                  </p>
                  <a href="#">Read more</a>
               </div>
               <div className="right">
                  <div className="price">
                     <p id="black">361$</p>
                     <p>per night</p>
                  </div>
                  <div className="check">
                     <div className="left">
                        <p>Check in</p>
                        <p id="black">Mar 18</p>
                     </div>
                     <div className="right">
                        <p>Check out</p>
                        <p id="black">Mar 22</p>
                     </div>
                  </div>
                  <p id="much">2 adults</p>
                  <button id="book">Book</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SecondPage;
