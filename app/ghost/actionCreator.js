/**
 * Abstract action creator. We need wrap the underlying ghost actions into different functions.
 */

import { GHOST_CONNECT, GHOST_SEND_REQUEST } from './constants';

export function connectGhost() {
  return {
    type: GHOST_CONNECT
  };
}

export function getData() {
  return {
    type: GHOST_SEND_REQUEST,
    command: 'GET_DATA'
  };
}
