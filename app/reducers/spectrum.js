import {
  START_OBSERVATION,
  STOP_OBSERVATION,
  START_ACQUISITION,
  STOP_ACQUISITION
} from '../actions/spectrum';

const initialState = {
  observe: 'stop',
  acquisite: 'stop',
  position: {x: 0, y: 0, z: 0}
};

const spectrum = (state = initialState, action) => {
  switch (action.type) {
    case START_OBSERVATION:
      return Object.assign({}, state, {observe: 'start'});
    case STOP_OBSERVATION:
      return Object.assign({}, state, {observe: 'stop'});
    case START_ACQUISITION:
      return Object.assign({}, state, {acquisite: 'start'});
    case STOP_ACQUISITION:
      return Object.assign({}, state, {acquisite: 'stop'});
    default:
      return state;
  }
}

export default spectrum;
