// 
// @ts-nocheck
import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
//   AreaSeries,
//   ScatterSeries,
  Title,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { styled } from '@mui/material/styles';
// import { scalePoint } from 'd3-scale';

import { EventTracker, HoverState } from '@devexpress/dx-react-chart';

const data = [
  { key: 'Jan', value: 4 },
  { key: 'Feb', value: 3 },
  { key: 'March', value: 4 },
  { key: 'April', value: 5 },
  { key: 'May', value: 4 },
  { key: 'June', value: 5 },
  { key: 'July', value: 6 },
  { key: 'August', value: 7 },
  { key: 'September', value: 8 },
  { key: 'October', value: 6 },
  { key: 'November', value: 7 },
  { key: 'December', value: 8 },
];

const PREFIX = 'Demo';

const classes = {
  chart: `${PREFIX}-chart`,
};

const StyledChartRoot = styled(Chart.Root)(() => ({
  [`&.${classes.chart}`]: {
    paddingRight: '20px',
  },
}));

const ChartRoot = props => (
  <StyledChartRoot {...props} className={classes.chart} sx={{backgroundColor: "#f7776e", color: "white"}} />
);

export default class AttritionRate extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
        data,
      };
  }

  render() {
    const { data } = this.state;

    return (
      <Paper>
        <Chart
          data={data}
          rootComponent={ChartRoot}
        >
          <ArgumentAxis showGrid={false} showLine={false} showTicks={false} showLabels={false}/>
          <ValueAxis showGrid={false} showLine={false} showTicks={false} showLabels={false}/>

          <BarSeries
            name="_"
            valueField="value"
            argumentField="key"
            color={"white"}
          />
          <Animation />
          
          <Title
            text="Total Active Employees"
          />
          <EventTracker />
          <HoverState  />
          <Tooltip
            
          />
        </Chart>
      </Paper>
    );
  }
}