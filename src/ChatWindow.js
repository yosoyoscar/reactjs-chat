import PropTypes from "prop-types";
import MessageList from "./MessageList";
import NewMessage from "./NewMessage";

const ChatWindow = ({ user, messages, onAddMessage }) => {

  return (
    <div className="chat-window">
        <h2>Reactjs Chat</h2>
        <div className="name chat-user">{user.username}</div>

        <MessageList user={user} messages={messages}/>
        <NewMessage user={user} onAddMessage={onAddMessage}/>

  </div>
  );
};

ChatWindow.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  onAddMessage: PropTypes.func.isRequired,
};

export default ChatWindow;