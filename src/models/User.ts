import { Chat } from "./Chat";

export class User {
  private _id: string;
  private _name: string;
  private _chats: Array<Chat> 


  constructor(id: string, name: string, chats: Chat[]) {
    this._id = id
    this._name = name
    this._chats = chats
  }

  get id() {
    return this._id
  }

  set id(value: string) {
    this._id = value
  }

  get name() {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  get chats() {
    return this._chats
  }

  createChat(user: User, chat: Chat) {
    chat.addUser(user)
    user.createChat(chat)
    this._chats.push()
  }  


}