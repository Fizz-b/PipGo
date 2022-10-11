import React, { useEffect, createContext, useContext, useState } from "react";
import Message from "../../component/Chat/Message";
import Input from "../../component/Chat/Input";
import "./_chat.scss";
import { auth, db } from "../../config/firebase";
import firebase from "firebase/app";

import { AuthContext } from "../../context/AuthContext";
import "./_chat.scss"
function Chat() {  
  const {currentUser}  = useContext(AuthContext) ;

  const [roomId, setRoomId] = useState("");
  useEffect(() => {
    
    const getRooms = async () => {
      const roomRef = await db.collection("rooms").add({
        ownerId: currentUser.uid,
        members: ["A6tH7BmMLmYsgEyFMPlB26pzaJ13", currentUser.uid], // can assing member id la sale
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
        
      setRoomId(roomRef.id);
    };
    getRooms();
    console.log("Im render")
  }, []);

  return (
    <section className="chat">
      <div className="container">
        <div className="chat-container">
          <div className="chat-header">
            <div className="chat-img">
              <img
                src="	https://seeklogo.com/images/B/beach-tour-logo-4505456896-seeklogo.com.png"
                alt=""
              />
            </div>
            <span className="chat-name">PipGo</span>
          </div>
          <div className="chat-content">
            <Message roomId={roomId} />
            <Input roomId={roomId} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chat;
