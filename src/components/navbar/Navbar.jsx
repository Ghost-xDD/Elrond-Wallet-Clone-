import './navbar.scss';
import { MdOutlineContentCopy } from 'react-icons/md';
import { MdOutlineQrCode } from 'react-icons/md';
import { RiMoonLine } from 'react-icons/ri';
import { GiBrickWall } from 'react-icons/gi';
import { BsBoxArrowRight } from 'react-icons/bs';
 
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="address">
          <span>
            <span className="grey">Address: &nbsp;</span>
            erd1why379l6r9c5z5d8rjcg42tzn6gt4ff662p8hzk3f3jp59x
          </span>
          &nbsp; &nbsp;
          <div className="addressIcon">
            <div className="item">
              <MdOutlineContentCopy className="icon" />
            </div>
            <div className="item">
              <MdOutlineQrCode className="icon" />
            </div>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <RiMoonLine className="icon" />
          </div>
          <div className="item">
            <GiBrickWall className="icon" />
          </div>
          <div className="item">
            <BsBoxArrowRight className="icon" />
            &nbsp;
            <span>Close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
