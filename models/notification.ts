import {User} from "./user";

export interface Notification {
    id?: string
    type: string
    from: User
    to: User
    date: Date
    time: Date
}
