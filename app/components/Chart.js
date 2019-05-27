import React, {Component} from 'react';
import * as echarts from "echarts";


export default class Chart extends Component {
  constructor (props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount () {
    const {option} = this.props;

    this.chart = echarts.init(this.canvasRef.current);

    this.chart.setOption(option);
  }

  componentDidUpdate () {
    const {option} = this.props;

    this.chart.setOption(option);
  }

  render () {
    return (
      <div
        style={{width: "100%", height: "100%"}}
        ref={this.canvasRef}>
			</div>
		);
  }
}
