import { post } from ".";
import { CHANGE_NAME } from "./consts";
import { INewName } from "./types";

export const sendLogin = (body: INewName) => 
  post(CHANGE_NAME, body)
