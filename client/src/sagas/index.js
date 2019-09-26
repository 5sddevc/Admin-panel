import { all } from 'redux-saga/effects'

import { watchIncrementAsync } from "./Test"
import { watchGetUsers } from "./Users"

export default function* rootSaga() {
    yield all([watchIncrementAsync(), watchGetUsers()]);
}