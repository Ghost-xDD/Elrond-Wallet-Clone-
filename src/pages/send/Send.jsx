import './send.scss';
import SendModal from '../../components/sendM/SendModal';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Send = () => {
  return (
    <div className="send">
      <Sidebar />;
      <div className="sendContainer bg">
        <Navbar /> 
        <div className="sendBody">
          <div className="title">
            <span>Elrond</span>
            <div className="titleContainer">
              <div className="titleHeading">
                <h4>Send</h4>
              </div>
            </div>
          </div>
          <div className="sendContent">
            <div className="sendContentHeader">
              <SendModal />;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Send;
