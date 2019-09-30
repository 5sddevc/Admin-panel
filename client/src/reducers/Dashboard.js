import { RECEIVED_USER_STATS, RECEIVED_MONTHLY_USER_STATS, RECEIVED_APP_DOWNLOADS } from "../configurations/Types"

const INITIAL_STATE = {
  userStats: null,
  monthlyUserStats: null,
  appDownloads: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVED_USER_STATS: {
        return Object.assign({}, state, { userStats: action.payload });
    }
    case RECEIVED_MONTHLY_USER_STATS: {
        return Object.assign({}, state, { monthlyUserStats: action.payload });
    }
    case RECEIVED_APP_DOWNLOADS: {
        return Object.assign({}, state, { appDownloads: action.payload });
    }
    default: {
        return state;
    }
  }
}