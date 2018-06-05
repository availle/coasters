import React from 'react';
import CoasterPage from './components/CoasterPage'
import CoasterStore from './stores/CoasterStore'

const App = () => (
  <CoasterPage coasterStore={ new CoasterStore() }/>
);

export default App;
