import './sign.scss';
import { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import SignTab from '../../components/signTab/SignTab';
import VerifyTab from '../../components/signTab/VerifyTab';

const Sign = () => {
  const [activeTab, setActiveTab] = useState('sign');

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab('sign');
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab('verify');
  };

  return (
    <div className="sign">
      <Sidebar />
      <div className="signContainer bg">
        <Navbar />
        <div className="signBody">
          <div className="title">
            <span>Elrond</span>
            <div className="titleContainer ">
              <div className="titleHeading">
                <h4>Message Signing</h4>
              </div>
            </div>
          </div>
          <div className="signContent">
            <div className="slice" />
            <div className="signContentHeader">
              <ul className="nav">
                <div className="navContent">
                  <li
                    className={activeTab === 'sign' ? 'active' : ''}
                    onClick={handleTab1}
                  >
                    Sign
                  </li>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <li
                    className={activeTab === 'verify' ? 'active' : ''}
                    onClick={handleTab2}
                  >
                    Verify
                  </li>
                </div>
              </ul>
              <div className="outlet">
                {activeTab === 'sign' ? <SignTab /> : <VerifyTab />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
