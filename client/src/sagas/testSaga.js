import { put, takeEvery, takeLatest, cancelled } from 'redux-saga/effects'

const delay = (ms) => new Promise((res, rej) => setTimeout(() => res(5), ms))

// ...

// function* test() {
//   yield 10;
//   return 99;
// }

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  let res;
  try {
  res = yield delay(5000);
  }
  catch (e) {
    console.log("ERROR", e);
  }
  finally {
    if (yield cancelled()) {
      console.log("CANCELLED");
    }
  }
  console.log("In saga", res);
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeLatest('Test', incrementAsync)
}