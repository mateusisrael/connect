import { useEffect, useState } from "react";
import { client } from "../../services/supabase";
import * as S from "./styles";
import SideMenu from "../../components/SideMenu";


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
        console.log('USER', user.data)
        let res = await client.from('users').select('*').eq('id', userId)

        const userWithName = {
          ...user.data.user,
          name: res?.data[0].name
        }
        console.log('res users', userWithName)

        setUser(userWithName)
      } catch (error) {}
    }
    
    fetchUserData()
  }, []);

  useEffect(() => {
    const getChats = async () => {
      if(user?.identities[0]?.id) {
      try {

          const userId = user.identities[0].id
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
  }, [user?.identities[0]?.id]);

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
    console.log({messages})
  }, [messages])

  const handleGetMessages = (chat) => {
    client.from('messages').select('*').eq('chat_id', chat.id)
      .then(res => {
        setMessages(res.data)
      })
  }

  
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
      <SideMenu userId={user?.id} onSelectChat={handleGetMessages} chats={chats}></SideMenu>
      <div style={{ position: "relative", width: "100%", margin: "0 24px" }}>
        <div style={{ width: '100%', backgroundColor: 'teal', padding: '5px', color: '#fff'}}>Olá {user?.name}</div>
        <div className="messages">
          {messages.map((message, i) => {
            return <div key={i}>{message.content}</div>;
          })}
        </div>
        <form
          style={{ display: 'grid', gridTemplateColumns: '4fr 1fr' ,position: "absolute", bottom: "0", width: '100%' }}
          onSubmit={handleSendMessage}
        >
          <S.MessageInput
            name={"message"}
            value={message}
            style={{ padding: '5px', border: '1px solid silver'}}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
          />
          <input style={{ cursor: 'pointer'}}  type="submit" onClick={handleSendMessage} />
        </form>
      </div>
    </S.Container>
  );
}

export default Messages;
