import './transaction.scss';
import { FiRefreshCw } from 'react-icons/fi';
import { RiMenu4Fill } from 'react-icons/ri';

const Transaction = () => {
  return (
    <div className="transactionContainer">
      <div className="title">
        <h4>Latest Transactions</h4>
        &nbsp;&nbsp;&nbsp;
        <FiRefreshCw className="icon" />
      </div>
      <div className="transactionContent">
        <RiMenu4Fill className="icon" />
        <h4>No Transactions</h4>
        <p>No transactions found for this wallet</p>
      </div>
    </div>
  );
};

export default Transaction;
