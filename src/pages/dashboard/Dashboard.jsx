import './dashboard.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import TokenStat from '../../components/tokenStat/TokenStat';
import Transaction from '../../components/transaction/Transaction';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <motion.div
      className="dashboard"
      transition={{ ease: 'easeOut', duration: 0.2 }}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
    >
      <Sidebar />
      <div className="dashboardContainer bg">
        <Navbar />
        <div className="break">Not available on Mobile</div>
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
    </motion.div>
  );
};

export default Dashboard;
