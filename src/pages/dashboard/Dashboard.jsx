import './dashboard.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import TokenStat from '../../components/tokenStat/TokenStat';
import Transaction from '../../components/transaction/Transaction';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer bg">
        <Navbar />
        <div className="dashboardBody">
          <Featured />
          <div className="dashboardRow">
            <div className="dashboardItem ">
              <Chart aspect={3 / 1} />
              {/* &nbsp; */}
              <TokenStat />
            </div>
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
