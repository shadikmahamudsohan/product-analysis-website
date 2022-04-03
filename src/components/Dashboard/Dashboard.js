import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { LineChart, Line, XAxis, Tooltip, YAxis, CartesianGrid, BarChart, Legend, Bar } from 'recharts';
const Dashboard = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    return (
        <div>
            <Row xs={1} md={2} className="g-4 w-100 overflow-hidden mt-5">
                <div>
                    <h5 className='text-center text-primary'>MONTH WISE SELL</h5>
                    <LineChart width={600} height={350} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                </div>
                <div>
                    <h5 className='text-center text-primary'>Investment VS Revenue</h5>
                    <BarChart width={600} height={350} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
            </Row>
        </div>
    );
};

export default Dashboard;