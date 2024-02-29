import { Message } from '../../Model/Message'
import { ChatRepository } from '../../Repository/ChatRepository'

export class SendMessageUseCase {
  repository: ChatRepository

  constructor(repository: ChatRepository) {
    this.repository = repository
  }

  execute = (chatId: string, message: Message) => {
    return this.repository.sendMessage(chatId, message)
  }
}
