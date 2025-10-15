// TradesStocks.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './styles/TradesStocks.css';

const TradesStocks = () => {
  const chartData = [
    { month: 'JAN', One: 10, Two: 25 },
    { month: 'FEB', One: 15, Two: 18 },
    { month: 'MAR', One: 20, Two: 16 },
    { month: 'APR', One: 25, Two: 17 },
    { month: 'MAY', One: 27, Two: 20 },
    { month: 'JUN', One: 25, Two: 25 },
    { month: 'JUL', One: 23, Two: 30 },
    { month: 'AUG', One: 25, Two: 35 }
  ];

  const resources = [
    { name: 'Don James/Semplice', description: 'Article and News research' },
    { name: 'HighVoltageBusiness', description: 'Company and Industry Research' },
    { name: 'Goovers', description: 'Company and Industry Research' },
    { name: 'IRISpace', description: 'Industry Research' },
    { name: 'Lexos-Nexos', description: 'Company, Industry, Market Research' },
    { name: 'Plombett', description: 'Industry Research' },
    { name: 'Pronounce', description: 'market analysis report "slices"' }
  ];

  // Custom Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <div className="tooltip-month">{label}</div>
          {payload.map((entry, index) => (
            <div key={index} className="tooltip-value" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="trades-stocks-section">
      <div className="trades-stocks-container">
        <h2 className="trades-stocks-title">Trades & Stocks</h2>
        <div className="trades-underline"></div>

        <div className="trades-content">
          {/* Left Side - Text Content */}
          <div className="trades-text">
            <p className="trades-description">
              The first thing most investors want to see is a compelling one or two page 
              executive summary. The goal of an executive summary is to persuade investors to 
              request a full business plan or pitch deck. However, creating a compelling 
              executive summary can be at least as challenging as developing a complete 
              business plan. We have access to fee-based, subscriber-only resources such as:
            </p>

            <ul className="resources-list">
              {resources.map((resource, index) => (
                <li key={index} className="resource-item">
                  <strong>{resource.name}</strong> – {resource.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Bar Chart */}
          <div className="trades-chart">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
                barGap={3}
                barCategoryGap="20%"
              >
                <CartesianGrid strokeDasharray="0" stroke="#e8e8e8" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  axisLine={{ stroke: '#e0e0e0', strokeWidth: 2 }}
                  tickLine={false}
                  tick={{ fill: '#999', fontSize: 12, fontFamily: 'Arial' }}
                />
                <YAxis 
                  domain={[0, 35]}
                  ticks={[0, 5, 10, 15, 20, 25, 30, 35]}
                  axisLine={{ stroke: '#e0e0e0', strokeWidth: 2 }}
                  tickLine={false}
                  tick={{ fill: '#999', fontSize: 13, fontFamily: 'Arial' }}
                />
                <Tooltip 
                  content={<CustomTooltip />}
                  cursor={{ fill: 'transparent' }}
                />
                <Legend 
                  verticalAlign="bottom"
                  height={50}
                  iconType="square"
                  iconSize={16}
                  wrapperStyle={{
                    paddingTop: '20px',
                    fontFamily: 'Arial',
                    fontSize: '14px',
                    color: '#666'
                  }}
                />
                <Bar 
                  dataKey="One" 
                  fill="#e57373" 
                  radius={[0, 0, 0, 0]}
                  maxBarSize={40}
                />
                <Bar 
                  dataKey="Two" 
                  fill="#5c7cfa" 
                  radius={[0, 0, 0, 0]}
                  maxBarSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradesStocks;
