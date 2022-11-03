import { AxiosResponse } from "axios";
import { put, call } from "redux-saga/effects";
import { finishLoading, startLoading } from "../modules/actions/loading";
import { invokeAPIType } from "./api/restApi";

export default function createRequestSaga(type:string, request: invokeAPIType) {
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;

    return function*(action:any) {
        yield put(startLoading(type));
        try {
            const response:AxiosResponse = yield call(request, action.payload);
            yield put({
                type: SUCCESS,
                payload: response.data
            })
        } catch (error) {
            yield put({
                type: ERROR,
                payload: error,
                error: true
            })
        }
        yield put(finishLoading(type))
    }
}