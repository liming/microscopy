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
  timeout: 10000
};

const ghostMiddleware = () => {
  const connection = new Telnet();

  return store => {

    // create telnet connection from ghost
    const setupConnection = () => {
      connection.connect(params);

      connection.on('ready', () => {

        setInterval(() => {
          connection.send('STATUS\r\n', err => {
            if (err) {
              return store.dispatch({
                type: GHOST_REQUEST_FAILED,
                error: err
              });
            }
          });
        }, 5000);

        store.dispatch({
          type: GHOST_CONNECTED
        });
      });

      connection.on('timeout', () => {
        store.dispatch({
          type: GHOST_CONNECT_FAILED,
          error: new Error('Ghost connection timeout')
        });

        connection.end();
      });

      connection.on('error', err => {
        store.dispatch({
          type: GHOST_CONNECT_FAILED,
          error: err
        });

        connection.end();
      });

      connection.on('close', () => {
        store.dispatch({
          type: GHOST_CONNECT_CLOSE
        });
      });
    };

    return next => action => {
      switch (action.type) {
        case GHOST_CONNECT:
          setupConnection();
          break;
        case GHOST_SEND_REQUEST:
          connection.send(`${action.command}\r\n`, (err, result) => {
            if (err) {
              return store.dispatch({
                type: GHOST_REQUEST_FAILED,
                error: err
              });
            }

            store.dispatch({
              type: GHOST_RESPONSE_RECEIVED,
              payload: result
            });
          });
          break;
        default:
          break;
      }

      return next(action);
    };
  };
};

export default ghostMiddleware;
