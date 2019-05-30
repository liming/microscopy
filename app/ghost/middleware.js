/**
 * The redux middleware connect to ghost
 */

import Telnet from 'telnet-client';

import {
  GHOST_CONNECT,
  GHOST_CONNECTED,
  GHOST_CONNECT_FAILED,
  GHOST_CONNECT_CLOSE,
  GHOST_SEND_REQUEST,
  GHOST_REQUEST_FAILED,
  GHOST_RESPONSE_RECEIVED
} from './constants';

// TODO: put this into configuration file
const params = {
  host: '127.0.0.1',
  port: 4000,
  shellPrompt: 'GHOST>',
  stripShellPrompt: true,
  timeout: 10000,
  sendTimeout: 5000
};

const ghostMiddleware = () => {
  const connection = new Telnet();

  return store => {

    const keepGhostAlive = async () => {
      const timer = setInterval(async () => {
        try {
          const status = await connection.send('STATUS\r\n');
          console.log('Ghost status is: ', status);
        } catch (error) {
          clearInterval(timer);

          console.error('Ghost connection failed: ', error);

          store.dispatch({
            error,
            type: GHOST_CONNECT_FAILED
          });
        }
      }, 5000);
    };

    const sendRequest = async (command) => {
      try {
        const result = await connection.send(`${command}\r\n`);
        console.log(result);

        store.dispatch({
          type: GHOST_RESPONSE_RECEIVED,
          payload: result
        });
      } catch (error) {
        store.dispatch({
          error,
          type: GHOST_REQUEST_FAILED,
        });
      }
    }

    // create telnet connection from ghost
    const setupConnection = async () => {
      try {
        await connection.connect(params);

        store.dispatch({
          type: GHOST_CONNECTED
        });

        keepGhostAlive();
      } catch (error) {
        store.dispatch({
          error,
          type: GHOST_CONNECT_FAILED
        });
      }
    };

    return next => action => {
      switch (action.type) {
        case GHOST_CONNECT:
          setupConnection();
          break;
        case GHOST_SEND_REQUEST:
          sendRequest(action.command);
          break;
        default:
          break;
      }

      return next(action);
    };
  };
};

export default ghostMiddleware;
