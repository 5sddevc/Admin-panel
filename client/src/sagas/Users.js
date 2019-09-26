import { put, takeLatest, cancelled } from 'redux-saga/effects';
import { GET_USERS } from "../configurations/Types";
import { receivedUsers } from "../actions/Users";
import { tableData } from "../mocks/users"

const delay = (ms) => new Promise((res, rej) => setTimeout(() => res(tableData), ms))

// Our worker Saga: will perform the async getUsers task
function* getUsers(action) {
  console.log("USERS SAGA RUN", action)
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
  if(action.callback) {
    action.callback(res);
  }
  yield put(receivedUsers(res))
}
// Our watcher Saga: spawn a new getUsers task on each GET_USERS
export function* watchGetUsers() {
  yield takeLatest(GET_USERS, getUsers)
}