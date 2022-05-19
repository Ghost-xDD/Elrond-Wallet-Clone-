import './nft.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { FiRefreshCw } from 'react-icons/fi';
import { RiMenu4Fill } from 'react-icons/ri';
import { IoIosFunnel } from 'react-icons/io';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { FiDatabase } from 'react-icons/fi';

const Nft = () => {
  return (
    <div className="nft">
      <Sidebar />
      <div className="nftContainer bg">
        <Navbar />
        <div className="nftBody">
          <div className="title">
            <span>Elrond</span>
            <div className="titleContainer">
              <div className="titleHeading">
                <h4>NFTs</h4>
              </div>
              <div className="titleIcons">
                <IoIosFunnel className="icon" />
                <AiOutlineArrowDown className="icon" />
              </div>
            </div>
          </div>
          <div className="nftContent">
            <div className="nftContentHeader">
              <h4>Find NFT</h4>
            </div>
            <div className="nftMain">
              <FiDatabase className="icon" />
              <h4>No NFTs</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nft;
