import { User } from "../../app/interfaces/User";

export enum ActionsTypes {
  createUserT = 'createUserT'
}

export const createUser = (payload: User) => ({
  type: ActionsTypes.createUserT,
  payload
})
