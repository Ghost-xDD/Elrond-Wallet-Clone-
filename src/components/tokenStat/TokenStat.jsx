import './tokenStat.scss';
import { FiDatabase } from 'react-icons/fi';

const TokenStat = () => {
  return (
    <div className="tokenContainer">
      <div className="tokenStat">
        <div className="title">
          <h1>Tokens</h1>
          &nbsp;&nbsp;&nbsp;
          <h1 style={{ color: '#1b46c2' }}>Meta ESDT</h1>
        </div>
        <div className="content">
          <FiDatabase className="icon" />
          <h4>No Tokens</h4>
        </div>
      </div>
    </div>
  );
};

export default TokenStat;
