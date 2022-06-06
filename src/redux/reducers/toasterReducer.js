import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from "../types/types";
import { generateHash } from "../../helpers/generateHash";

const initialState = {
    toastList: [],
}

export const toasterReducer = (state = initialState, action) => {
    switch (action.type) {
		case ADD_NOTIFICATION:
            const id = generateHash();
            const newToast = {
                id,
                type: action.payload.type,
                message: action.payload.message,
            }

			return {
				...state,
                toastList: [...state.toastList, newToast],
			}
		case DELETE_NOTIFICATION: {
            const filteredToastList = state.toastList.filter(({ id }) => id !== action.payload.toastId);
            
            return {
				...state,
                toastList: filteredToastList,
			}
		}
		default:
			return state;
	}
}