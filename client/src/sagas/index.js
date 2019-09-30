import { all } from 'redux-saga/effects'

import { watchIncrementAsync } from "./Test"
import { watchGetUsers } from "./Users"
import { watchGetStats } from "./Dashboard"

export default function* rootSaga() {
    yield all([watchIncrementAsync(), watchGetUsers(), watchGetStats()]);
}