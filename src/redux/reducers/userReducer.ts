import { User } from "../../interfaces/User";
import { Actions } from "../actions/actions";

export interface InitialState {
  users: User[],
}

export const initialState: InitialState = {
  users: [] as User[]
}

export const userReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case Actions.createUser:
      const user = action.payload
        return {
          ...state,
          users: [...state.users, user]
        }
    default:
      return state
  }
}
