import { Message } from "./Message"

export interface Chat {
  id: string
  ownerId: string
  participantId: string
  messages: Array<Message>
}
