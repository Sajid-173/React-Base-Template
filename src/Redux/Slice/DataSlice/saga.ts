import { call, put, takeEvery } from "redux-saga/effects";
import {
  getDataFailed,
  getDataSuccess,
} from ".";
import { API_URL } from "../../../constants";



export function* getDataSaga({ payload }: any): any {
  const requestUrl = `http://${API_URL}/localapi`;
  try {
    const data = yield call(() =>
      fetch(requestUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
    );
    const parsedData = yield data.json();
    yield put(getDataSuccess(parsedData));
  } catch (err) {
    yield put(getDataFailed());
  }
}

function* dataSaga() {
  yield takeEvery("dataSlice/getData", getDataSaga);
}

export default dataSaga;
