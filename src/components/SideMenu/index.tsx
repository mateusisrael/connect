import * as S from './styles'
import { Card, Avatar, WrapItem, Flex, Button } from '@chakra-ui/react'

function SideMenu({ userId, chats, onSelectChat, onSetNewChat }) {
  console.log(chats)
  return (
    <S.Container>
      <div className='chats-header'>
        <h1 style={{ fontSize: '1.5rem' }}>Conversas</h1>
        <Button onClick={onSetNewChat}>+</Button>
      </div>
      <div>
        {chats.map((chat, i) => {
          return (
            <S.ContactContainer>
              <Flex
                onClick={() => onSelectChat(chat)}
                key={i}
                margin={'14px 0'}
                gap={'14px'}
                flexDirection={'row'}
                align={'center'}
              >
                <Avatar bg={'teal.500'} />
                <p>
                  {chat.owner_id === userId
                    ? chat.participant_name
                    : chat.owner_name}
                </p>
              </Flex>
            </S.ContactContainer>
          )
        })}
      </div>
    </S.Container>
  )
}

export default SideMenu
