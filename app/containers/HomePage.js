// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import styles from './HomePage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SpectrumPanel from '../components/SpectrumPanel';
import SpectrumCanvas from '../components/SpectrumCanvas';
import StatusPanel from '../components/StatusPanel';
import ActionPanel from '../components/ActionPanel';
import PositionsPanel from '../components/PositionsPanel';
import SpectrumSettings from '../components/SpectrumSettings';
import * as SpectrumActions from '../actions/spectrum';
import {Position} from '../utils/types';

type Props = {
  position: Position,
  observe: string,
  acquisite: string,
  startObservation: () => void,
  stopObservation: () => void
};

class HomePage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <Header />
        <div className={styles.workArea}>
          <div className={styles.spectrumPanel}>
            <StatusPanel />
            <PositionsPanel position={this.props.position}/>
            <SpectrumSettings />
            <ActionPanel
              observe={this.props.observe}
              acquisite={this.props.acquisite}
              onStartObservation={this.props.startObservation}
              onStopObservation={this.props.stopObservation}
              onStartAcquisition={this.props.startAcquisition}
              onStopAcquisition={this.props.stopAcquisition} />
          </div>
          <SpectrumCanvas />
        </div>
        <Footer page='spectrum' />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    position: state.spectrum.position,
    observe: state.spectrum.observe,
    acquisite: state.spectrum.acquisite
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SpectrumActions, dispatch);
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage));
