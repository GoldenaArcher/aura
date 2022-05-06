//
// @ts-nocheck
import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  AreaSeries,
  ScatterSeries,
  Title,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import { styled } from '@mui/material/styles';
import { scalePoint } from 'd3-scale';

import { EventTracker, HoverState } from '@devexpress/dx-react-chart';
import ChartTitle from '../chartTitle';

const data = [
  { month: 'Jan', android: 4 },
  { month: 'Feb', android: 3 },
  { month: 'March', android: 4 },
  { month: 'April', android: 5 },
  { month: 'May', android: 4 },
  { month: 'June', android: 5 },
  { month: 'July', android: 6 },
  { month: 'August', android: 7 },
  { month: 'September', android: 8 },
  { month: 'October', android: 6 },
  { month: 'November', android: 7 },
  { month: 'December', android: 8 },
];

const PREFIX = 'NewHiresChart';

const classes = {
  chart: `${PREFIX}-chart`,
};

const StyledChartRoot = styled(Chart.Root)(() => ({
  [`&.${classes.chart}`]: {
    borderRadius: '10px',
  },
}));

const ChartRoot = props => (
  <StyledChartRoot {...props} className={classes.chart} sx={{backgroundColor: "#76b5c5", color: "#76b5c5"}} />
);
// const LegendRoot = props => (
//   <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
// );
// const LegendLabel = props => (
//   <Legend.Label {...props} sx={{ pt: 1 }} />
// );
// const LegendItem = props => (
//   <Legend.Item {...props} sx={{ flexDirection: 'column' }} />
// );

export default class NewHiresChart extends React.PureComponent {
  constructor(props) {
    super(props);

    // this.state = {
    //   data,
    //   hover: undefined
    // };
    // this.changeHover = hover => this.setState({ hover });

    this.state = {
        data,
      };
  }

  render() {
    // const { data: chartData, hover } = this.state;
    const { data: chartData } = this.state;

    return (
      <div className="">
        <ChartTitle title="Total New Hires" total={100}></ChartTitle>
      <Paper>
        <Chart
          data={chartData}
          rootComponent={ChartRoot}
          height={200}
        >
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis showGrid={false} showLine={false} showTicks={false} showLabels={false}/>
          <ValueAxis showGrid={false} showLine={false} showTicks={false} showLabels={false}/>

          <AreaSeries
            name="123"
            valueField="android"
            argumentField="month"
            color={"#abdbe3"}
          />
          <ScatterSeries
            valueField="android"
            argumentField="month"
            color={"white"}
          />
          <Animation />

          <Title
            text="Total New Hires"
          />
          <EventTracker />
          {/* <HoverState  hover={hover} onHoverChange={this.changeHover}/> */}
          <HoverState defaultHover={AreaSeries} />
          {/* <SelectionState selection={selection} /> */}
          <Tooltip
            // targetItem={target}
            // contentComponent={this.TooltipContent}
          />
        </Chart>
      </Paper>
      </div>
    );
  }
}