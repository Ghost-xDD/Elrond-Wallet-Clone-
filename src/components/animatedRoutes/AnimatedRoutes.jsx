import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from '../../pages/dashboard/Dashboard';
import Transactions from '../../pages/transactions/Transactions';
import Send from '../../pages/send/Send';
import Receive from '../../pages/receive/Receive';
import Sign from '../../pages/sign/Sign';
import Tokens from '../../pages/tokens/Tokens';
import Nft from '../../pages/nft/Nft';
import Buy from '../../pages/buy/Buy';
import Stake from '../../pages/stake/Stake';
import Delegate from '../../pages/delegate/Delegate';
import Validate from '../../pages/validate/Validate';
import IsTokens from '../../pages/istokens/IsTokens';
import Timer from '../../pages/timer/Timer';
import FramerModal from '../../pages/framermodal/FramerModal';

import { AnimatePresence } from 'framer-motion';
// import { motion } from 'framer-motion/dist/framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/">
          <Route index element={<Dashboard />}></Route>
          <Route path="transactions" element={<Transactions />}></Route>
          <Route path="send" element={<Send />}></Route>
          <Route path="receive" element={<Receive />}></Route>
          <Route path="sign" element={<Sign />}></Route>
          <Route path="tokens" element={<Tokens />}></Route>
          <Route path="nft" element={<Nft />}></Route>
          <Route path="buy" element={<Buy />}></Route>
          <Route path="stake" element={<Stake />}></Route>
          <Route path="delegate" element={<Delegate />}></Route>
          <Route path="validate" element={<Validate />}></Route>
          <Route path="istokens" element={<IsTokens />}></Route>
          <Route path="timer" element={<Timer />}></Route>
          <Route path="framermodal" element={<FramerModal />}></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
