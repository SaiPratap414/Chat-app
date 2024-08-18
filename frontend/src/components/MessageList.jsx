import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div key={msg.id} className="message">
          <strong>{msg.userId}:</strong> {msg.content}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
