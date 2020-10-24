export const JOINED = "JOINED"
export const SET_USERS = "SET_USERS"
export const NEW_MESSAGE = "NEW_MESSAGE"


export interface Message {
  user: User
  message: string
}

export interface User  {
  socketId: string,
  name: string
}

interface JoinedAction {
  type: typeof JOINED,
  payload: {
    me: User,
    users: Array<User>
  }
}
interface SetUsersAction {
  type: typeof SET_USERS,
  payload: {
    users: Array<User>
  }
}
interface NewMessageAction {
  type: typeof NEW_MESSAGE,
  payload: {
    message: Message
  }
}

export type ActionTypes =  JoinedAction | SetUsersAction | NewMessageAction