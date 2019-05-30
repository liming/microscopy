import config from '../constants/config'
import { getData } from '../ghost/actionCreator';

export const START_OBSERVATION = 'START_OBSERVATION';
export const STOP_OBSERVATION = 'STOP_OBSERVATION';
export const START_ACQUISITION = 'START_ACQUISITION';
export const STOP_ACQUISITION = 'STOP_ACQUISITION';

let timer = null;

export const startObservation = () => (dispatch) => {
  clearInterval(timer);

  timer = setInterval(() => {
    dispatch(getData());
  }, config.OBSERVE_TIME);

  dispatch(getData());

  dispatch({
    type: START_OBSERVATION
  });
}

export function stopObservation() {
  clearInterval(timer);

  return {
    type: STOP_OBSERVATION
  };
}

export function startAcquisition() {
  return {
    type: START_ACQUISITION
  };
}

export function stopAcquisition() {
  return {
    type: STOP_ACQUISITION
  };
}
