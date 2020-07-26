import { ADD_USER } from './types'

const initialState = {
    users: []
}

export const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            return {
                ...state,
                users: state.users.concat([action.user]),
            }
        default: return state
    }
}