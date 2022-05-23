import './stake.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from 'react-visibility-sensor';
import { motion } from 'framer-motion';

const Stake = () => {
  return (
    <motion.div
      className="stake"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // transition={{ ease: 'easeOut', duration: 0.9 }}
      exit={{ opacity: 0 }}
    >
      <Sidebar />
      <div className="stakeContainer bg">
        <Navbar />
        <div className="stakeBody">
          <div className="title">
            <span>Elrond</span>
            <div className="titleContainer">
              <div className="titleHeading">
                <h4>Staking Dashboard</h4>
              </div>
              <div className="titleButton btn">Stake Now</div>
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
                    <h5>Total Stake</h5>
                    <h6>12,146,514 EGLD</h6>
                    <span>$1,116,021,744.21</span>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div className="card stake2_bg">
                    <h5>Delegated Stake</h5>
                    <h6>8,120,000 EGLD</h6>
                    <span>$746,065,600.</span>
                  </div>
                  &nbsp;&nbsp;&nbsp;-
                  <div className="card stake3_bg">
                    <h5>Top Up Stake</h5>
                    <h6>4,026,514 EGLD</h6>
                    <span>$369,956,144.21</span>
                  </div>
                </div>
              </div>
              <div className="overviewContainer">
                <div className="overviewTitle">
                  <h5>My Stake</h5>
                </div>
                <div className="cards">
                  <div className="card stake1_bg">
                    <h5>My Total Stake</h5>
                    <h6>0 EGLD</h6>
                    <span>$0.00</span>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div className="card stake2_bg">
                    <h5>My Stake</h5>
                    <h6>0 EGLD</h6>
                    <span>$0.00</span>
                  </div>
                  &nbsp;&nbsp;&nbsp;-
                  <div className="card stake4_bg">
                    <h5>Claim Rewards</h5>
                    <h6>0 EGLD</h6>
                    <span>$0.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="staking">
              <div className="stakingTitle">
                <h5>Staking</h5>
              </div>
              <div className="stakingContent">
                <div className="stakingTimer">
                  <h4>14H 26M 21S</h4>
                  <span>until next rewards batch is distributed</span>
                </div>
                <div className="stakingProgress">
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
                            textColor: 'blue',
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
          <div className="stakeStats">
            <div className="div1 stakeImg">
              <h4>Up to 16.08%</h4>
              <span>Global APR</span>
            </div>

            <div className="div2">
              <div className="div2Content">
                <h4>Staking Rewards</h4>
                <p>
                  By staking your EGLD you earn rewards and help keep the Elrond
                  Network secure
                </p>
              </div>
              <div className="btn">Stake Now</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stake;
