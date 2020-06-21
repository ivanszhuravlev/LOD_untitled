import { call, put, takeEvery } from "redux-saga/effects";
import { Api } from "../../api/api";
import { FETCH_LEADERBOARD_ITEM_LIST, FETCH_LEADERBOARD_ITEM, UPDATE_LEADERBOARD_ITEM_LIST } from "../actions/leaderboardItems";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.png";
import avatar6 from "../../assets/avatar6.png";
import avatar7 from "../../assets/avatar7.png";
import avatar8 from "../../assets/avatar8.png";


function* getLeaderboardItemsSaga(action) {
  try {
    let payload = [
      {
        "id": 1,
        "name": "Дима Демьянов",
        "rating": 150,
        "avatarUri": avatar1
      },
      {
        "id": 2,
        "name": "Давид Инджиев",
        "rating": 120,
        "avatarUri": avatar2
      },
      {
        "id": 3,
        "name": "Иван Журавлёв",
        "rating": 205,
        "avatarUri": avatar3
      },
      {
        "id": 4,
        "name": "Михаил Круглов",
        "rating": 325,
        "avatarUri": avatar4
      },
      {
        "id": 5,
        "name": "Ольгя Смирных",
        "rating": 65,
        "avatarUri": avatar8
      },
      {
        "id": 6,
        "name": "Дмитрий Авдеенко",
        "rating": 10,
        "avatarUri": avatar6
      },
      {
        "id": 7,
        "name": "Николай Петров",
        "rating": 25,
        "avatarUri": avatar7
      },
      {
        "id": 8,
        "name": "Иван Логачев",
        "rating": 0,
        "avatarUri": avatar8
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
