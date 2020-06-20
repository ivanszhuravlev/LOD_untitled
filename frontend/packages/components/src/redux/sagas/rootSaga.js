import { fork } from 'redux-saga/effects'
import { ideaSaga } from "./ideaSaga";
import { leaderboardSaga } from "./leaderboardSaga";

export function* rootSaga() {
  yield fork(ideaSaga)
  yield fork(leaderboardSaga)
  // yield fork(saga2)
  // yield fork(saga3)
}