import { FINISH_LOADING, START_LOADING } from "../actionTypes/loading"

export const startLoading = (type:string) => {
    return {type: START_LOADING, payload: type};
}

export const finishLoading = (type: string) => {
    return {type: FINISH_LOADING, payload: type}
}