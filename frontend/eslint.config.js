import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const socket = io('http://localhost:5000');

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });

    socket.on('typing', () => {
      setIsTyping(true);
    });

    socket.on('stopTyping', () => {
      setIsTyping(false);
    });

    return () => {
      socket.off('message');
      socket.off('typing');
      socket.off('stopTyping');
    };
  }, [messages]);

  return (
    <div className="chat-window">
      <MessageList messages={messages} />
      {isTyping && <div>Someone is typing...</div>}
      <MessageInput socket={socket} />
    </div>
  );
};

export default ChatWindow;
