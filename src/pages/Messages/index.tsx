import { useEffect, useState } from "react";
import { client } from "../../services/supabase";
import * as S from "./styles";
import SideMenu from "../../components/SideMenu";

function Messages() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const USER_ID = 1;

  const handleReceiveMessage = (event: any) => {
    const message = event.new;
    setMessages([...messages, message.content]);
  };

  const handleChats = (event: any) => {
    debugger;
    const message = event.new;
    setMessages([...messages, message.content]);
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  const channel = client.channel("chat");
  channel
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "messages",
        // filter: `author_id=eq.${USER_ID}`,
      },
      handleReceiveMessage
    )
    .subscribe();

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

  const chats = [
    { name: "Silvia", img: "" },
    { name: "André", img: "" },
    { name: "Filipe", img: "" },
    { name: "Marina", img: "" },
  ];

  return (
    <S.Container>
      <SideMenu chats={chats}></SideMenu>
      <div style={{ position: "relative", width: "100%", margin: "0 24px" }}>
        <div className="messages">
          {messages.map((message: string, i) => {
            return <div key={i}>{message}</div>;
          })}
        </div>
        <form
          style={{ position: "absolute", bottom: "0" }}
          onSubmit={handleSendMessage}
        >
          <input
            name={"message"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
          />
          <input type="submit" onClick={handleSendMessage} />
        </form>
      </div>
    </S.Container>
  );
}

export default Messages;
