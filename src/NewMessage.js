import PropTypes from "prop-types";
import { useState } from "react";

const NewMessage = ({ user, onAddMessage }) => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
      };

      const handleSubmit = (event) => {
        //event.preventDefault();
        onAddMessage({ username: user.username, text: message });
        setMessage('');
      };

  // If the user did not type anything, he/she should not be allowed to submit.
  const isDisabled = () => {
    return !message.length;
  };

  return (
    <div>
        <form className="input-group" onSubmit={handleSubmit}>
            <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={message}
            onChange={handleMessageChange}
            />
            <div className="input-group-append">
            <button className="btn submit-button" disabled={isDisabled()}>
                SEND
            </button>
            </div>
        </form>
    </div>
  );
};

NewMessage.propTypes = {
    user: PropTypes.object.isRequired,
    onAddMessage: PropTypes.func.isRequired
};

export default NewMessage;