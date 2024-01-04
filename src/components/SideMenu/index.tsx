import * as S from "./styles";
import { Card, Avatar, WrapItem, Flex } from "@chakra-ui/react";

// import profile from "../../../public/profile.png";

function SideMenu({ chats }) {
  return (
    <S.Container>
      <h1>Mensagens</h1>
      <div>
        {chats.map((contact) => {
          return (
            <Flex
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
