import Avatar from '../Avatar'
import * as S from './styles'

type ChatItemProps = {
  contactName: string
  contactPhotoURL?: string
  lastMessage: string
  onClick: () => {}
}

export const ChatItem: React.FunctionComponent<ChatItemProps> = ({
  contactName,
  contactPhotoURL,
  lastMessage,
  onClick,
}) => {
  return (
    <S.ChatItemContainer onClick={onClick}>
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
