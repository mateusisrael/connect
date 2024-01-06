import { useEffect, useState } from "react";
import { client } from "../../services/supabase";
import * as S from "./styles";
import SideMenu from "../../components/SideMenu";
import { supabase } from "@supabase/auth-ui-shared";

function Messages() {
  const channel = client.channel("chat");
  const [user, setUser] = useState<unknown>(undefined)
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  // const [chats, setChats] = useState([{ name: "André", img: "" }])
  const [chats, setChats] = useState([])

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let user = await client.auth.getUser()
        const userId = user.data.user.id
        console.log('USER', user.data.user.id)
        let res = await client.from('users').select('*').eq('id', userId)

        console.log('res users', res)

        setUser(user?.data?.user)
      } catch (error) {}
    }
    
    fetchUserData()
  }, []);

  useEffect(() => {
    const getChats = async () => {
      if(user) {
      try {

          const userId = user?.identities[0]?.id
          let chats = []
    
          await client.from('chats').select('*').eq('owner_id', userId)
          .then(res => {
            chats = [
              ...chats,
              ...res.data
            ]


          })
    
          await client.from('chats').select('*').eq('participant_id', userId)
          .then(res => {
            console.log('chats', res)
            chats = [
              ...chats,
              ...res.data
            ]
          })

          setChats(prevState => ([
            ...prevState,
            ...chats
          ]))
        } catch (error) {
          
        }
      }
    }

    getChats()
  }, [user]);

  const handleReceiveMessage = (event: any) => {
    const message = event.new;
    setMessages([...messages, message.content]);
  };

  const handleChats = (event: any) => {
    debugger;
    const message = event.new;
    setMessages([...messages, message.content]);
  };



  
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


  return (
    <S.Container>
      <SideMenu userId={user?.id} chats={chats}></SideMenu>
      <div style={{ position: "relative", width: "100%", margin: "0 24px" }}>
        <div>Olá {}</div>
        <div className="messages">
          {messages.map((message: string, i) => {
            return <div key={i}>{message}</div>;
          })}
        </div>
        <form
          style={{ position: "absolute", bottom: "0" }}
          onSubmit={handleSendMessage}
        >
          <S.MessageInput
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
