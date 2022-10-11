import React from "react";
import { Route, Routes } from "react-router-dom";

const Chat = React.lazy(() => import("../view/chat/Chat"));

function ChatRoutes() {
  return (
    <Routes>
      <Route path="/chat" element={<Chat/>} />
    </Routes>
  );
}

export default ChatRoutes;
