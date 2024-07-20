import React, { useEffect, useState, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { ValueContext } from '../../Value';
import {SocketContext} from '../../Socket';
import {
    Chart as ChartJS,
    LineController,
    LinearScale,
    CategoryScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    Colors,
} from 'chart.js';

ChartJS.register(
    LineController,
    LinearScale,
    CategoryScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    LineElement
);

const MAX_DATA_POINTS = 30;

const PriceChart = () => {
    const [datas, setDatas] = useState([]);
    const [times, setTimes] = useState([]);
    const value = useContext(ValueContext);
    const socket = useContext(SocketContext);
    

    useEffect(() => {
        socket.on('creditHistoryChange', ({datas, times}) => {
            setDatas(datas);
            
            setTimes(times);
           
        });
   

        return () => {
            socket.off('creditHistoryChange');
        };
    }, [value]);

    const data = {
        labels: times,
        datasets: [
            {
                label: 'GreenCredit-price',
                data: datas,
                fill: false,
                backgroundColor: '#f8f9fa',
                borderColor: '#f8f9fa',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'E-GreenCredits Stock Price Tracker',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        
    };

    return (
        <div className="chart-scroll-container">
            <div className="chart-container">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default PriceChart;
