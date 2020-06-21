import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_CHALLENGES_LIST, UPDATE_CHALLENGES_LIST, FETCH_CHALLENGE } from "../actions/challenge";
import { Api } from "../../api/api";

function* getChallengesSaga(action) {
  try {
    const payload = yield call(Api.get, action.payload.url);
    console.log('pl challenge', payload)
    yield put({ type: UPDATE_CHALLENGES_LIST, payload });
  } catch (error) {
    // yield put({ type: "FETCH_FAILED", error });
    console.error("SAGA error", error);
  }
}

export function* challengeSaga() {
  yield takeEvery(FETCH_CHALLENGES_LIST, getChallengesSaga);
  yield takeEvery(FETCH_CHALLENGE, getChallengesSaga);
}
