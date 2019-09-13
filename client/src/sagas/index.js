import { all } from 'redux-saga/effects'

import { watchIncrementAsync } from "./test"

export default function* rootSaga() {
    yield all([watchIncrementAsync()]);
}