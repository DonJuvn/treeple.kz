import React from "react";
const FirstPage = () => {
   return (
      <div id="first-page">
         <div className="list">
            <p id="none">Almaty</p>
            <p id="grey">When</p>
            <p>2 travelers</p>
            <p id="grey">Budget</p>
         </div>
         <div className="left">
            <div className="title">
               <h1 id="title">Where to today?</h1>
               <div className="mark">
                  <img src="img/mark.png" alt="" />
                  <p>
                     Hey there, where would you like to go? I’m here to assist
                     you in planning experience. Ask me anything travel related.
                  </p>
               </div>
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
            <div className="travel">
               <img id="main" src="img/travel-differently.png" alt="" />
               <img id="play" src="img/play.png" alt="" />
               <p>Travel differently.</p>
            </div>
            <div className="get-started">
               <h3 id="get-started">Get started</h3>
               <div className="carousel">
                  <div className="item">
                     <img src="img/gs1.png" alt="" />
                     <div className="filter"></div>
                     <p>Take our travel quiz</p>
                  </div>
                  <div className="item">
                     <img src="img/gs2.png" alt="" />
                     <div className="filter"></div>
                     <p>Create a trip</p>
                  </div>
                  <div className="item">
                     <img src="img/gs3.png" alt="" />
                     <div className="filter"></div>
                     <p>Creater tools</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FirstPage;
