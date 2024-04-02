import './App.css';
import FirstStep from './components/FirstStep';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import FourthStep from './components/FourthStep';
import { multiStepContext } from './StepContext';
import { useContext } from 'react';
import DisplayData from './components/DisplayData';

function App() {
  const { currentStep, finalData } = useContext(multiStepContext);

  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
      case 4:
        return <FourthStep />
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* {currentStep !== 5 && (
          <Stepper style={{ width: '18%' }} activeStep={currentStep - 1} alternativeLabel>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        )} */}
        {/* {showStep(currentStep)} */}
        {currentStep === 5 ? <DisplayData /> : showStep(currentStep)}
      </header>
    </div>
  );
}

export default App;
