import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const socket = io('http://localhost:5000');

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Handle incoming messages
    socket.on('message', (message) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    // Handle typing indicator
    socket.on('typing', () => {
      setIsTyping(true);
    });

    socket.on('stopTyping', () => {
      setIsTyping(false);
    });

    // Cleanup the socket listeners when component unmounts
    return () => {
      socket.off('message');
      socket.off('typing');
      socket.off('stopTyping');
    };
  }, []);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="profile-avatar"></div>
        <div className="profile-info">
          <strong>Kristine</strong>
          <p>Online</p>
        </div>
      </div>

      <MessageList messages={messages} />
      {isTyping && <div>Someone is typing...</div>}
      <MessageInput socket={socket} />
    </div>
  );
};

export default ChatWindow;
