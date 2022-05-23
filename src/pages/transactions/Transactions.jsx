import './transactions.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Transaction from '../../components/transaction/Transaction';
import { FiRefreshCw } from 'react-icons/fi';
import { RiMenu4Fill } from 'react-icons/ri';
import { IoIosFunnel } from 'react-icons/io';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Transactions = () => {
  return (
    <div className="transactions">
      <Sidebar />
      <div className="transactionsContainer bg">
        <Navbar />
        <div className="transactionsBody ">
          <div className="title"> 
            <span>Elrond</span>
            <div className="titleContainer">
              <div className="titleHeading">
                <h4>Transactions</h4>
                &nbsp;&nbsp;&nbsp;
                <FiRefreshCw className="icon" />
              </div>
              <div className="titleIcons">
                <IoIosFunnel className="icon" />
                <AiOutlineArrowDown className="icon" />
              </div>
            </div>
          </div>
          <div className="transactionsContent">
            <div className="transactionsContentHeader">
              <h4>Transactions</h4>
              <h4 style={{ color: 'blue' }}>SC Results</h4>
            </div>
            <div className="transactionsMain">
              <RiMenu4Fill className="icon" />
              <h4>No Transactions</h4>
              <p>No transactions found for this wallet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
