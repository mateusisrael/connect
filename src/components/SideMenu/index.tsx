import * as S from "./styles";
import { Card, Avatar, WrapItem, Flex } from "@chakra-ui/react";

// import profile from "../../../public/profile.png";

function SideMenu({ userId, chats, onSelectChat }) {
  console.log(chats)
  return (
    <S.Container>
      <h1 style={{ marginLeft: '8px' }}>Conversas</h1>
      <div>
        {chats.map((chat, i) => {
          return (
            <S.ContactContainer>
            <Flex
              onClick={() => onSelectChat(chat)}
              key={i}
              margin={"14px 0"}
              gap={"14px"}
              flexDirection={"row"}
              align={"center"}
            >
              <Avatar
                bg={"teal.500"}
                // name={contact.name}
                // src="https://bit.ly/ryan-florence"
              />
              <p>{chat.owner_id === userId ? chat.participant_name : chat.owner_name}</p>
            </Flex>
            </S.ContactContainer>
          );
        })}
      </div>
    </S.Container>
  );
}

export default SideMenu;
