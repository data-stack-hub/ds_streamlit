import AppView from "./components/AppView/AppView";
import { ConnectionManager } from "./connections/ConnectionManager";
import React, { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [connectionManager, setConnectionManager] = useState(null);

  const [elements, setElements] = useState({})

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
    // const newData = [...msg];
    console.log(JSON.stringify(msg))
    setElements(msg);
  }

  useEffect(() => {
    console.log("Elements state has been updated:", elements);
  }, [elements]); // Dependency array includes `elements` to log whenever it changes


  const handleSubmit = () => {
    console.log('sending value to backend ', inputValue)
    connectionManager.sendMessage(inputValue)
  };

  return (
    <div className="p-3">
      <AppView elements={elements}></AppView>

    </div>
  );
}

export default App;
