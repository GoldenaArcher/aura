// @ts-nocheck

// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import {
//   ArgumentAxis,
//   ValueAxis,
//   BarSeries,
//   Chart,
//   LineSeries,
//   Title
// } from '@devexpress/dx-react-chart-material-ui';
// import { ValueScale } from '@devexpress/dx-react-chart';

// import { EventTracker, HoverState, SelectionState } from '@devexpress/dx-react-chart';

// interface IDataItem {
//   month: string,
//   sale: number,
//   total: number,
// }

// const chartData: IDataItem[] = [
// //   { month: 'Jan', sale: 50, total: 987 },
// //   { month: 'Feb', sale: 100, total: 3000 },
// //   { month: 'March', sale: 30, total: 1100 },
// //   { month: 'April', sale: 107, total: 7100 },
// //   { month: 'May', sale: 95, total: 4300 },
// //   { month: 'June', sale: 150, total: 7500 },
//   { month: 'Jan', total: 3.5 },
//   { month: 'Feb', total: 3 },
//   { month: 'March', total: 4 },
//   { month: 'April', total: 5 },
//   { month: 'May', total: 4 },
//   { month: 'June', total: 5 },
//   { month: 'July', total: 6 },
//   { month: 'August', total: 7 },
//   { month: 'September', total: 8 },
//   { month: 'October', total: 7 },
//   { month: 'November', total: 7.5 },
//   { month: 'December', total: 8 },
// ];

// const compare = (
//     { series, point }, { series: targetSeries, point: targetPoint },
//   ) => series === targetSeries && point === targetPoint;

// export default class Demo extends React.Component<object, object> {
//     constructor(props) {
//         super(props);
    
//         this.state = {
//           chartData,
//         };
//       }

// //   public render(): React.ReactNode {
//     render() {

//         const { chartData: chartData } = this.state;        

//     return (
//       <Paper>
//         <Chart
//           data={chartData}
//         >
//           {/* <ValueScale name="sale" /> */}
//           <ValueScale name="total" />

//           <ArgumentAxis />
//           {/* <ValueAxis scaleName="sale" showGrid={false} showLine={false} showTicks={false} /> */}
//           <ValueAxis scaleName="total" position="right" showGrid={false} showLine={false} showTicks={false} />

//           {/* <BarSeries
//             name="Units Sold"
//             valueField="sale"
//             argumentField="month"
//             scaleName="sale"
//           /> */}

//           <LineSeries
//             name="Total Transactions"
//             valueField="total"
//             argumentField="month"
//             scaleName="total"
//             coordinates={{}}
//           />
//           <Title
//             text="Total Active Employees"
//           />

// <EventTracker />
//           <HoverState  />
//         </Chart>
//       </Paper>
//     );
//   }
// }

///////////////////

// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import {
//   ArgumentAxis,
//   ValueAxis,
//   Chart,
//   LineSeries,
// } from '@devexpress/dx-react-chart-material-ui';

// const data = [
//   { argument: 1, value: 33 },
//   { argument: 2, value: 35 },
//   { argument: 3, value: 33 },
//   { argument: 4, value: 36 },
//   { argument: 5, value: 34 },
//   { argument: 6, value: 33 },
//   { argument: 7, value: 35 },
//   { argument: 8, value: 37 },
//   { argument: 9, value: 36 },
//   { argument: 10, value: 34 },
//   { argument: 11, value: 33 },
//   { argument: 12, value: 38 }, 

// // { argument: 1, value: 28 },
// //   { argument: 2, value: 32 },
// //   { argument: 3, value: 28 },
// //   { argument: 4, value: 34 },
// //   { argument: 5, value: 30 },
// //   { argument: 6, value: 28 },
// //   { argument: 7, value: 32 },
// //   { argument: 8, value: 37 },
// //   { argument: 9, value: 34 },
// //   { argument: 10, value: 30 },
// //   { argument: 11, value: 28 },
// //   { argument: 12, value: 38 },
// ];

// export const Demo = () => (
//   <Paper>
//     <Chart
//       data={data}
//     >
//       <ArgumentAxis />
//       <ValueAxis />

//       <LineSeries valueField="value" argumentField="argument" />
//     </Chart>
//   </Paper>
// );

////////

import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  AreaSeries,
  ScatterSeries,
  Title,
  Legend,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import { styled } from '@mui/material/styles';
import { scalePoint } from 'd3-scale';

import { EventTracker, HoverState, SelectionState } from '@devexpress/dx-react-chart';

const data = [
//   { year: '2010', android: 67225, ios: 46598 },
//   { year: '2011', android: 179873, ios: 90560 },
//   { year: '2012', android: 310088, ios: 118848 },
//   { year: '2015', android: 539318, ios: 189924 },

//   { year: '2010', android: 67225 },
//   { year: '2011', android: 179873},
//   { year: '2012', android: 310088},
//   { year: '2015', android: 539318},

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
  <StyledChartRoot {...props} className={classes.chart} sx={{backgroundColor: "#76b5c5", color: "white"}} />
);
const LegendRoot = props => (
  <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const LegendLabel = props => (
  <Legend.Label {...props} sx={{ pt: 1 }} />
);
const LegendItem = props => (
  <Legend.Item {...props} sx={{ flexDirection: 'column' }} />
);

export default class Demo extends React.PureComponent {
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
      <Paper>
        <Chart
          data={chartData}
          rootComponent={ChartRoot}
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
          
          {/* <AreaSeries
            name="iOS"
            valueField="ios"
            argumentField="year"
          /> */}
          <Animation />
          {/* <Legend
            position="bottom"
            rootComponent={LegendRoot}
            itemComponent={LegendItem}
            labelComponent={LegendLabel}
          /> */}
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
    );
  }
}