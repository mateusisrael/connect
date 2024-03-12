import Avatar from '../Avatar'
import * as S from './styles'

type ChatItemProps = {
  contactName: string
  contactPhotoURL?: string
  lastMessage: string
}

export const ChatItem: React.FunctionComponent<ChatItemProps> = ({
  contactName,
  contactPhotoURL,
  lastMessage,
}) => {
  return (
    <S.ChatItemContainer>
      <S.ChatItemContent>
        <Avatar profilePhotoURL={contactPhotoURL} />
        <S.ChatItemTexts>
          <h1 className='contact-name'>{contactName}</h1>
          <p className='last-message'>{lastMessage}</p>
        </S.ChatItemTexts>
      </S.ChatItemContent>
      <S.Line />
    </S.ChatItemContainer>
  )
}
