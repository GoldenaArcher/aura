import React, { useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

type ChartTitleProps = {
    total: number;
    title: string
}

const ChartTitle: ChartTitleProps = (props) => {
    // const [total, setTotal] = useState({})

    return (
        <div className="chart-title">
          <h1>{props.total} <ArrowUpwardIcon/></h1>
          <p>{props.title}</p>
        </div>
    );
}

export default ChartTitle;