import { ChatRepository } from "../../Repository/ChatRepository";

export class GetMessagesUseCase {
  repository: ChatRepository
  
  constructor(repository: ChatRepository) {
    this.repository = repository
  }

  execute = (chatId: string) => {
    return this.repository.getMessages(chatId)
  }
}