import { useState } from 'react';
import './App.css';
import Hooks from './components/hooks/Hooks';
import { cubeContext } from './context/context';

function App() {
  const [cube,setCube] = useState(0)
  const incCube = () =>{
    let num = cube+1
    setCube(num**3)
  }
  return (
    <div className="App">
      <cubeContext.Provider value={{cube,incCube}}>
        <Hooks />
      </cubeContext.Provider>
    </div>
  );
}

export default App;
