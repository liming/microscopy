// @flow
import React from 'react';
import {Card, Elevation, ButtonGroup, Button} from '@blueprintjs/core';
import text from '../constants/text';

type Props = {
  onStartObservation: () => void,
  onStopObservation: () => void,
  onStartAcquisition: () => void,
  onStopAcquisition: () => void,
  observe: string,
  acquisite: string
}

const ActionPanel = (props: Props) => {
  const observeAction = props.observe === 'stop' ? props.onStartObservation : props.onStopObservation;
  const acquisiteAction = props.acquisite === 'stop' ? props.onStartAcquisition : props.onStopAcquisition;

  return (
    <div>
      <Card elevation={Elevation.ONE}>
        <h5 className="bp3-heading">Actions</h5>
        <ButtonGroup minimal={true}>
          <Button icon="play" onClick={observeAction}>
            {props.observe === 'stop' ? text.startobserve : text.stopobserve}
          </Button>
          <Button icon="play" onClick={acquisiteAction}>
            {props.acquisite === 'stop' ? text.startacquisition : text.stopacquisition}
          </Button>
        </ButtonGroup>
        <ButtonGroup minimal={true}>
          <Button icon="delete">{text.clear}</Button>
          <Button icon="saved">{text.save}</Button>
        </ButtonGroup>
      </Card>
    </div>
  );
};

export default ActionPanel;
