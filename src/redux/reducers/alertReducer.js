import { CLOSE_ALERT, SHOW_ALERT } from "../types/types"

const initialState = {
    showAlert: false,
    message: '',
    type: '',
}

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                showAlert: true,
                message: action.payload.message,
                type: action.payload.type,
            }
        case CLOSE_ALERT: 
            return {
                showAlert: false,
                message: '',
                type: '',
            }
        default: 
            return state;
    }
}