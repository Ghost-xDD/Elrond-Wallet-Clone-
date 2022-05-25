import './tokenmodal.scss';
import { motion } from 'framer-motion';

const TokenModal = () => {
  return (
    <div className="tokenModalBackground">
      <div className="tokenModalContainer">
        <div className="slice" />
        <div className="tokenModalTitle">
          <span>Issue Token</span>
        </div>
        <form className="controlgroup">
          <div className="formContent">
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className="formContent">
            <label htmlFor="ticker">Ticker</label>
            <input type="text" />
          </div>
          <div className="formContent">
            <label htmlFor="mintA">Mint Amount</label>
            <input type="text" />
          </div>
          <div className="formContent">
            <label htmlFor="decimals">Decimals</label>
            <input type="text" />
          </div>
        </form>
        <div className="features">
          <div>
            <input type="checkbox" value="freeze" />
            <label>Freezable</label>
          </div>
          <div>
            <input type="checkbox" value="wipe" />
            <label>Wipeable</label>
          </div>
          <div>
            <input type="checkbox" value="pause" />
            <label>Pauseable</label>
          </div>
          <div>
            <input type="checkbox" value="mint" />
            <label>Mintable</label>
          </div>
          <div>
            <input type="checkbox" value="burn" />
            <label>Burnable</label>
          </div>
          <div>
            <input type="checkbox" value="upgrade" />
            <label>Upgradeable</label>
          </div>
          <div>
            <input type="checkbox" value="change" />
            <label>Changeable Owner</label>
          </div>
        </div>
        <div className="submit">
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default TokenModal;
