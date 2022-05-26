import './sendmodal.scss';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import { motion } from 'framer-motion';
import Elrond from '../../assets/Elrond_logo.svg';

const SendModal = () => {
  return (
    <div className="sendModalBackground">
      <div className="sendModalContainer">
        <div className="slice" />
        <div className="sendModalTitle">
          {/* <h1>Send</h1> */}
          <span>Enter Amount and recipient</span>
        </div>
        <form> 
          <div className="controlgroup">
            <div className="sendTo">
              <label htmlFor="send">To:</label>
              <input type="text" />
            </div>
            <div className="amountContainer">
              <div className="amount">
                <label htmlFor="amount">Amount:</label>
                <input type="text" />
              </div>
              <div className="tokenSelect">
                <label htmlFor="amount">Token:</label>

                <select>
                  <option value="egld">
                    <TokenOutlinedIcon className="icon" /> 
                    Elrond eGold <span>EGLD</span>
                  </option>
                </select>
              </div>
            </div>
            <div className="feeContainer">
              <div className="fee">
                <details>
                  <summary>Fee 0.00005 EGLD</summary>
                  <div className="hiddenDiv">
                    <div className="gasPrice">
                      <label htmlFor="gasPrice">Gas Price</label>
                      <input type="text" />
                    </div>
                    <div className="gasLimit">
                      <label htmlFor="gasLimit">Gas Limit</label>
                      <input type="text" />
                    </div>
                  </div>
                </details>
              </div>
            </div>
            <div className="dataContainer">
              <label htmlFor="data">Data</label>
              <textarea
                rows="4"
                cols="50"
                name="comment"
                className="rex"
              ></textarea>
            </div>
            <div className="footer">
              <motion.div whileTap={{ scale: 0.9 }} className="btn">
                Send
              </motion.div>
              {/* &nbsp; */}
              <div className="btn">Close</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendModal;
