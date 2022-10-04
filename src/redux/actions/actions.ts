import { User } from "../../interfaces/User";

export enum Actions {
  createUser = 'createUser'
}


export const createUser = (payload: User) => ({
  type: Actions.createUser,
  payload
})
