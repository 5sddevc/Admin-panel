import { GET_USERS, RECEIVED_USERS } from '../configurations/Types';
import { DEFAULT_TABLE_PAGE_SIZE } from "../configurations/Constants";
//import rootModal from '../commons/modals/rootModal';

export function getUsers(limit, offset, search, filter, cb) {
  return {
    type: GET_USERS,
    params: { limit: limit || DEFAULT_TABLE_PAGE_SIZE,
              offset: offset || 0,
              search: search || null,
              filter: filter || null },
    callback: cb
  }
}

export function receivedUsers(userData) {
  return {
    type: RECEIVED_USERS,
    payload: userData
  }
}