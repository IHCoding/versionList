import React, { useCallback, useState } from 'react';
import VersionsContainer from './components/versions-container';

function App() {
  const [versionsItem, setVersionsItem] = useState();

  // const handleAddVersionsItem = useCallback( () => {return setVersionsItem();}, [setVersionsItem])
  return (
    <div>
      Welcom to Test App
      <VersionsContainer />
    </div>
  );
}

export default App;
