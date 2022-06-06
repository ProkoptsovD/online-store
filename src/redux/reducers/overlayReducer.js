import { CLOSE_OVERLAY, OPEN_OVERLAY } from "../types/types"

const initialState = {
    isOpened: false,
}

export const overlayReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_OVERLAY:
            return {
                ...state,
                isOpened: true,
            };
        case CLOSE_OVERLAY:
            return {
                ...state,
                isOpened: false,
            };
        default:
            return state;
    }
}