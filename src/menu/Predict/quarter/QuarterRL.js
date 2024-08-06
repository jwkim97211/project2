import React from 'react';
import { Handle } from 'reactflow';

const QuarterRL = ({ data }) => {
    return (
        <div style={{
            backgroundColor: '#FEF3BD',
            color: 'black',
            borderRadius: '10%',
            width: 60,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid black',
            fontSize:12,
            fontWeight : 'bold'
        }}>
            {data.label}
            <Handle type={data.R} position="right" />
            <Handle type={data.L} position="left" />
        </div>
    );
};

export default QuarterRL;