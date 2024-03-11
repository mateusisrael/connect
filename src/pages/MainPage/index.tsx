import { useEffect, useState } from 'react'
import { client } from '../../services/supabase'
import * as S from './styles'
import SideMenu from '../../components/SideMenu'
import { ArrowBackIcon } from '@chakra-ui/icons'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  IconButton,
} from '@chakra-ui/react'
import SetUserInfos from '../../components/SetUserInfos'
import NewChatModal from '../../components/NewChatModal'

function MainPage() {
  const channel = client.channel('chat')
  const [user, setUser] = useState<unknown>(undefined)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<string[]>([])
  const [chatId, setChatId] = useState(undefined)
  const [messagesInFocus, setMessagesInFocus] = useState(false)
  const [userConfigModal, setUserConfigModal] = useState(false)
  const [successSetUserName, setSuccessSetUserName] = useState(false)
  const [newChatModal, setNewChatModal] = useState(false)
  // const [chats, setChats] = useState([{ name: "André", img: "" }])
  const [chats, setChats] = useState([])

  const fetchUserData = async () => {
    try {
      let user = await client.auth.getUser()
      const userId = user.data.user.id
      console.log('USER', user.data)
      let res = await client.from('users').select('*').eq('id', userId)

      if (res?.data?.length) {
        const userWithName = {
          ...user.data.user,
          name: res?.data[0].name,
        }
        console.log('res users', userWithName)

        setUser(userWithName)
      } else {
        setUserConfigModal(true)
      }
    } catch (error) {}
  }
  useEffect(() => {
    fetchUserData()
  }, [])

  useEffect(() => {
    console.log('mensagens: ', messages)
  }, [messages])

  useEffect(() => {
    const getChats = async () => {
      if (user?.identities[0]?.id) {
        try {
          const userId = user.identities[0].id
          let chats = []

          await client
            .from('chats')
            .select('*')
            .eq('owner_id', userId)
            .then((res) => {
              chats = [...chats, ...res.data]
            })

          await client
            .from('chats')
            .select('*')
            .eq('participant_id', userId)
            .then((res) => {
              console.log('chats', res)
              chats = [...chats, ...res.data]
            })

          setChats((prevState) => [...prevState, ...chats])
        } catch (error) {}
      }
    }

    getChats()
  }, [user?.identities[0]?.id])

  const handleReceiveMessage = (event: any) => {
    const message = event.new
    console.log('handleReceiveMessage: ', message)
    setMessages((prevState) => [...prevState, message])
  }

  const handleChats = (event: any) => {
    const message = event.new
    setMessages([...messages, message.content])
  }

  const handleSelectChat = (chat) => {
    setMessagesInFocus(true)
    setChatId(chat.id)
    handleGetMessages(chat)
  }

  const handleGetMessages = (chat) => {
    client
      .from('messages')
      .select('*')
      .eq('chat_id', chat.id)
      .then((res) => {
        setMessages(res.data)
      })
  }

  channel
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'messages',
        // filter: `author_id=eq.${USER_ID}`,
      },
      handleReceiveMessage
    )
    .subscribe()

  const handleSendMessage = async (e) => {
    e.preventDefault()

    if (!message || !chatId) return

    try {
      const { data, error } = await client
        .from('messages')
        .insert([
          {
            content: message,
            chat_id: chatId,
            writter_id: user?.id,
          },
        ])
        .select()

      setMessages((prevState) => [...prevState, data[0]])

      setMessage('')

      console.log('Mensagem enviada: ', data)
      if (error) {
        console.log('Mensagem não enviada: ', error)
      }
    } catch (error) {
      console.log('Mensagem não enviada: ', error)
    }
  }

  const handleLogout = () => {
    client.auth.signOut()
  }

  const handleSuccessSetName = () => {
    setUserConfigModal(false)
    setSuccessSetUserName(true)
    fetchUserData()
    setTimeout(() => {
      setSuccessSetUserName(false)
    }, 3000)
  }

  return (
    <>
      {userConfigModal ? (
        <SetUserInfos
          onSuccessSetName={handleSuccessSetName}
          userId={user?.id}
        />
      ) : (
        <S.Container>
          {successSetUserName ? (
            <div style={{ zIndex: '20' }}>
              <Alert variant='left-accent' status='success'>
                <AlertIcon />
                <AlertTitle>Sucesso!</AlertTitle>
                <AlertDescription>
                  Seu nome de usuário foi definido!
                </AlertDescription>
              </Alert>
            </div>
          ) : (
            <S.Header
              style={{ width: '100%', backgroundColor: 'teal', color: '#fff' }}
            >
              <div>
                <IconButton
                  onClick={() => {
                    setMessages([])
                    setMessagesInFocus(false)
                    setChatId(undefined)
                  }}
                  colorScheme='teal'
                  icon={<ArrowBackIcon />}
                />
                <p>Olá {user?.name}</p>
              </div>
              <Button onClick={handleLogout}>Sair</Button>
            </S.Header>
          )}

          <S.Row>
            {!messagesInFocus ? (
              <SideMenu
                userId={user?.id}
                onSelectChat={handleSelectChat}
                onSetNewChat={() => setNewChatModal(true)}
                chats={chats}
              ></SideMenu>
            ) : null}
            <S.Main
              margin={messagesInFocus ? '0' : '0 0 0 24px'}
              style={{ position: 'relative', width: '100%' }}
            >
              <div className='messages-overflow'>
                {messages.map((message, i) => {
                  return (
                    <S.MessageWrapper
                      key={i}
                      owner={message?.writter_id === user.id}
                    >
                      <S.Message className='message'>
                        {message?.content}
                      </S.Message>
                    </S.MessageWrapper>
                  )
                })}
              </div>
              <form
                style={{
                  display: 'grid',
                  gridTemplateColumns: '4fr 1fr',
                  position: 'absolute',
                  bottom: '0',
                  width: '100%',
                }}
                onSubmit={handleSendMessage}
              >
                <S.MessageInput
                  name={'message'}
                  value={message}
                  style={{ padding: '5px', border: '1px solid silver' }}
                  onChange={(e) => setMessage(e.target.value)}
                  type='text'
                />
                <input
                  style={{ cursor: 'pointer' }}
                  type='submit'
                  onClick={handleSendMessage}
                />
              </form>
            </S.Main>
          </S.Row>
          {newChatModal ? (
            <NewChatModal
              onClose={() => {
                setNewChatModal(false)
              }}
            />
          ) : null}
        </S.Container>
      )}
    </>
  )
}

export default MainPage
