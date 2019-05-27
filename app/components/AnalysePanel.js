import React from 'react';
import styles from './AnalysePanel.css';
import {FormGroup, Text, ButtonGroup, Button} from '@blueprintjs/core';

type PositionSettingsProps = {
  name: string,
};

const PositionSettings = (props: PositionSettingsProps) => {
  const inputClass = `bp3-input ${styles.positionInput}`

  return (
    <FormGroup label={props.name} contentClassName={styles.positionForm}>
      <input className={inputClass} type="number" placeholder="Start" />
      <input className={inputClass} type="number" placeholder="End" />
      <input className={inputClass} type="number" placeholder="Step" />
    </FormGroup>
  );
};

const Positions = () => {
  return (
    <div>
      <PositionSettings name="X" />
      <PositionSettings name="Y" />
      <PositionSettings name="Z" />
    </div>
  );
};

const TimeSetting = () => {
  return (
    <div style={{marginTop: "2em"}}>
      <FormGroup label="Time Interval (0.01s - 2min)" contentClassName={styles.timeSetting}>
        <input className="bp3-input" type="text" placeholder="Input Intervel" />
      </FormGroup>
    </div>
  );
};

const Actions = () => {
  return (
    <div className={styles.actions}>
      <ButtonGroup style={{minWidth: 200}} minimal={true}>
        <Button icon="pause">Pause</Button>
        <Button icon="stop">Stop</Button>
        <Button icon="play">Go</Button>
      </ButtonGroup>
    </div>
  );
};


const AnalysePanel = () => {
  return (
    <div className={styles.container}>
      <Positions />
      <TimeSetting />
      <Actions />
    </div>
  );
};

export default AnalysePanel;
