const fs = require('fs');

export const START_OBSERVATION = 'START_OBSERVATION';
export const STOP_OBSERVATION = 'STOP_OBSERVATION';
export const START_ACQUISITION = 'START_ACQUISITION';
export const STOP_ACQUISITION = 'STOP_ACQUISITION';

export function startObservation() {
  const data = new Uint8Array(Buffer.from('Hello Node.js'));
  fs.writeFileSync('./test.txt', data);

  return {
    type: START_OBSERVATION
  };
}

export function stopObservation() {
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
