import {DECREMENT, INCREMENT} from "../types/types";

const {GOAWAY} = require("../types/types");
const {WELCOME} = require("../types/types");
export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})
export const greet = () => ({
    type: WELCOME
})

export const curse = () => ({
    type: GOAWAY
})