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
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
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
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? '#1b46c2' : 'grey',
                textDecoration: 'none',
              })}
            >
              <li>
                <FaChartPie className="icon" />
                <span>Dashboard</span>
              </li>
            </NavLink>
            <NavLink
              to="/transactions"
              style={({ isActive }) => ({
                color: isActive ? '#1b46c2' : 'grey',
                textDecoration: 'none',
              })}
            >
              <li>
                <RiMenu4Fill className="icon" />
                <span>Transactions</span>
              </li>
            </NavLink>
            <NavLink
              to="/send"
              style={({ isActive }) => ({
                color: isActive ? '#1b46c2' : 'grey',
                textDecoration: 'none',
              })}
            >
              <li>
                <RiUploadLine className="icon" />
                <span>Send</span>
              </li>
            </NavLink>
            <NavLink
              to="/receive"
              style={({ isActive }) => ({
                color: isActive ? '#1b46c2' : 'grey',
                textDecoration: 'none',
              })}
            >
              <li>
                <RiDownloadLine className="icon" />
                <span>Receive</span>
              </li>
            </NavLink>
            <NavLink
              to="/sign"
              style={({ isActive }) => ({
                color: isActive ? '#1b46c2' : 'grey',
                textDecoration: 'none',
              })}
            >
              <li>
                <ApprovalOutlinedIcon className="icon" />
                <span>Sign Message</span>
              </li>
            </NavLink>
            <NavLink
              to="/tokens"
              style={({ isActive }) => ({
                color: isActive ? '#1b46c2' : 'grey',
                textDecoration: 'none',
              })}
            >
              <li>
                <CgShapeRhombus className="icon" />
                <span>Tokens</span>
              </li>
            </NavLink>
            <NavLink
              to="/nft"
              style={({ isActive }) => ({
                color: isActive ? '#1b46c2' : 'grey',
                textDecoration: 'none',
              })}
            >
              <li>
                <MdOutlineColorLens className="icon" />
                <span>NFTs</span>
              </li>
            </NavLink>
            <NavLink
              to="/buy"
              style={({ isActive }) => ({
                color: isActive ? '#1b46c2' : 'grey',
                textDecoration: 'none',
              })}
            >
              <li>
                <BsArrowLeftRight className="icon" />
                <span>Buy</span>
              </li>
            </NavLink>
            <p className="title">Staking</p>
            <NavLink
              to="/stake"
              style={({ isActive }) => ({
                color: isActive ? '#1b46c2' : 'grey',
                textDecoration: 'none',
              })}
            >
              <li>
                <FiLock className="icon" />
                <span>Stake</span>
              </li>
            </NavLink>
            <NavLink
              to="/delegate"
              style={({ isActive }) => ({
                color: isActive ? '#1b46c2' : 'grey',
                textDecoration: 'none',
              })}
            >
              <li>
                <FiLock className="icon" />
                <span>Delegate(Legacy)</span>
              </li>
            </NavLink>
            <NavLink
              to="/validate"
              style={({ isActive }) => ({
                color: isActive ? '#1b46c2' : 'grey',
                textDecoration: 'none',
              })}
            >
              <li>
                <RiDatabase2Line className="icon" />
                <span>Validate</span>
              </li>
            </NavLink>
            <p className="title">Issue</p>
            <NavLink
              to="/validate"
              style={({ isActive }) => ({
                color: isActive ? '#1b46c2' : 'grey',
                textDecoration: 'none',
              })}
            >
              <li>
                <ImStack className="icon" />
                <span>Tokens</span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
