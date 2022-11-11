import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ChatWindow from "./ChatWindow";

const users = [{ username: "Amy" }, { username: "John" }, { username: "Lebron" }];

const App = () => {
  const [messages, setMessages] = useState([
    { username: "Amy", text: "Hi, Jon!" },
    { username: "Amy", text: "How are you?" },
    { username: "John", text: "Hi, Amy! Good, you?" },
  ]);

  const createMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Udacity ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        {users.map( (user) => <ChatWindow key={user.username} user={user} messages={messages} onAddMessage={createMessage} />)}
      </div>
    </div>
  );
};

export default App;
