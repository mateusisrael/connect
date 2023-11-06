import { Message } from "../../Domain/Model/Message";
import { ChatRepository } from "../../Domain/Repository/ChatRepository";


export class ChatRepositoryImplementation implements ChatRepository {
  dataSource: any
  
  constructor(dataSource: any) {
    this.dataSource = dataSource
  }

  // Pra adicionar usuários seria nescessário criar um repositório a parte ou podemos passar mais de um dataSource no repository?
  createChat = (ownerId: string, recipientId: string) => {
    return this.dataSource.createChat(ownerId, recipientId)
  }

  getChats = () => {
    // Seguindo essa arquitetura, o banco teria uma tabela de chats, e a query seria mais ou menos assim:
    // Select * from chat where ownerId || recipientId = userID

    
    // Query do ChatGPT:

    // SELECT *
    // FROM Participants
    // WHERE user_id = :user_id
    // UNION
    // SELECT *
    // FROM Participants
    // WHERE participant_id = :user_id;
  }

  findOneChat = (chatId: string) => {
    return this.dataSource.findOne(chatId)
  }

  sendMessage = (chatId: string, message: Message) => {
    return this.dataSource.createMessage(chatId, message)
  }

  getMessages = (chatId: string) => {
    return this.dataSource.getMessages(chatId)
  }

}
