import './validate.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from 'react-visibility-sensor';
import { motion } from 'framer-motion';

const Validate = () => {
  return (
    <motion.div
      className="validate"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ ease: 'easeOut', duration: 0.1 }}
      // exit={{ opacity: 0 }}
    >
      <Sidebar />
      <div className="validateContainer bg">
        <Navbar />
        <div className="validateBody">
          <div className="title">
            <span>Elrond</span>
            <div className="titleContainer">
              <div className="titleHeading">
                <h4>Validation Dashboard</h4>
              </div>
              <div className="titleButton btn">Validate Now</div>
            </div>
          </div>

          <div className="container">
            <div className="contentContainer">
              <div className="overviewContainer">
                <div className="overviewTitle">
                  <h5>Network Overview</h5>
                </div>
                <div className="cards">
                  <div className="card stake1_bg">
                    <h5>Active Validators</h5>
                    <h6>3199 / 3200</h6>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div className="card stake2_bg">
                    <h5>Total Staked</h5>
                    <h6>12,479,909 EGLD</h6>
                    <span>$1,119,198,239.12</span>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div className="card stake4_bg">
                    <h5>Validator Queue Size</h5>
                    <h6>48</h6>
                  </div>
                </div>
              </div>
              <div className="overviewContainer">
                <div className="overviewTitle">
                  <h5>My Validators</h5>
                </div>
                <div className="cards">
                  <div className="card stake1_bg">
                    <h5>My Active Validators</h5>
                    <h6>0 Nodes</h6>
                    <span>Up to 16.08% APY</span>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div className="card stake2_bg">
                    <h5>My Stake</h5>
                    <h6>0 EGLD</h6>
                    <span>$0.00</span>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div className="card stake4_bg">
                    <h5>My Queued Validators</h5>
                    <h6>0 Nodes</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="validation">
              <div className="validationTitle">
                <h5>Validation</h5>
              </div>
              <div className="validationContent">
                <div className="validationTimer">
                  <h4>12h 22m 34s</h4>
                  <span>until next rewards batch is distributed</span>
                </div>
                <div className="validationProgress">
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 60 : 0;
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
                    Stake your EGLD to secure the network and capture your share
                    of the rewards.
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

export default Validate;
