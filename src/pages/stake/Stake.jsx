import './stake.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Stake = () => {
  return (
    <div className="stake">
      <Sidebar />
      <div className="stakeContainer bg">
        <Navbar />
        <div className="stakeBody">
          <div className="container">
            <div className="title">
              <span>Elrond</span>
              <div className="titleContainer">
                <div className="titleHeading">
                  <h4>Staking Dashboard</h4>
                </div>
                <div className="titleButton btn">Stake Now</div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stake;
