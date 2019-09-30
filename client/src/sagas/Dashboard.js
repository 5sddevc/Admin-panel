import { put, takeLatest, cancelled } from 'redux-saga/effects';
import { GET_USER_STATS, GET_MONTHLY_USER_STATS, GET_APP_DOWNLOADS } from "../configurations/Types";
import { receivedUserStats, receivedMonthlyUserStats, receivedAppDownloads } from "../actions/Dashboard";
import { userStatsData } from "../mocks/users"
import { graphData, pieCharts } from "../mocks/graphs"

const userStatsAPI = (ms) => new Promise((res, rej) => setTimeout(() => res(userStatsData), ms))
const monthlyUserStatsAPI = (ms) => new Promise((res, rej) => setTimeout(() => res(pieCharts), ms))
const appDownloadsAPI = (ms) => new Promise((res, rej) => setTimeout(() => res(graphData), ms))


function* getUserStats(action) {
  console.log("DASHBOARD SAGA RUN", action);
  let res;
  try {
  res = yield userStatsAPI(2000);
  }
  catch (e) {
    console.log("ERROR", e);
  }
  finally {
    if (yield cancelled()) {
      console.log("CANCELLED");
    }
  }
  if(action.callback) {
    action.callback(res);
  }
  yield put(receivedUserStats(res));
}

function* getMonthlyUserStats(action) {
    console.log("DASHBOARD SAGA RUN", action);
    let res;
    try {
    res = yield monthlyUserStatsAPI(2000);
    }
    catch (e) {
      console.log("ERROR", e);
    }
    finally {
      if (yield cancelled()) {
        console.log("CANCELLED");
      }
    }
    if(action.callback) {
      action.callback(res);
    }
    yield put(receivedMonthlyUserStats(res));
  }

  function* getAppDownloads(action) {
    console.log("DASHBOARD SAGA RUN", action);
    let res;
    try {
    res = yield appDownloadsAPI(2000);
    }
    catch (e) {
      console.log("ERROR", e);
    }
    finally {
      if (yield cancelled()) {
        console.log("CANCELLED");
      }
    }
    if(action.callback) {
      action.callback(res);
    }
    yield put(receivedAppDownloads(res));
  }


// Our watcher Saga: spawn a new getUsers task on each GET_USERS
export function* watchGetStats() {
  yield takeLatest(GET_USER_STATS , getUserStats);
  yield takeLatest(GET_MONTHLY_USER_STATS, getMonthlyUserStats);
  yield takeLatest(GET_APP_DOWNLOADS, getAppDownloads);
}