// App.js
import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, Tooltip, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { FaFan, FaLightbulb, FaRegSnowflake, FaThermometerHalf } from 'react-icons/fa'; // Appliance icons
import { MdDashboard, MdMonitor, MdCalendarToday, MdPages, MdTableChart, MdShowChart, MdMap } from 'react-icons/md'; // Sidebar icons
import './App.css';

// Dummy data
const powerData = [
  { name: 'Heater', value: 2095 },
  { name: 'Lights', value: 2360 },
];

const averagePowerData = [
  { month: 'Jan', power: 1200 },
  { month: 'Feb', power: 1100 },
  { month: 'Mar', power: 1300 },
  { month: 'Apr', power: 1400 },
  { month: 'May', power: 1600 },
];

const currentPowerData = [
  { name: 'Hour 1', value: 400 },
  { name: 'Hour 2', value: 300 },
  { name: 'Hour 3', value: 200 },
  { name: 'Hour 4', value: 278 },
  { name: 'Hour 5', value: 189 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Power Analytics</h2>
        <ul>
          <li><MdDashboard /> Dashboard</li>
          <li><MdMonitor /> Monitor</li>
          <li><MdCalendarToday /> Calendar</li>
          <li><MdPages /> Pages</li>
          <li><MdTableChart /> Tables</li>
          <li><MdShowChart /> Charts</li>
          <li><MdMap /> Maps</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Dashboard</h1>
        
        {/* Appliance Cards */}
        <div className="cards">
          <div className="card">
            <FaFan size={30} />
            <h3>Fans</h3>
            <p>Count: 27</p>
            <p>Power Consumption: 270</p>
          </div>
          <div className="card">
            <FaLightbulb size={30} />
            <h3>Lights</h3>
            <p>Count: 65</p>
            <p>Power Consumption: 876</p>
          </div>
          <div className="card">
            <FaRegSnowflake size={30} />
            <h3>Refrigerator</h3>
            <p>Count: 4</p>
            <p>Power Consumption: 0</p>
          </div>
          <div className="card">
            <FaThermometerHalf size={30} />
            <h3>Air Conditioner</h3>
            <p>Count: 852</p>
            <p>Power Consumption: 65</p>
          </div>
        </div>

        {/* Charts Row */}
        <div className="charts">
          <div className="chart">
            <h3>Average Power Consumption (kWh)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={averagePowerData}>
                <Line type="monotone" dataKey="power" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart">
            <h3>Power Consumption</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={powerData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {powerData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#0088FE' : '#FFBB28'} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="chart">
            <h3>Current Power Consumption (kWh)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={currentPowerData}>
                <Bar dataKey="value" fill="#82ca9d" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
