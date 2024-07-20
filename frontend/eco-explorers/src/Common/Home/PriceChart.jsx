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

    useEffect(() => {
  
            setDatas((prevDatas) => {
                if (prevDatas.length >= MAX_DATA_POINTS) {
                    prevDatas.shift();
                }
                const newDatas = [...prevDatas, value];
                // localStorage.setItem('datas', JSON.stringify(newDatas));
                return newDatas;
            });
            setTimes((prevTimes) => {
                if (prevTimes.length >= MAX_DATA_POINTS) {
                    prevTimes.shift();
                }
                const newTimes = [...prevTimes, new Date().toLocaleTimeString()];
                // localStorage.setItem('times', JSON.stringify(newTimes));
                return newTimes;
            });
   

        return ;
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
