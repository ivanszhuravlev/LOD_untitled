import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_IDEAS_LIST, UPDATE_IDEAS_LIST, FETCH_IDEA } from "../actions/idea";
import { Api } from "../../api/api";

function* getIdeasSaga(action) {
  try {
    const payload = yield call(Api.get, action.payload.url);
    yield put({ type: UPDATE_IDEAS_LIST, payload });
  } catch (error) {
    // yield put({ type: "FETCH_FAILED", error });
    console.error("SAGA error", error);
  }
}

export function* ideaSaga() {
  yield takeEvery(FETCH_IDEAS_LIST, getIdeasSaga);
  yield takeEvery(FETCH_IDEA, getIdeasSaga);
}
