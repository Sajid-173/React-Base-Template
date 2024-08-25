import { fork, all } from "redux-saga/effects";
import dataSaga from "../Slice/DataSlice/saga";

function* rootSaga() {
  yield all([
    fork(dataSaga),
  ]);
}

export default rootSaga;
