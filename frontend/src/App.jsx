import ChatWindow from './components/ChatWindow';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <div className="chat-list-container">
        <div className="chat-list-header">
          <input type="text" placeholder="Search" className="search-input"/>
          <div className="chat-filter-buttons">
            <button className="filter-button active">All</button>
            <button className="filter-button">Unread</button>
            <button className="filter-button">Archived</button>
            <button className="filter-button">Blocked</button>
          </div>
        </div>
        <div className="chat-list">
          {/* Chat list items would be mapped here */}
          <div className="chat-item unread">
            <div className="chat-avatar"></div>
            <div className="chat-preview">
              <strong>Claire:</strong> 2nd Hello, I wanted to know more...
            </div>
          </div>
          <div className="chat-item">
            <div className="chat-avatar"></div>
            <div className="chat-preview">
              <strong>Parik:</strong> 3rd Hello, I wanted to know more...
            </div>
          </div>
          {/* More items */}
        </div>
      </div>
      <ChatWindow />
    </div>
  );
};

export default App;
