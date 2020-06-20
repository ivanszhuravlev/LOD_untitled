import { fork } from 'redux-saga/effects'
import { ideaSaga } from "./ideaSaga";

export function* rootSaga() {
  yield fork(ideaSaga)
  // yield fork(saga2)
  // yield fork(saga3)
}