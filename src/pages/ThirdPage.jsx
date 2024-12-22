import React from "react";const ThirdPage = () => {
   return (
      <div id="third-page">
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
               <p>Алматы</p>
            </div>
            <div className="mark">
               <img src="img/mark.png" alt="" />
               <p>
                  Are you looking for information about <b>Almaty</b>? If you're
                  planning a trip there, I can help you put together an
                  itinerary. Let me know what you're interested in, like
                  museums, hiking, or local cuisine, and I can suggest some
                  great places to visit!
               </p>
            </div>
            <div className="chat">
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
            <a href="https://www.google.kz/maps/place/Гастроном+ESENTAI+GOURMET/@43.218328,76.9256897,17z/data=!4m14!1m7!3m6!1s0x38836f30f33672fb:0x68240eda7dfa686a!2z0JPQsNGB0YLRgNC-0L3QvtC8IEVTRU5UQUkgR09VUk1FVA!8m2!3d43.218328!4d76.92827!16s%2Fg%2F12m9l5q3l!3m5!1s0x38836f30f33672fb:0x68240eda7dfa686a!8m2!3d43.218328!4d76.92827!16s%2Fg%2F12m9l5q3l?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
               <img src="img/map.png" alt="" />
            </a>
         </div>
      </div>
   );
};

export default ThirdPage;
