import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';

const Dashboard = () => {
    useEffect(() => {
    })
    const chartsData = {
        line: {
            series: [{ name: 'Sales', data: [31, 40, 28, 51, 42, 109, 100] }],
            options: {
                chart: { type: 'line' },
                title: { text: 'Line Chart: Sales Over Time', align: 'left' },
                xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] }
            }
        },
        bar: {
            series: [{ name: 'Profits', data: [10, 20, 30, 40, 50, 60] }],
            options: {
                chart: { type: 'bar' },
                title: { text: 'Bar Chart: Quarterly Profits', align: 'left' },
                xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'] }
            }
        },
        pie: {
            series: [44, 55, 41],
            options: {
                chart: { type: 'pie' },
                labels: ['Apples', 'Oranges', 'Bananas'],
                title: { text: 'Pie Chart: Fruit Distribution', align: 'left' }
            }
        },
        area: {
            series: [{ name: 'Temperature', data: [22, 23, 21, 20, 26, 28, 30] }],
            options: {
                chart: { type: 'area' },
                title: { text: 'Area Chart: Temperature Variation', align: 'left' },
                xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
            }
        },
        radar: {
            series: [{ name: 'Performance', data: [80, 90, 70, 80, 85, 95] }],
            options: {
                chart: { type: 'radar' },
                title: { text: 'Radar Chart: Skill Performance', align: 'left' },
                xaxis: { categories: ['Communication', 'Coding', 'Design', 'Testing', 'Management', 'Teamwork'] }
            }
        },
        heatmap: {
            series: [
                { name: 'Metric1', data: [20, 29, 37, 36, 44, 45] },
                { name: 'Metric2', data: [30, 39, 37, 36, 44, 55] },
                { name: 'Metric3', data: [25, 39, 32, 36, 49, 55] }
            ],
            options: {
                chart: { type: 'heatmap' },
                title: { text: 'Heatmap Chart: Data Metrics', align: 'left' },
                xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] }
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
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px' }}>
            <div>
                <Chart 
                    options={chartsData.line.options} 
                    series={chartsData.line.series} 
                    type="line" 
                    height={400} 
                    width={400}
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

export default Dashboard;
