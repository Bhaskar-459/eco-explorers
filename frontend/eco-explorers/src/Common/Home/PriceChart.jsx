import React, { useEffect, useState, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { ValueContext } from '../../Value';
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

const MAX_DATA_POINTS = 100;

const PriceChart = () => {
    const [datas, setDatas] = useState([]);
    const [times, setTimes] = useState([]);
    const value = useContext(ValueContext);

    useEffect(() => {
        const interval = setInterval(() => {
            setDatas((prevDatas) => {
                const newDatas = [...prevDatas, Math.floor(Math.random() * 100)];
                // localStorage.setItem('datas', JSON.stringify(newDatas));
                return newDatas;
            });
            setTimes((prevTimes) => {
                const newTimes = [...prevTimes, new Date().toLocaleTimeString()];
                // localStorage.setItem('times', JSON.stringify(newTimes));
                return newTimes;
            });
        }, 500);

        return () => clearInterval(interval);
    }, [value]);

    const data = {
        labels: times,
        datasets: [
            {
                label: 'GreenCredit-price',
                data: datas,
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 1)',
            },
        ],
    };

    const options = {
        responsive: true,
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
