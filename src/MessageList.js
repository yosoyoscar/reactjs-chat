import PropTypes from "prop-types";

const MessageList = ({ user, messages }) => {

  return (
    <div>

        <ul className="message-list">
        {messages.map((message, index) => (
            <li
            key={index}
            className={
                message.username === user.username
                ? "message sender"
                : "message recipient"
            }
            >
            <p>{`${message.username}: ${message.text}`}</p>
            </li>
        ))}
        </ul>

    </div>
  );
};

MessageList.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
};

export default MessageList;