import { all } from 'redux-saga/effects'

import { watchIncrementAsync } from "./Test"

export default function* rootSaga() {
    yield all([watchIncrementAsync()]);
}