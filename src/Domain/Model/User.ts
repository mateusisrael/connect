import { Chat } from "./Chat";

export interface User {
  id: string;
  name: string;
  chats: Array<Chat> 
}