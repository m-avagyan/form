import { ADD_USER } from "./types";

export function addUser(user) {
    return {
        type: ADD_USER,
        user
    }
}