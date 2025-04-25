import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ChatMessage = ({ message }) => {
  return (
    <div className="border-bottom p-2">
      <span className="font-weight-bold">You:</span> {message}
    </div>
  );
};

const SupportChatButton = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showChatBox, setShowChatBox] = useState(false);

  const handleSendMessage = (event) => {
    event.preventDefault();
    setChatMessages([...chatMessages, newMessage]);
    setNewMessage('');
  };

  const handleShowChatBox = () => {
    setShowChatBox(true);
  };

  const handleHideChatBox = () => {
    setShowChatBox(false);
  };

  return (
    <div>
      <button id="support-chat-btn" className="btn btn-dark flex-fill " onClick={handleShowChatBox}>
        <i className="fa fa-comments"></i> VIA SUPPORT CHAT
      </button>
      {showChatBox && (
        <div className="chat-box" style={{ position: 'fixed', bottom: 0, right: 0, width: 300, height: 400, backgroundColor: '#fff', border: '1px solid #ddd', padding: 20, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div className="chat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 10, borderBottom: '1px solid #ddd' }}>
            <h5>Support Chat</h5>
            <button type="button" className="close" onClick={handleHideChatBox} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="chat-body" style={{ paddingTop: 20 }}>
            <div className="chat-messages" style={{ padding: 20, borderBottom: '1px solid #ddd' }}>
              {chatMessages.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
            </div>
            <form onSubmit={handleSendMessage}>
              <div className="form-group">
                <input type="text" className="form-control" value={newMessage} onChange={(event) => setNewMessage(event.target.value)} placeholder="Type a message..." />
              </div>
              <button type="submit" className="btn btn-dark w-100">Send</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportChatButton;