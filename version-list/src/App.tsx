import React from 'react';
import VersionsContainer from './components/versions-container';

import './index.css';

const customStyle = {
  margin: '2%',
  color: 'white',
};

const AppTitle = 'Versions Overview';

function App() {
  return (
    <div>
      <h2 style={customStyle}> {AppTitle.toUpperCase()}</h2>
      <VersionsContainer />
    </div>
  );
}

export default App;
