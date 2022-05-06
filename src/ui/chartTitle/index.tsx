import React, { FC } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

type ChartTitleProps = {
    total: number;
    title: string
}

const ChartTitle: FC<ChartTitleProps> = (props) => {

    return (
        <div className="chart-title">
          <h1>{props.total} <ArrowUpwardIcon/></h1>
          <p>{props.title}</p>
        </div>
    );
}

export default ChartTitle;