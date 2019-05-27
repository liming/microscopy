import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './HomePage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnalysePanel from '../components/AnalysePanel';
import AnalyseCanvas from '../components/AnalyseCanvas';
import * as AnalyseActions from '../actions/analyse';

type Props = {};

class AnalysePage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <Header />
        <div className={styles.workArea}>
          <AnalysePanel />
          <AnalyseCanvas />
        </div>
        <Footer page='analyse' />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AnalyseActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnalysePage);
