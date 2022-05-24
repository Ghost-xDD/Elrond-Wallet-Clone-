import './signTab.scss';

const SignTab = () => {
  return (
    <div className="signTab">
      <div className="signTabContent">
        <label htmlFor="message">Message</label>
        <input type="text" />
      </div>
      <div className="btn">
        <button>Sign</button>
        {/* <button>Close</button> */}
      </div>
    </div>
  );
};

export default SignTab;
