import { User } from './User'

export interface Message {
  id: string
  author: User
  content: string
  date: Date
}
