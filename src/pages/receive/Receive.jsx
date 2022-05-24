import './receive.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import ReceiveM from '../../components/receiveM/ReceiveM';

const Receive = () => {
  return (
    <div className="receive">
      <Sidebar />;
      <div className="receiveContainer bg">
        <Navbar />
        <div className="receiveBody">
          <div className="title">
            <span>Elrond</span>
            <div className="titleContainer">
              <div className="titleHeading">
                <h4>Receive</h4>
              </div>
            </div>
          </div>
          <div className="receiveContent">
            <div className="receiveContentHeader">
              <ReceiveM />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receive;
