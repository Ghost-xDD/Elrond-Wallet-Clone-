import './verifyTab.scss';

const VerifyTab = () => {
  return (
    <div className="verifyTab">
      <div className="verifyTabContent">
        <label htmlFor="message">Signature</label>
        <input type="text" />
      </div>
      <div className="btn">
        <button>Verify</button>
        {/* <button>Close</button> */}
      </div>
    </div>
  );
};

export default VerifyTab;
