import React, {Component} from 'react';
import styles from './PositionsPanel.css'
import {Card, Elevation, FormGroup, NumericInput} from '@blueprintjs/core';

export default class PositionPanel extends Component<Props> {
  constructor () {
    super();
  }

  render () {
    const inputClass = `bp3-input ${styles.positionInput}`;
    const {x, y, z} = this.props.position || {x: 0, y: 0, z: 0};

    return (
      <div className={styles.positionContainer}>
        <Card elevation={Elevation.ONE}>
          <h5 className="bp3-heading">Positions</h5>
          <div style={{display: "flex", flexDirection: "row"}}>
            <FormGroup inline={true} label="X">
              <input className={inputClass} type="number" defaultValue={x} />
            </FormGroup>
            <FormGroup inline={true} label="Y">
              <input className={inputClass} type="number" defaultValue={y} />
            </FormGroup>
            <FormGroup inline={true} label="Z">
              <input className={inputClass} type="number" defaultValue={z} />
            </FormGroup>
          </div>
        </Card>
      </div>
    );
  }
}
