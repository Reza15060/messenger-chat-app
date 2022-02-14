import React, { useState } from "react";
import "./chat-screen.css";
import { useHistory } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import ChatHeads from "../../components/chatheads/ChatHeads";
import Conversation from "../../components/conversation/Conversation";

function ChatScreen({ setUser, user }) {
  let history = useHistory();
  const [chatHeads, setChatHeads] = useState([]);
  const [receiver, setReceiver] = useState(null);

  React.useEffect(() => {
    // get from localstorage
    const user = JSON.parse(localStorage.getItem("user"));

    // if no user -> redirect
    if (user) setUser(user);
    else history.push("/");
  }, [history, setUser]);

  React.useEffect(() => {
    if (!user) return;
    //exclude admin from the chathead and show all chatheads
    (async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      setChatHeads(
        querySnapshot.docs
          .map((doc) => doc.data())
          .filter((obj) => obj.uid !== user.uid)
      );
    })();
  }, [user]);

  console.log(chatHeads);

  return (
    <div className="chat-screen">
      <div className="half-screen chat-heads">
        <ChatHeads items={chatHeads} setReceiver={setReceiver}  />
      </div>
      <div className="half-screen">
        <Conversation receiver={receiver} user={user} />
      </div>
    </div>
  );
}

export default ChatScreen;
