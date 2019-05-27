/**
 * The API used to request from Ghost
 */
import Telnet from 'telnet-client';

const params = {
  host: '127.0.0.1',
  port: 4000,
  shellPrompt: 'GHOST>',
  stripShellPrompt: true,
  timeout: 1500
};

const connection = new Telnet();

const getData = async () => {
  try {
    await connection.connect(params)

    const res = await connection.send('GET_DATA\r\n');
    await connection.send('CLOSE\r\n')

    return res.toString();
  } catch (err) {
    throw err;
  }
};

const startObserve = async () => {
  try {
    await connection.connect(params)

    await connection.send('OVERRIDE\r\n');
    await connection.send('OBSERVE\r\n');
    await connection.send('CLOSE\r\n')
  } catch (err) {
    throw err;
  }
};

const startAcquisition = async (n = 0) => {
  try {
    await connection.connect(params)

    await connection.send('OVERRIDE\r\n');
    await connection.send(`START ${n}\r\n`);
    await connection.send('CLOSE\r\n')
  } catch (err) {
    throw err;
  }
};

const stopAcquisition = async (n = 0) => {
  try {
    await connection.connect(params)

    await connection.send('OVERRIDE\r\n');
    await connection.send(`STOP\r\n`);
    await connection.send('CLOSE\r\n')
  } catch (err) {
    throw err;
  }
};
