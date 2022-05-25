import './istokens.scss';
import TokenModal from '../../components/tokenModal/TokenModal';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const IsTokens = () => {
  return (
    <div className="isTokens">
      <Sidebar />;
      <div className="isTokensContainer bg">
        <Navbar />
        <div className="isTokensBody">
          <div className="title">
            <span>Elrond</span>
            <div className="titleContainer">
              <div className="titleHeading">
                <h4>Issue</h4>
              </div>
            </div>
          </div>
          <div className="isTokensContent">
            <div className="isTokensContentHeader">
              <TokenModal />;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsTokens;
