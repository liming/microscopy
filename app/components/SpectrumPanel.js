import React from 'react';
import styles from './SpectrumPanel.css';
import {Card, Elevation, ButtonGroup, Button} from '@blueprintjs/core';
import text from '../constants/text';
import PositionsPanel from './PositionsPanel';
import SpectrumSettings from './SpectrumSettings';

const StatusPanel = () => {
  return (
    <div className={styles.statusContainer}>
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

const ActionsPanel = () => {
  return (
    <div className={styles.actionsContainer}>
      <Card elevation={Elevation.ONE}>
        <h5 className="bp3-heading">Actions</h5>
        <ButtonGroup minimal={true}>
          <Button icon="play" className={styles.actionButton}>{text.observe}</Button>
          <Button icon="play" className={styles.actionButton}>{text.acquisition}</Button>
        </ButtonGroup>
        <ButtonGroup minimal={true}>
          <Button icon="delete" className={styles.actionButton}>{text.clear}</Button>
          <Button icon="saved" className={styles.actionButton}>{text.save}</Button>
        </ButtonGroup>
      </Card>
    </div>
  );
};

type Props = {
  startObservation: () => void,
  // stopObservation: () => void,
  // startAcquisition: () => void,
  // stopAcquisition: () => void,
};

const SpectrumPanel = (props) => {
  return (
    <div className={styles.container}>
      <StatusPanel />
      <PositionsPanel position={props.position}/>
      <SpectrumSettings />
      <ActionsPanel />
    </div>
  );
};

export default SpectrumPanel;
