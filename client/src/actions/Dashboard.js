import {
  GET_USER_STATS, GET_MONTHLY_USER_STATS, GET_APP_DOWNLOADS,
  RECEIVED_USER_STATS, RECEIVED_MONTHLY_USER_STATS, RECEIVED_APP_DOWNLOADS
}
  from '../configurations/Types';

//User stats actions
export function getUserStats (cb) {
  return {
    type: GET_USER_STATS,
    params: {},//Can send params to query here
    callback: cb
  }
}

export function receivedUserStats(userData) {
  return {
    type: RECEIVED_USER_STATS,
    payload: userData
  }
}

//Monthly user stats actions
export function getMonthlyUserStats(month, year, cb) {
  return {
    type: GET_MONTHLY_USER_STATS,
    params: { month, year },//Can send params to query here
    callback: cb
  }
}

export function receivedMonthlyUserStats(monthlyUserStats) {
  return {
    type: RECEIVED_MONTHLY_USER_STATS,
    payload: monthlyUserStats
  }
}

//App downloads actions
export function getAppDownloads(startMonth, startYear, endMonth, endYear, cb) {
  return {
    type: GET_APP_DOWNLOADS,
    params: { startMonth, startYear, endMonth, endYear },//Can send params to query here
    callback: cb
  }
}

export function receivedAppDownloads(appDownloads) {
  return {
    type: RECEIVED_APP_DOWNLOADS,
    payload: appDownloads
  }
}