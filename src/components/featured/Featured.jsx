import './featured.scss';
import Elrond from '../../assets/Elrond_logo.svg';
import { IoMdCheckmark } from 'react-icons/io';
import { FiLock } from 'react-icons/fi';
import { ImStack } from 'react-icons/im';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';

const Featured = () => {
  return ( 
    <div className="featured">
      <div className="top"> 
        <span>Elrond</span>
        <h1 className="title">Nǐ hǎo!</h1>
      </div>
      <div className="cards">
        <div className="card first">
          <img src={Elrond} alt="" className="elrondSvg" />
          <h4>TOTAL</h4>
          <div className="currency">
            <p>0 EGLD</p>
            <span>$0.00</span>
          </div>
        </div>
        <div className="card second">
          <IoMdCheckmark className="icon" />
          <h4>AVAILABLE</h4>
          <div className="currency">
            <p>0 EGLD</p>
            <span>$0.00</span>
          </div>
        </div>
        <div className="card third">
          <FiLock className="icon" />
          <h4>STAKE DELEGATION</h4>
          <div className="currency">
            <p>0 EGLD</p>
            <span>$0.00</span>
          </div>
        </div>
        <div className="card card1_bg">
          <FiLock className="icon" />
          <h4>MY LEGACY DELEGATIONS</h4>
          <div className="currency">
            <p>0 EGLD</p>
            <span>$0.00</span>
          </div>
        </div>
        <div className="card card2_bg">
          <ImStack className="icon" />
          <h4>STAKED NODES</h4>
          <div className="currency">
            <p>0 EGLD</p>
            <span>$0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
