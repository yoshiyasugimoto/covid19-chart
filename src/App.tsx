import React from 'react';
import './App.css';
import BarPlot from './components/BarPlot';
import LinePlot from './components/LinePlot';
import PiePlot from './components/PiePlot';
import RadarPlot from "./components/RadarPlot"
import BubblePlot from './components/BubblePlot';
import MaterialUI from './components/MaterialUI';

function App() {
  return (
    <div className="App">
      {/* <LinePlot />
      <PiePlot />
      <BarPlot />
      <RadarPlot />
      <BubblePlot /> */}

      <MaterialUI />
    </div>
  );
}

export default App;
