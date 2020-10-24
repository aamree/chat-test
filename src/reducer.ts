import { Message, ActionTypes, JOINED,  SET_USERS, NEW_MESSAGE, User } from './types';

export const initialState = {
  joined: false,
  me: {} as User,
  users: [] as Array<User>,
  messages: [] as Array<Message>
}
export type ChatState = typeof initialState


export default (state = initialState, action: ActionTypes): ChatState  => {
  switch (action.type) {
    case JOINED: 
      return {
        ...state,
        joined: true,
        me: action.payload.me,
        users: action.payload.users
      }
    
      case SET_USERS:
        return {
          ...state,
          users: action.payload.users
        }

        case NEW_MESSAGE:
          return {
            ...state,
            messages: [action.payload.message, ...state.messages]
          }
  
    default:
      return state
  }
}