import React, {userState, useEffect} from 'react';
import {clearCurrentToken} from '../auth'

const Header = (props) => {
  return(
    <div>
    <div>THIS IS FITNESS TRACKER!!</div>
    <button onClick={clearCurrentToken}>Logout  </button>
    </div>
  );
};

export default Header;