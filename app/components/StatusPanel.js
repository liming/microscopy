import React from 'react';
import {Card, Elevation} from '@blueprintjs/core';
import text from '../constants/text';
import styles from './StatusPanel.css';

const StatusPanel = () => {
  return (
    <div>
      <Card elevation={Elevation.ONE}>
        <h5 className="bp3-heading">Status</h5>
        <ol className={styles.statusList}>
          <li><span className={styles.statusName}>{text.width}:</span>100</li>
          <li>
            <span className={styles.statusName}>{text.frequency}:</span>1.2345
          </li>
        </ol>
      </Card>
    </div>
  );
};

export default StatusPanel;
