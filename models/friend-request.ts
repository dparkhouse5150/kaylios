import {User} from './user'

export interface FriendRequest {
    id?: string
    sender: User
    receiver: User
    time: Date
    dateRequested: Date
}
