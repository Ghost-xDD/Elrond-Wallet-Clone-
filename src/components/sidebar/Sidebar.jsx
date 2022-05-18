import './sidebar.scss';
import ApprovalOutlinedIcon from '@mui/icons-material/ApprovalOutlined';
import { RiUploadLine } from 'react-icons/ri';
import { RiDownloadLine } from 'react-icons/ri';
import { RiMenu4Fill } from 'react-icons/ri';
import { RiDatabase2Line } from 'react-icons/ri';
import { CgShapeRhombus } from 'react-icons/cg';
import { FaChartPie } from 'react-icons/fa';
import { FiLock } from 'react-icons/fi';
import { MdOutlineColorLens } from 'react-icons/md';
import { ImStack } from 'react-icons/im';
import { BsArrowLeftRight } from 'react-icons/bs';
import elrond from '../../assets/elrond.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">
          <img src={elrond} alt="" className="logoImage" />
        </span>
        <span className="grey">&nbsp; | Wallet</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Menu</p>
          <li className="active">
            <FaChartPie className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <RiMenu4Fill className="icon" />
            <span>Transactions</span>
          </li>
          <li>
            <RiUploadLine className="icon" />
            <span>Send</span>
          </li>
          <li>
            <RiDownloadLine className="icon" />
            <span>Receive</span>
          </li>
          <li>
            <ApprovalOutlinedIcon className="icon" />
            <span>Sign Message</span>
          </li>
          <li>
            <CgShapeRhombus className="icon" />
            <span>Tokens</span>
          </li>
          <li>
            <MdOutlineColorLens className="icon" />
            <span>NFTs</span>
          </li>
          <li>
            <BsArrowLeftRight className="icon" />
            <span>Buy</span>
          </li>
          <p className="title">Staking</p>
          <li>
            <FiLock className="icon" />
            <span>Stake</span>
          </li>
          <li>
            <FiLock className="icon" />
            <span>Delegate(Legacy)</span>
          </li>
          <li>
            <RiDatabase2Line className="icon" />
            <span>Validate</span>
          </li>
          <p className="title">Issue</p>
          <li>
            <ImStack className="icon" />
            <span>Tokens</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
