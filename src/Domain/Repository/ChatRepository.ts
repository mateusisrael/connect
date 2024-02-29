import { Message } from '../Model/Message'

export interface ChatRepository {
  createChat: (ownerId: string, recipientId: string) => Promise<boolean>
  // createChat: ()
  sendMessage: (chatId: string, message: Message) => Promise<Message>
  getMessages: (chatId: string) => Promise<Message[]>
}
