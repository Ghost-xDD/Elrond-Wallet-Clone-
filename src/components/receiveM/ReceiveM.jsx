import './receivem.scss';
import frameT from '../../assets/frameT.jpg';
import { MdOutlineContentCopy } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';

const ReceiveM = () => {
  return ( 
    <div className="receiveModalBackground">
      <div className="receiveModalContainer">
        <div className="slice" />
        <div className="receiveBody">
          <div className="receiveModalTitle">
            <span>Here is the QR code and your wallet address.</span>
          </div>
          <div className="qrCode">
            <img src={frameT} alt="" /> 
          </div>
          <div className="footer">
            <div className="address">
              <h4>Address:</h4>
              <div className="addressContent">
                <span>erd1why379l6r9c5z5d8rjcg42tzn6gt4ff662p8hzk3f3jp59x</span>
                &nbsp;&nbsp;
                <MdOutlineContentCopy className="icon" />
                &nbsp;&nbsp;
                <BsSearch className="icon" />
              </div>
            </div>
            <div className="btn">
              <button>Done</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiveM;
