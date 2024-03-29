import React, { useState } from 'react';
import GaugeChartComponent from './path-to-your-component/GaugeChartComponent';

const App = () => {
  const [needleValue, setNeedleValue] = useState(50);

  return (
    <div>
      <GaugeChartComponent needleValue={needleValue} />
      <button onClick={() => setNeedleValue(Math.random() * 100)}>
        Update Value
      </button>
    </div>
  );
};

export default App;
