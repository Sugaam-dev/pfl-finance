import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./TradesStocks.css";

const data = [
  { month: "JAN", one: 10, two: 25 },
  { month: "FEB", one: 15, two: 18 },
  { month: "MAR", one: 20, two: 16 },
  { month: "APR", one: 25, two: 17 },
  { month: "MAY", one: 27, two: 20 },
  { month: "JUN", one: 25, two: 25 },
  { month: "JUL", one: 23, two: 30 },
  { month: "AUG", one: 25, two: 35 },
  { month: "SEP", one: 20, two: 32 },
  { month: "OCT", one: 18, two: 28 },
  { month: "NOV", one: 22, two: 33 },
  { month: "DEC", one: 26, two: 37 },
];

const TradesStocks = () => {
  return (
    <section className="trades-stocks-section">
      <div className="container">
        <div className="text-section">
          <h2 className="title">
            how and why investing or trading 
            {/* <span>– an alternative to bank loans</span> */}
          </h2>
          <p className="description">
            Trades & Stocks provide a modern pathway to financial growth without depending on traditional bank loans.
            Instead of borrowing and paying interest, individuals and businesses can invest strategically in the stock
            market to build capital.
            Profits earned through informed trading and long-term investments can fund new ventures, manage operational costs,
            and create sustainable cash flow.
            This approach not only reduces financial liability but also offers greater control, flexibility, and scalability over
            one’s economic future.:
          </p>

          <ul className="resources-list">
            <li>
              <span className="highlight">Don James/Semplice</span> – Article
              and News research
            </li>
            <li>
              <span className="highlight">HighVoltageBusiness</span> – Company
              and Industry Research
            </li>
            <li>
              <span className="highlight">Goovers</span> – Company and Industry
              Research
            </li>
            <li>
              <span className="highlight">IRISpace</span> – Industry Research
            </li>
            <li>
              <span className="highlight">Lexos-Nexos</span> – Company,
              Industry, Market Research
            </li>
            <li>
              <span className="highlight">Plombett</span> – Industry Research
            </li>
            <li>
              <span className="highlight">Pronounce</span> – market analysis
              report “slices”
            </li>
          </ul>
        </div>

        <div className="chart-section">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="one" fill="#FF6B6B" name="One" />
              <Bar dataKey="two" fill="#5A7DFF" name="Two" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default TradesStocks;
