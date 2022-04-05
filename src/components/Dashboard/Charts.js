
import React from 'react';
import { Bar, CartesianGrid, ComposedChart, Line, LineChart, XAxis, YAxis } from 'recharts';
import './Charts.css'

const Charts = () => {
    const data = [
        {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 10401
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 24500
        },
        {
            month: "May",
            investment: 500000,
            sell: 726,
            revenue: 67010
        },
        {
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 40405
        },
        {
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 50900
        },
        {
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 61000
        },
    ];
    return (

        <div className='charts'>
            <div><h3><span style={{ color: 'darkblue' }}>Investment</span> Vs <span style={{ color: 'lightgreen' }}>Revenue</span></h3>
                <LineChart width={800} height={500} data={data} margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis dataKey={'investment'}></YAxis>
                    {/* <Tooltip></Tooltip>
                <Legend></Legend> */}
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                    {/* <Tooltip /> */}
                </LineChart>
            </div>
            <div>
                <h3 style={{ color: 'lightblue' }}>Sells/Month chart</h3>
                {/* <ResponsiveContainer width="100%" height="100%"> */}
                <ComposedChart
                    width={800}
                    height={500}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="month" scale="band" />
                    <YAxis />
                    {/* <Tooltip />
                        <Legend /> */}
                    <Bar dataKey="sell" barSize={20} fill="#413ea0" />
                </ComposedChart>
                {/* </ResponsiveContainer> */}
            </div>
        </div>

    );
};

export default Charts;