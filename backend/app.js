const WebSocket = require("ws");

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Function to generate random data for different charts
const generateRandomData = () => {
  return {
    lineData: {
      x: new Date().getTime(), // Timestamp
      y: Math.floor(Math.random() * 100), // Random value
    },
    barData: {
      categories: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"], // Example categories
      values: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)), // Random values
    },
    pieData: {
      labels: ["Category A", "Category B", "Category C", "Category D"],
      values: Array.from({ length: 4 }, () => Math.floor(Math.random() * 100)), // Random values
    },
    areaData: {
      x: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`), // Example categories
      y: Array.from({ length: 7 }, () => Math.floor(Math.random() * 100)), // Random values
    },
    radarData: {
      categories: ["Skill A", "Skill B", "Skill C", "Skill D", "Skill E"],
      values: Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)), // Random values
    },
    heatmapData: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      values: [
        {
          name: "Metric1",
          data: Array.from({ length: 6 }, () =>
            Math.floor(Math.random() * 100)
          ),
        },
        {
          name: "Metric2",
          data: Array.from({ length: 6 }, () =>
            Math.floor(Math.random() * 100)
          ),
        },
        {
          name: "Metric3",
          data: Array.from({ length: 6 }, () =>
            Math.floor(Math.random() * 100)
          ),
        },
      ],
    },
    candlestickData: {
      data: Array.from({ length: 10 }, (_, i) => {
        const open = Math.floor(Math.random() * 100);
        const close = open + Math.floor(Math.random() * 10) - 5;
        const high = Math.max(open, close) + Math.floor(Math.random() * 5);
        const low = Math.min(open, close) - Math.floor(Math.random() * 5);
        return {
          x: new Date().getTime() + i * 3600000, // Incrementing timestamp by an hour
          y: [open, high, low, close], // Candlestick OHLC data
        };
      }),
    },
    radialBarData: {
      value: Math.floor(Math.random() * 100), // Single value for radial bar
    },
    donutData: {
      values: Array.from({ length: 4 }, () => Math.floor(Math.random() * 100)), // Random values for donut
      labels: ["Category A", "Category B", "Category C", "Category D"], // Example categories for donut
    },
  };
};

// When a client connects
wss.on("connection", (ws) => {
  console.log("Client connected");

  // Send structured data every second
  const intervalId = setInterval(() => {
    const data = generateRandomData();
    ws.send(JSON.stringify(data));
  }, 1000); // Sends data every second

  // When a client disconnects
  ws.on("close", () => {
    console.log("Client disconnected");
    clearInterval(intervalId); // Stop sending data when client disconnects
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
