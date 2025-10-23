// TradesStocks.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Styles/TradesStocks.css';

const TradesStocks = () => {
  const chartData = [
    { month: 'JAN', LoanClosed: 10, LoanApproval: 25 },
    { month: 'FEB', LoanClosed: 15, LoanApproval: 18 },
    { month: 'MAR', LoanClosed: 20, LoanApproval: 16 },
    { month: 'APR', LoanClosed: 25, LoanApproval: 17 },
    { month: 'MAY', LoanClosed: 27, LoanApproval: 20 },
    { month: 'JUN', LoanClosed: 25, LoanApproval: 25 },
    { month: 'JUL', LoanClosed: 23, LoanApproval: 30 },
    { month: 'AUG', LoanClosed: 25, LoanApproval: 35 },
    { month: 'SEPT', LoanClosed: 30, LoanApproval: 35 },
    { month: 'OCT', LoanClosed: 29, LoanApproval: 30 },
    { month: 'NOV', LoanClosed: 31, LoanApproval: 33 },
    { month: 'DEC', LoanClosed: 30, LoanApproval: 34 }
  ];

  const resources = [
    { name: 'Loan Approval' },
    { name: 'Loan Closed' },
    { name: 'Loan Emergency' },
    // { name: 'IRISpace', description: 'Industry Research' },
    // { name: 'Lexos-Nexos', description: 'Company, Industry, Market Research' },
    // { name: 'Plombett', description: 'Industry Research' },
    // { name: 'Pronounce', description: 'market analysis report "slices"' }
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
        <h2 className="trades-stocks-title">Loans</h2>
        <div className="trades-underline"></div>

        <div className="trades-content">
          {/* Left Side - Text Content */}
          <div className="trades-text">
            <p className="trades-description">
                Lenders generally look at a variety of eligibility
                criteria before approving a loan request. in addition
                to your credit score, lenders want to see a suitable
                repayment plan, prove that you have reasonable
                long-term stability, and examine your
                employment history:
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
                  dataKey="LoanClosed" 
                  fill="#e57373" 
                  radius={[0, 0, 0, 0]}
                  maxBarSize={40}
                />
                <Bar 
                  dataKey="LoanApproval" 
                  fill="#09c635ff" 
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
