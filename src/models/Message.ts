import { User } from "./User"

export class Message {
  constructor(
    private _id: string,
    private _author: User,
    private _content: string,
    private _date: Date
  ) {}

  get content() { return this._content}
  get author() { return this._author}
  get date() { return this._date}
  get id() { return this._id}
}