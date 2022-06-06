import { INIT_GALLERY, NEXT_PICTURE, PREV_PICTURE } from "../types/types"

const initialState = {
    totalPicsQuantaty: 0,
    currentPic: 0,
}

export const galleryReducer = (state = initialState, action) => {
    switch(action.type) {
        case INIT_GALLERY:
            return {
                ...state,
                totalPicsQuantaty: action.payload.picsQuantaty - 1,
            }
        case NEXT_PICTURE:
            const isLastPic = state.currentPic >= state.totalPicsQuantaty;

            if (isLastPic) return {
                ...state,
                currentPic: 0,
            };
            
            return {
                ...state,
                currentPic: state.currentPic +=1,
            }
        case PREV_PICTURE:
            const isFirstPic = state.currentPic <= 0;

            if (isFirstPic) return {
                ...state,
                currentPic: state.totalPicsQuantaty,
            };

            return {
                ...state,
                currentPic: state.currentPic -=1,
            }
        default:
            return state;
    }
} 