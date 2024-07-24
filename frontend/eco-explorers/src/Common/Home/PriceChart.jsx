import React, { useEffect, useState, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { ValueContext } from '../../Value';
import { SocketContext } from '../../Socket';
import axios from 'axios';
const base_url = import.meta.env.VITE_REACT_APP_API_BASE_URL;

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

const MAX_DATA_POINTS = 30;

const PriceChart = () => {
    const [datas, setDatas] = useState([]);
    const [times, setTimes] = useState([]);
    const value = useContext(ValueContext);
    const socket = useContext(SocketContext);
    const base_url = import.meta.env.VITE_REACT_APP_API_BASE_URL;

    useEffect(() => {
        // Fetch initial data from the server
        const fetchInitialData = async () => {
            try {
                const MAX_DATA_POINTS = 30;

                const response = await axios.get(`${base_url}/api/greenCreditHistory`);
                setDatas(response.data.data);
                setTimes(response.data.time);
                value.setValue(response.data.data[-1]);
                if (datas.length >= MAX_DATA_POINTS) {
                    setDatas(datas.shift(data.length - MAX_DATA_POINTS));
                    setDatas([...data, data[-1]]);
                }

                if (times.length >= MAX_DATA_POINTS) {
                    setTimes(times.shift(times.length - MAX_DATA_POINTS));
                    setTimes([...times, new Date().toLocaleString()])
                }

            } catch (error) {
                console.error("Error fetching initial green credit history: ", error);
            }
        };

        fetchInitialData();

        // Listen for real-time updates
        socket.on('creditHistoryChange', ({ datas, times }) => {
            setDatas(datas);
            setTimes(times);
        });

        return () => {
            socket.off('creditHistoryChange');
        };
    }, [socket]);

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

