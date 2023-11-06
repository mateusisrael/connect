import { useEffect, useState } from "react";
import "./App.css";
import { client } from "./services/supabase.ts";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleReceiveMessage = (event: any) => {
    setMessages([...messages, event.payload.message]);
  };

  const channel = client.channel("chat");
  channel
    .on("broadcast", { event: "message" }, handleReceiveMessage)
    .subscribe();

  // useEffect(() => {
  //   const channel = client.channel("chat");
  //   channel
  //     .on("broadcast", { event: "message" }, handleReceiveMessage)
  //     .subscribe();

  //   () => {
  //     return channel.unsubscribe();
  //   };
  // }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    try {
      channel.send({
        type: "broadcast",
        event: "message",
        payload: { message: message },
      });
      setMessages((prev) => [...prev, message]);
      setMessage("");
    } catch (error) {}
  };

  return (
    <div className="container">
      <div className="messages">
        {messages.map((message: string, i) => {
          return <div key={i}>{message}</div>;
        })}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          name={"message"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
        />
        <input type="submit" onClick={handleSendMessage} />
      </form>
    </div>
  );
}

export default App;
