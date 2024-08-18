import React, { useState } from 'react';
import { FaPaperPlane, FaPaperclip } from 'react-icons/fa';

const MessageInput = ({ socket }) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('message', { content: message });
      setMessage('');
    }
  };

  const handleTyping = () => {
    socket.emit('typing');
    setTimeout(() => {
      socket.emit('stopTyping');
    }, 1000);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      socket.emit('attachment', { file });
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleTyping}
        placeholder="Type your message..."
      />
      <input
        type="file"
        id="attachment"
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
      <label htmlFor="attachment">
        <FaPaperclip className="attachment-icon" />
      </label>
      <button onClick={sendMessage}>
        <FaPaperPlane className="send-icon" />
      </button>
    </div>
  );
};

export default MessageInput;
