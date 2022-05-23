import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    // e.preventDefault();
    window.scrollTo(300, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
