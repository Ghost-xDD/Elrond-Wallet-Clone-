import './chart.scss';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import { RiLineChartLine } from 'react-icons/ri';
import { BsFillCaretDownFill } from 'react-icons/bs';

const data = [
  {
    name: 'May 12',
    USD: 10.83,
    amt: 10,
  },
  {
    name: 'May 13',
    USD: 30.81,
    amt: 100,
  },
  {
    name: 'May 14',
    USD: 43.62,
    amt: 200,
  },
  {
    name: 'May 15',
    USD: 69.79,
    amt: 300,
  },
  {
    name: 'May 16',
    USD: 81.25,
    amt: 400,
  },
  {
    name: 'May 17',
    USD: 79.2,
    amt: 500,
  },
  {
    name: 'May 18',
    USD: 90.12,
    amt: 600,
  },
  {
    name: 'May 19',
    USD: 89,
    amt: 700,
  },
];

const Chart = (aspect) => {
  return (
    <div className='charts'>
      <div className="chartContainer">
        <div className="chart">
          <div className="title">Elrond eGold</div>
          <div className="currentPrices">
            <div className="currentPrice">
              <RiLineChartLine className="icon" />
              &nbsp;
              <span style={{ color: 'grey' }}>1 EGLD = $98.21</span>
              &nbsp;
              <BsFillCaretDownFill className="icon" style={{ color: 'red' }} />
              <span style={{ color: 'red', fontSize: '16px' }}>1.99%</span>
            </div>
            <div className="chartBtn">
              <div className="active">Week</div>
              <div>Month</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" aspect={aspect}>
            <LineChart width={500} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
              <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              {/* <Legend /> */}
              <Line
                type="monotone"
                dataKey="USD"
                stroke="blue"
                activeDot={{ r: 8 }}
              />
              {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Chart;
