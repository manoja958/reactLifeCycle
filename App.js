import React, { useState } from 'react';
import LifecycleDemo from './reactlifecycle';
function App() {
  const [showComponent, setShowComponent] = useState(true);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>React App</h1>
      <button 
        onClick={toggleComponent} 
        style={{ padding: '10px 20px', fontSize: '16px', marginBottom: '20px', cursor: 'pointer' }}
      >
        {showComponent ? 'Hide' : 'Show'} Lifecycle Component
      </button>
      <hr />
      {showComponent && <LifecycleDemo />}
    </div>
  );
}

export default App;
