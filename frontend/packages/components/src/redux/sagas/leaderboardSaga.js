import { call, put, takeEvery } from "redux-saga/effects";
import { Api } from "../../api/api";
import { FETCH_LEADERBOARD_ITEM_LIST, FETCH_LEADERBOARD_ITEM, UPDATE_LEADERBOARD_ITEM_LIST } from "../actions/leaderboardItems";

function* getLeaderboardItemsSaga(action) {
  try {
    let payload = [
      {
        "id": 1,
        "name": "Дима Демьянов",
        "rating": 150
      },
      {
        "id": 2,
        "name": "Давид Инджиев",
        "rating": 120
      },
      {
        "id": 3,
        "name": "Иван Журавлёв",
        "rating": 205
      },
      {
        "id": 4,
        "name": "Михуил Круглов",
        "rating": 325
      }
    ];
    // const payload = yield call(Api.get, action.payload.url);
    yield put({ type: UPDATE_LEADERBOARD_ITEM_LIST, payload });
  } catch (error) {
    // yield put({ type: "FETCH_FAILED", error });
    console.error("SAGA error", error);
  }
}

export function* leaderboardSaga() {
  yield takeEvery(FETCH_LEADERBOARD_ITEM_LIST, getLeaderboardItemsSaga);
  yield takeEvery(FETCH_LEADERBOARD_ITEM, getLeaderboardItemsSaga);
}
