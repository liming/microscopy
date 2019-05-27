import React, {Component} from 'react';
import styles from './AnalyseCanvas.css';
import {Tabs, Tab} from '@blueprintjs/core';
import Chart from './Chart';
import heatmapOption from '../../test/data/heatmap';

const FrequencyPanel = () => {
  return (
    <Chart option={heatmapOption}></Chart>
  );
}

const WidthPanel = () => {
  return (
    <div>Show Width</div>
  );
}

export default class AnalyseCanvas extends Component<Props> {
  constructor () {
    super();

    this.handleTabChange = this.handleTabChange.bind(this);

    this.state = {navbarTabId: 'frequency'}
  }

  handleTabChange (navbarTabId: TabId) {
    this.setState({ navbarTabId });
  }

  render () {
    return (
      <div className={styles.container}>
        <Tabs
          className={styles.tab}
          id="chartList"
          selectedTabId={this.state.navbarTabId}
          animate={true}
          onChange={this.handleTabChange}>
          <Tab id="frequency" className={styles.canvas} title="Frequency" panel={<FrequencyPanel />} />
          <Tab
            id="frequency3d"
            title="Frequency 3D"
            panel={<FrequencyPanel />}
          />
          <Tab id="width" title="Width" panel={<WidthPanel />} />
          <Tab id="width3d" title="Width 3D" panel={<WidthPanel />} />
        </Tabs>
      </div>
    );
  }
}
