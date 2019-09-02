import { all } from 'redux-saga/effects'

import { watchIncrementAsync } from "./testSaga"

export default function* rootSaga() {
    yield all([watchIncrementAsync()]);
}