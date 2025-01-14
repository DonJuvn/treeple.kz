import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

const FirstPage = () => {
   const [rightContentState, setRightContentState] = useState('default');
   const [hotelData, setHotelData] = useState(null);
   const [loading, setLoading] = useState(false);
   const [mapCenter, setMapCenter] = useState(null);
   const [hasChatMessages, setHasChatMessages] = useState(false); // Initialize to false
   const googleMapsApiKey = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
   const [chatMessages, setChatMessages] = useState([]);
   const [userMessage, setUserMessage] = useState("");
   const [messageError, setMessageError] = useState(false);

   useEffect(() => {
      // Load messages from local storage on component mount
      const savedMessages = localStorage.getItem('chatMessages');
      if (savedMessages) {
         setChatMessages(JSON.parse(savedMessages));
         setHasChatMessages(true); // Set true if saved messages exist
      }
   }, []);

   useEffect(() => {
      // Save messages to local storage every time messages state is updated
      try {
         localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
      } catch (e) {
         console.error("Error setting local storage:", e)
      }
   }, [chatMessages]);

   // Function to switch to the Google Maps content
   const showMap = () => {
      setRightContentState('map');
   };


   // --- API Fetching for Hotel Info ---
   useEffect(() => {
      if (rightContentState === 'info' && !hotelData) {
         const fetchHotelData = async () => {
            setLoading(true);
            try {
               // Placeholder for your API call - replace with your actual endpoint
               const response = await fetch('/api/hotel-details');
               if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
               }
               const data = await response.json();
               setHotelData(data);
               setLoading(false);
            } catch (error) {
               console.error("Could not fetch hotel data:", error);
               setLoading(false);
            }
         };

         fetchHotelData();
      }
   }, [rightContentState, hotelData]);

   // --- Update mapCenter when hotelData is available and state is 'map' ---
   useEffect(() => {
      if (rightContentState === 'map' && hotelData && hotelData.latitude && hotelData.longitude) {
         setMapCenter({
            lat: parseFloat(hotelData.latitude),
            lng: parseFloat(hotelData.longitude),
         });
      }
   }, [rightContentState, hotelData]);

   const renderRightContent = () => {
      switch (rightContentState) {
         case 'default':
            return (
                <>
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
                </>
            );
         case 'info':
            return loading ? (
                <p>Loading hotel information...</p>
            ) : hotelData ? (
                <>
                   <img id="increase" src="img/increase.png" alt="" />
                   <div className="name">
                      <h1>{hotelData.name || 'Loading...'}</h1>
                      <div className="reviews">
                         <img src="img/star.png" alt="" />
                         <p id="black">{hotelData.rating || '...'}</p>
                         <p>
                            {hotelData.reviews_count ? `${hotelData.reviews_count} reviews` : ''} {hotelData.city || ''}
                         </p>
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
                      <p onClick={showMap} style={{ cursor: 'pointer' }}>
                         Location
                      </p>
                      <p>Reviews</p>
                   </div>
                   <div className="bottom">
                      <div className="left">
                         <p>{hotelData.description || 'Loading description...'}</p>
                         <button style={{ border: "none", background: "none", color: "#007bff", padding: 0, cursor: "pointer" }}>
                            Read more
                         </button>
                      </div>
                      <div className="right">
                         <div className="price">
                            <p id="black">{hotelData.price || '...'}$</p>
                            <p>per night</p>
                         </div>
                         <div className="check">
                            <div className="left">
                               <p>Check in</p>
                               <p id="black">{hotelData.check_in || '...'}</p>
                            </div>
                            <div className="right">
                               <p>Check out</p>
                               <p id="black">{hotelData.check_out || '...'}</p>
                            </div>
                         </div>
                         <p id="much">2 adults</p>
                         <button id="book">Book</button>
                      </div>
                   </div>
                </>
            ) : (
                <p>Failed to load hotel information.</p>
            );
         case 'map':
            const mapContainerStyle = {
               height: '100%',
               width: '100%',
            };
            const defaultCenter = {
               lat: 0,
               lng: 0,
            };

            return (
                <LoadScript googleMapsApiKey={googleMapsApiKey}>
                   <GoogleMap
                       mapContainerStyle={mapContainerStyle}
                       center={mapCenter || defaultCenter}
                       zoom={14}
                   >
                      {mapCenter && <Marker position={mapCenter} />}
                   </GoogleMap>
                </LoadScript>
            );
         default:
            return null;
      }
   };


   const handleStartChat = async (isTravelRequest = false) => {
      setHasChatMessages(true);
      if(userMessage){
         const newMessages = [...chatMessages, { text: userMessage, isUser: true }];
         setChatMessages(newMessages);
         setUserMessage(""); // Clear the input box immediately

         try {
            let response;
            if(isTravelRequest){
               response = await axios.post('http://api.treeple.kz/api/travel', { query: userMessage});
            } else {
               response = await axios.post('http://api.treeple.kz/api/chat', { message: userMessage });
            }
            console.log("Response from backend:", response);
            console.log(response.data.response)
            setChatMessages(prevMessages => [...prevMessages, { text: response.data.response, isUser: false }]);
            setMessageError(false);
         } catch (error) {
            console.error('Failed to send message, with error:', error);
            if (error.response) {
               console.error("Error response data:", error.response.data)
               console.error("Error response headers:", error.response.headers)
            } else if (error.request) {
               console.error("Error request:", error.request)
            } else {
               console.error("Error message:", error.message)
            }

            setChatMessages(prevMessages => [...prevMessages, { text: "Failed to send message.", isUser: false }]);
            setMessageError(true);
         }

      }
   };

   const handleInputChange = (e) => {
      setUserMessage(e.target.value);
   }


   const handleTelegramClick = () => {
      handleStartChat();
   };

   const handleTravelClick = () => {
      handleStartChat(true);
   };

   useEffect(() => {
      // Add event listener for clicking on place names
      const handlePlaceClick = (e) => {
         if (e.target.classList.contains('place')) {
            const lat = parseFloat(e.target.dataset.lat);
            const lng = parseFloat(e.target.dataset.lng);
            if (!isNaN(lat) && !isNaN(lng)) {
               setMapCenter({ lat, lng });
               setRightContentState('map');
            }
         }
      };
      const chatMessagesDiv = document.querySelector('.chat-messages');
      if(chatMessagesDiv) {
         chatMessagesDiv.addEventListener('click', handlePlaceClick);
      }
      return () => {
         if(chatMessagesDiv){
            chatMessagesDiv.removeEventListener('click', handlePlaceClick);
         }
      }
   }, [chatMessages]);

   return (
       <div id="first-page">
          <div className="left">
             {/* Conditionally render the title only when there are no chat messages*/}
             {!hasChatMessages && (
                 <div className="title">
                    <h1 id="title">Where to today?</h1>
                    <div className="mark">
                       <img src="img/mark.png" alt="" />
                       <p>
                          Hey there, where would you like to go? I’m here to assist you in
                          planning experience. Ask me anything travel related.
                       </p>
                    </div>
                 </div>
             )}
             {/* Chat messages will only appear after the first message is sent */}
             {hasChatMessages && (
                 <div className="chat">
                    <div className="chat-messages">
                       {chatMessages.map((message, index) => (
                           <p key={index} className={`chat-message ${message.isUser ? 'user-message' : 'bot-message'}`}
                              dangerouslySetInnerHTML={{ __html: message.text }} />
                       ))}
                       {messageError && (
                           <p style={{textAlign: 'center', color: 'red'}}>Failed to send message.</p>
                       )}
                    </div>
                 </div>
             )}
             <div className="input">
                <input
                    type="text"
                    placeholder="Where are we going today?"
                    className="input-field"
                    value={userMessage}
                    onChange={handleInputChange}
                />
                <div className="icons">
                   <img id="create" src="img/create.png" alt="" />
                   <div className="social-media">
                      <img src="img/voice.png" alt="" />
                      <img src="img/telegram.png" alt="Send message" onClick={handleTelegramClick}/>
                      {/*<img src="img/paper-plane.png" alt="Send travel request" onClick={handleTravelClick} style={{marginLeft: "5px"}}/>*/}
                   </div>
                </div>
             </div>
          </div>
          <div className="right">{renderRightContent()}</div>
       </div>
   );
};

export default FirstPage;