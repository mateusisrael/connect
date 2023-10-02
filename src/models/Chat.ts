import { User } from "./User"
import { Message } from "./Message"

export class Chat {
  private _users: Array<User>
  private _messages: Array<Message>

  constructor(users: User[]) {
    this._users = users
    this._messages = []
  }

  get users() {
    return this._users
  }

  addUser(user: User) {
    this._users.push(user)
  }

  sendMessage(message: Message) {
    this._messages.push(message)
    console.log(`[${message.author}]: ${message.content}`)
  }

  deleteMessage(messageId: string) {
    throw new Error("Not implemented")
  }
}