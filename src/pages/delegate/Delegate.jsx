import './delegate.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from 'react-visibility-sensor';
import { motion } from 'framer-motion';

const Delegate = () => {
  return (
    <motion.div
      className="delegate"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 1 }}
      // exit={{ opacity: 0 }}
    >
      <Sidebar />
      <div className="delegateContainer bg">
        <Navbar />
        <div className="delegateBody">
          <div className="title">
            <span>Elrond</span>
            <div className="titleContainer">
              <div className="titleHeading">
                <h4>Delegation Dashboard(Legacy)</h4>
              </div>
              <div className="titleButton btn">Delegate Now</div>
            </div>
          </div>

          <div className="container">
            <div className="contentContainer">
              <div className="overviewContainer">
                <div className="overviewTitle">
                  <h5>Network Overview</h5>
                </div>
                <div className="cards">
                  <div className="card stake1_bg card1">
                    <h5>Total Delegated</h5>
                    <h6>3,049,999 EGLD</h6>
                    <span>$277,956,144.21</span>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div className="card stake2_bg">
                    <h5>Active Delegation</h5>
                    <h6>3,049,999 EGLD</h6>
                    <span>$277,956,144.21</span>
                  </div>
                  &nbsp;&nbsp;&nbsp;-
                  <div className="card stake4_bg">
                    <h5>Waiting List Delegation</h5>
                    <h6>4,026,514 EGLD</h6>
                    <span>$0.00</span>
                  </div>
                </div>
              </div>
              <div className="overviewContainer">
                <div className="overviewTitle">
                  <h5>My Legacy Delegations</h5>
                </div>
                <div className="cards">
                  <div className="card stake1_bg">
                    <h5>My Total Delegation</h5>
                    <h6>0 EGLD</h6>
                    <span>0% APY</span>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div className="card stake2_bg">
                    <h5>My Active Delegation</h5>
                    <h6>0 EGLD</h6>
                    <span>Up to 14.42% APY</span>
                  </div>
                  &nbsp;&nbsp;&nbsp;-
                  <div className="card stake4_bg">
                    <h5>My Waiting List Delegation</h5>
                    <h6>0 EGLD</h6>
                    <span>0% APY</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="delegation">
              <div className="delegationTitle">
                <h5>Delegation</h5>
              </div>
              <div className="delegationContent">
                <div className="delegationTimer">
                  <h4>12h 28m 21s</h4>
                  <span>until next rewards batch is distributed</span>
                </div>
                <div className="delegationProgress">
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 40 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          strokeWidth={6}
                          styles={buildStyles({
                            pathColor: `#1b46c2`,
                            textColor: '#1b46c2',
                            trailColor: '#999',
                            backgroundColor: '#000',
                            cursor: 'pointer',
                          })}
                        />
                      );
                    }}
                  </VisibilitySensor>
                </div>
                <div className="style">
                  <span>
                    Delegate your EGLD to secure the network and capture your
                    share of the rewards.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Delegate;
