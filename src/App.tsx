import { useEffect, useState } from "react";
import "./App.css";
import { client } from "./services/supabase.ts";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleReceiveMessage = (payload: any) => {
    const t = [...messages, payload.payload.message];
    console.log(t);

    setMessages(t);
  };

  const channel = client.channel("chat");
  channel
    .on("broadcast", { event: "message" }, handleReceiveMessage)
    .subscribe();

  useEffect(() => {}, []);

  const handleSendMessage = () => {
    if (!message) return;

    channel.send({
      type: "broadcast",
      event: "message",
      payload: { message: message },
    });
  };

  return (
    <div className="container">
      <div className="messages">
        {messages.map((i: string) => {
          return <div>{i}</div>;
        })}
      </div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
      />
      <button onClick={handleSendMessage}>Enviar</button>
    </div>
  );
}

export default App;
