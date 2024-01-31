import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    { role: "system", content: "Welcome to ChatGPT UI!" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [temperatureAccuracy, setTemperatureAccuracy] = useState(0);

  const handleUserInput = () => {
    const newMessage = { role: "user", content: userInput };
    setMessages([...messages, newMessage]);

    // Simulate GPT response (echoing the user's message for now)
    setTimeout(() => {
      const gptResponse = {
        role: "assistant",
        content: `You said: ${userInput}`,
      };
      setMessages([...messages, gptResponse]);
    }, 1000);

    // Add the user input to chat history
    setChatHistory([...chatHistory, userInput]);

    // Clear the input field
    setUserInput("");
  };

  const handleSetTemperatureAccuracy = () => {
    // Perform any necessary logic when setting temperature accuracy
    // For now, just log the value
    console.log(`Temperature accuracy set to: ${temperatureAccuracy}`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "800px",
        margin: "20px auto",
      }}
    >
      {/* Left container for chat history */}
      <div style={{ width: "30%", paddingRight: "10px" }}>
        <Paper style={{ padding: "10px", height: "400px", overflowY: "auto" }}>
          <Typography variant="h6">Chat History</Typography>
          {chatHistory.map((message, index) => (
            <Typography key={index} variant="body2">
              {message}
            </Typography>
          ))}
        </Paper>
      </div>

      {/* Middle container for live chat */}
      <div style={{ width: "40%" }}>
        <Paper style={{ padding: "20px", height: "400px", overflowY: "auto" }}>
          {messages.map((message, index) => (
            <Typography
              key={index}
              variant={message.role === "system" ? "body2" : "body1"}
            >
              {message.content}
            </Typography>
          ))}
        </Paper>
        <TextField
          label="Type a message"
          variant="outlined"
          fullWidth
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={{ marginTop: "10px" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleUserInput}
          style={{ marginTop: "10px" }}
        >
          Send
        </Button>
      </div>

      {/* Right container for setting temperature accuracy */}
      <div style={{ width: "30%", paddingLeft: "10px" }}>
        <Paper style={{ padding: "10px" }}>
          <Typography variant="h6">Temperature Accuracy</Typography>
          <TextField
            label="Set Accuracy (in °C)"
            variant="outlined"
            fullWidth
            type="number"
            value={temperatureAccuracy}
            onChange={(e) => setTemperatureAccuracy(e.target.value)}
            style={{ marginTop: "10px" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSetTemperatureAccuracy}
            style={{ marginTop: "10px" }}
          >
            Set Accuracy
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default ChatComponent;
