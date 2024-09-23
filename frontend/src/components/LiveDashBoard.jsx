import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const LiveDashBoard = () => {
    const [chartsData, setChartsData] = useState({
        line: {
            series: [{ name: 'Random Data', data: [] }],
            options: {
                chart: { type: 'line' },
                xaxis: { type: 'datetime' },
                title: { text: 'Real-time Line Chart', align: 'center' }
            }
        },
        bar: {
            series: [{ name: 'Values', data: [] }],
            options: {
                chart: { type: 'bar' },
                xaxis: { categories: [] },
                title: { text: 'Bar Chart', align: 'left' }
            }
        },
        pie: {
            series: [],
            options: {
                chart: { type: 'pie' },
                labels: [],
                title: { text: 'Pie Chart', align: 'left' }
            }
        },
        area: {
            series: [{ name: 'Values', data: [] }],
            options: {
                chart: { type: 'area' },
                xaxis: { categories: [] },
                title: { text: 'Area Chart', align: 'left' }
            }
        },
        radar: {
            series: [{ name: 'Skills', data: [] }],
            options: {
                chart: { type: 'radar' },
                xaxis: { categories: [] },
                title: { text: 'Radar Chart', align: 'left' }
            }
        },
        heatmap: {
            series: [],
            options: {
                chart: { type: 'heatmap' },
                title: { text: 'Heatmap Chart: Data Metrics', align: 'left' },
                xaxis: { categories: [] }
            }
        },
        candlestick: {
            series: [{
                data: [
                    { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
                    { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
                    { x: new Date(1538782200000), y: [6630.71, 6648.95, 6623.34, 6635.65] },
                ]
            }],
            options: {
                chart: { type: 'candlestick' },
                title: { text: 'Candlestick Chart: Stock Prices', align: 'left' },
                xaxis: { type: 'datetime' }
            }
        },
        radialBar: {
            series: [67],
            options: {
                chart: { type: 'radialBar' },
                title: { text: 'RadialBar Chart: Performance Meter', align: 'left' },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: { show: true },
                            value: { show: true }
                        }
                    }
                }
            }
        },
        donut: {
            series: [44, 55, 41, 17],
            options: {
                chart: { type: 'donut' },
                labels: ['Category A', 'Category B', 'Category C', 'Category D'],
                title: { text: 'Donut Chart: Category Distribution', align: 'left' }
            }
        }
    });

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
        
            setChartsData((prev) => ({
                ...prev,
                line: {
                    ...prev.line,
                    series: [{ name: 'Random Data', data: [...prev.line.series[0].data, { x: message.lineData.x, y: message.lineData.y }] }]
                },
                bar: {
                    ...prev.bar,
                    series: [{ name: 'Values', data: message.barData.values }],
                    options: { ...prev.bar.options, xaxis: { categories: message.barData.categories } }
                },
                pie: {
                    ...prev.pie,
                    series: message.pieData.values,
                    options: { ...prev.pie.options, labels: message.pieData.labels }
                },
                area: {
                    ...prev.area,
                    series: [{ name: 'Values', data: message.areaData.y }],
                    options: { ...prev.area.options, xaxis: { categories: message.areaData.x } }
                },
                radar: {
                    ...prev.radar,
                    series: [{ name: 'Skills', data: message.radarData.values }],
                    options: { ...prev.radar.options, xaxis: { categories: message.radarData.categories } }
                },
                heatmap: {
                    ...prev.heatmap,
                    series: message.heatmapData.values,
                    options: { ...prev.heatmap.options, xaxis: { categories: message.heatmapData.categories } }
                },
                candlestick: {
                    ...prev.candlestick,
                    series: [{ data: message.candlestickData.data }],
                },
                radialBar: {
                    ...prev.radialBar,
                    series: [message.radialBarData.value],
                },
                donut: {
                    ...prev.donut,
                    series: message.donutData.values,
                    options: { ...prev.donut.options, labels: message.donutData.labels }
                }
            }));
        };
        

        return () => {
            socket.close();
        };
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px' }}>
            <div>
                <Chart 
                    options={chartsData.line.options} 
                    series={chartsData.line.series} 
                    type="line" 
                    height={400} 
                    width={800}
                />
            </div>
            <div>
                <Chart 
                    options={chartsData.bar.options} 
                    series={chartsData.bar.series} 
                    type="bar" 
                    height={400} 
                    width={400} 
                />
            </div>
            <div>
                <Chart 
                    options={chartsData.pie.options} 
                    series={chartsData.pie.series} 
                    type="pie" 
                    height={400} 
                    width={400}
                />
            </div>
            <div>
                <Chart 
                    options={chartsData.area.options} 
                    series={chartsData.area.series} 
                    type="area" 
                    height={400} 
                    width={400}
                />
            </div>
            <div>
                <Chart 
                    options={chartsData.radar.options} 
                    series={chartsData.radar.series} 
                    type="radar" 
                    height={400} 
                    width={400}
                />
            </div>
            <div>
                <Chart 
                    options={chartsData.heatmap.options} 
                    series={chartsData.heatmap.series} 
                    type="heatmap" 
                    height={400} 
                    width={400}
                />
            </div>
            <div>
                <Chart 
                    options={chartsData.candlestick.options} 
                    series={chartsData.candlestick.series} 
                    type="candlestick" 
                    height={400} 
                    width={400}
                />
            </div>
            <div>
                <Chart 
                    options={chartsData.radialBar.options} 
                    series={chartsData.radialBar.series} 
                    type="radialBar" 
                    height={400} 
                    width={400} 
                />
            </div>
            <div>
                <Chart 
                    options={chartsData.donut.options} 
                    series={chartsData.donut.series} 
                    type="donut" 
                    height={400} 
                    width={400}
                />
            </div>
        </div>
    );
};

export default LiveDashBoard;
