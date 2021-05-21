import {GOAWAY, WELCOME} from "../types/types";

export const greetReducer = (state = '', action) => {
    switch (action.type) {
        case WELCOME:
            console.log()
            return 'Hello there!!!'
        case GOAWAY:
            return 'Get Lost!!!'
        default:
            return state
    }
}