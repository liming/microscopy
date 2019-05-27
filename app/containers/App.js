// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ghostActions from '../ghost/actionCreator';
import { BrowserWindow, remote } from 'electron';
import { errorTypes } from '../constants/errors';

type Props = {
  children: React.Node
};

class App extends React.Component<Props> {
  props: Props;

  state = {
    loading: true
  };

  load() {
    this.props.connectGhost();

    return new Promise(resolve => setTimeout(() => resolve(), 1500));
  };

  componentDidMount() {
    this.load()
      .then(() => this.setState({ loading: false }))
      .catch(err => console.error(err));
  }

  render() {
    const { loading } = this.state;
    const { type, error } = this.props;

    if (loading) return null;

    if (error && type === errorTypes.QUIT) {
      return remote.dialog.showMessageBox({
        type: 'error',
        message: error.message
      }, () => {
        const mainWindow = remote.getCurrentWindow();

        mainWindow.close();
      });
    }

    const { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}

function mapStateToProps(state) {
  return state.connection;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ghostActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
