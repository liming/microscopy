import React, {Component} from 'react';
import {Card, Elevation, Button} from '@blueprintjs/core';
import text from '../constants/text'

export default class SpectrumSettings extends Component<Props> {
  constructor () {
    super ();
  }

  render () {
    return (
      <div>
        <Card elevation={Elevation.ONE}>
          <h5 className="bp3-heading">Spectrum Settings</h5>
          <Button>{text.calibration}</Button>
        </Card>
      </div>
    );
  }
}
