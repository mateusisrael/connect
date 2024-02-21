import * as S from "./styles";
import { Card, Avatar, WrapItem, Flex } from "@chakra-ui/react";

// import profile from "../../../public/profile.png";

function SideMenu({ userId, chats }) {
  console.log(chats)
  return (
    <S.Container>
      <h1>Conversas</h1>
      <div>
        {chats.map((contact, i) => {
          return (
            <Flex
              key={i}
              margin={"14px 0"}
              gap={"14px"}
              flexDirection={"row"}
              align={"center"}
            >
              <WrapItem>
                <Avatar
                  bg={"teal.500"}
                  // name={contact.name}
                  // src="https://bit.ly/ryan-florence"
                />
                <p>{contact.owner_id === userId ? contact.participant_name : contact.owner_name}</p>
              </WrapItem>

              <p>{contact.name}</p>
            </Flex>
          );
        })}
      </div>
    </S.Container>
  );
}

export default SideMenu;
