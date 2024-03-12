import * as S from './styles'
import AddIcon from '../../assets/sinal-de-mais.svg?react'
import GenericButton from '../GenericButton'
import { ChatItem } from './ChatItem'

type ContactsListProps = {
  chats?: Array<any>
}

const ContactsList: React.FunctionComponent<ContactsListProps> = ({
  chats,
}) => {
  chats = [
    {
      contactName: 'zugor',
      lastMessage: 'hello my fried, como você está?',
    },
    {
      contactName: 'zugor',
      lastMessage:
        'Viu o jogo ontem? Flamengo ganhou do Fluminense. Te avisei bobão',
    },
  ]
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
            return (
              <ChatItem
                contactName={chat.contactName}
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
