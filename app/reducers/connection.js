import {
  GHOST_CONNECT,
  GHOST_CONNECTED,
  GHOST_CONNECT_FAILED,
  GHOST_CONNECT_CLOSE,
  GHOST_SEND_REQUEST,
  GHOST_REQUEST_FAILED,
  GHOST_RESPONSE_RECEIVED
} from '../ghost/constants';

import { errorTypes } from '../constants/errors';

const connection = (state = {}, action) => {
  switch (action.type) {
    case GHOST_CONNECT_FAILED:
      return Object.assign({}, state, {
        type: errorTypes.QUIT, error: action.error
      });
    default:
      return state;
  }
};

export default connection;
