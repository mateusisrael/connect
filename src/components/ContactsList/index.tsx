import * as S from './styles'
import AddIcon from '../../assets/sinal-de-mais.svg?react'
import GenericButton from '../GenericButton'
import { ChatItem } from './ChatItem'
import { Chat } from '../../Domain/Model/Chat'

type ContactsListProps = {
  chats?: Array<Chat>
  userId?: string
  onSelectChat: CallableFunction
}

const ContactsList: React.FunctionComponent<ContactsListProps> = ({
  chats,
  userId,
  onSelectChat,
}) => {
  return (
    <S.Container>
      <S.Header>
        <div className='title-wrapper'>
          <h1 className='title'>Contatos</h1>
        </div>
        <GenericButton>
          <AddIcon />
        </GenericButton>
      </S.Header>
      {!!chats?.length ? (
        <S.Body>
          {chats.map((chat) => {
            console.log(chat)
            return (
              <ChatItem
                onClick={() => onSelectChat(chat)}
                contactName={
                  chat.owner_id === userId
                    ? chat.participant_name
                    : chat.owner_name
                }
                contactPhotoURL={chat.contactPhotoURL}
                lastMessage={chat.lastMessage}
              />
            )
          })}
        </S.Body>
      ) : null}
    </S.Container>
  )
}

export default ContactsList
