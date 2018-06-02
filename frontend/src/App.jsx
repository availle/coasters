import React from 'react';
import CoasterPage from './CoasterPage'
import CoasterStore from './CoasterStore'

const App = () => (
  <CoasterPage coasterStore={ new CoasterStore() }/>
);

export default App;

/**
 <ul className="left">
 <li>
 <Link to="/">Home</Link>
 </li>
 <li>
 <Link to="/about">About</Link>
 </li>
 </ul>
 <Routes

 **/