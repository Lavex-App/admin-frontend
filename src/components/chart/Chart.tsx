import React from 'react';

import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis} from 'recharts';

import './chart.scss';

const data = [
    {name: "Janeiro", Total: 1200},
    {name: "Fevereiro", Total: 1720},
    {name: "Março", Total: 2400},
    {name: "Abril", Total: 1942},
    {name: "Maio", Total: 2638},
    {name: "Junho", Total: 4086},
    {name: "Julho", Total: 6310},
];

export const Chart: React.FC = () => (
    <div className="chart">
        <div className="title">Últimos 6 Meses (Lucro)</div>
        <ResponsiveContainer width="100%" aspect={2 / 1}>
            <AreaChart width={730} height={250} data={data}
                       margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <defs>
                    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                        <stop className="chartAreaTop" offset="20%" stopOpacity={0.5}/>
                        <stop className="chartAreaMiddle" offset="50%" stopOpacity={0.7}/>
                        <stop className="chartAreaBottom" offset="99%" stopOpacity={0.05}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name"/>
                <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
                <Tooltip/>
                <Area type="monotone" dataKey="Total" stroke="#2B9985" fillOpacity={1} fill="url(#total)"/>
            </AreaChart>
        </ResponsiveContainer>
    </div>
);
