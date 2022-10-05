import { ActionsTypes } from "../actions/actionsTypes";
import { User } from "../../app/interfaces/User";

export interface InitialState {
  users: User[]
}

export const initialState: InitialState = {
  users: [] as User[]
}

export const userReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case ActionsTypes.createUserT:
      const user = action.payload
      return {
        ...state,
        users: [ ...state.users, user ]
      }
    default:
      return state
  }
}
