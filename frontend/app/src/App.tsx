import AppView from "./components/AppView/AppView";
import { ConnectionManager } from "./connections/ConnectionManager";
import React, { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [connectionManager, setConnectionManager] = useState(null);

  useEffect(() => {
    const manager = new ConnectionManager({
      onMessage: handleMessage
    });
    setConnectionManager(manager);

    // Cleanup function if needed
    return () => {
      // Cleanup code here
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleMessage = (msg) => {
    // distribute message based on message type
    console.log(msg);
  };

  const handleSubmit = () => {
    console.log('sending value to backend ', inputValue)
    connectionManager.sendMessage(inputValue)
  };

  return (
    <div className="p-3">
      <AppView></AppView>

    </div>
  );
}

export default App;
