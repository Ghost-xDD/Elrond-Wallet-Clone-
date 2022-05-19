import './tokens.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { FiRefreshCw } from 'react-icons/fi';
import { RiMenu4Fill } from 'react-icons/ri';
import { IoIosFunnel } from 'react-icons/io';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { FiDatabase } from 'react-icons/fi';

const Tokens = () => {
  return (
    <div className="tokens">
      <Sidebar />
      <div className="tokensContainer bg">
        <Navbar />
        <div className="tokensBody">
          <div className="title">
            <span>Elrond</span>
            <div className="titleContainer">
              <div className="titleHeading">
                <h4>Tokens</h4>
                &nbsp;&nbsp;&nbsp;
                <FiRefreshCw className="icon" />
              </div>
              <div className="titleIcons">
                <IoIosFunnel className="icon" />
                <AiOutlineArrowDown className="icon" />
              </div>
            </div>
          </div>
          <div className="tokensContent">
            <div className="tokensContentHeader">
              <h4>Tokens</h4>
              <h4 style={{ color: 'blue' }}>SC Results</h4>
            </div>
            <div className="tokensMain">
              <FiDatabase className="icon" />
              <h4>No Tokens</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokens;
