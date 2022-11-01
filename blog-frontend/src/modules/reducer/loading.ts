import { createReducer } from "typesafe-actions";
import { LoadingActionTypes } from "../actions";
import { LoadingInitialStateType } from "../initialStates/InitialStateType";
import { LoadingInitialState as initialStates } from "../initialStates/initialStates";
import { FINISH_LOADING, START_LOADING } from "../actionTypes/loading";

export default createReducer<LoadingInitialStateType, LoadingActionTypes>(
    initialStates,
    {
        [START_LOADING]: (state, {payload}) => {
            let newState = {
                ...state,
                [payload]: true
            }
            return newState;
        },
        [FINISH_LOADING]: (state, {payload}) => {
            let newState = {
                ...state,
                [payload]: false
            }
            return newState;
        }
    }
)