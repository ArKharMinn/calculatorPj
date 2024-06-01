import { useState } from 'react';
import './App.css';
import Button from './Button';
import Output from './Output';
import Result from './Result';

function App() {
  let [output, outputValue] = useState(0);
  let [result, resultValue] = useState(0);
  function buttonEvent(value) {
    if (value === 'AC') {
      outputValue(0)
      resultValue(0)
    } else if (value === 'Del' ) {
      if (output !== 0) {
        output.length === 1 ? outputValue(0) : outputValue(output.slice(0,output.length-1))
      }
    } else if (value === '=') {
      resultValue(eval(output))
      outputValue(0)
    } else {
      output === 0 ? outputValue(value) : outputValue(output+value)
    }
  }
  return (
    <div className="App bg-image min-100vh d-flex justify-content-center align-items-center">
      <div className='calBg rounded shadow-sm border'>
        <div className=''>
          <div className='bgOutput text-end pe-2'>
            <Output output={ output } />
            <Result result={ result} />
          </div>
          <Button buttonEvent={ buttonEvent} />
        </div>
      </div>
    </div>
  );
}

export default App;
