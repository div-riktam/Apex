import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const WebSocketChart = () => {
  const [chartData, setChartData] = useState({
    series: [{ name: 'Random Data', data: [] }],
    options: {
      chart: {
        type: 'line',
        animations: {
          enabled: true,
          dynamicAnimation: { speed: 1000 }
        }
      },
      xaxis: { type: 'datetime' },
      title: { text: 'Real-time Random Data', align: 'center' }
    }
  });

  useEffect(() => {
    // Connect to WebSocket server
    const socket = new WebSocket('ws://localhost:8080');

    // When data is received from the WebSocket
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const { value, timestamp } = message;

      setChartData((prevData) => ({
        ...prevData,
        series: [
          {
            name: 'Random Data',
            data: [...prevData.series[0].data, { x: timestamp, y: value }]
          }
        ]
      }));
    };

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []);

  return <Chart options={chartData.options} series={chartData.series} type="line" height={350} />;
};

export default WebSocketChart;
