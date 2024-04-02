import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { multiStepContext } from '../StepContext';

const ThirdStep = () => {
    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext);

    return (
        <div>
            <div>
                <h3 style={{ color: "gray" }}>What's your postcode?</h3>
            </div>
            <div>
                <TextField onChange={(e) => setUserData({ ...userData, "postcode": e.target.value })} value={userData["postcode"]} label="Post Code" margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <Button onClick={() => setCurrentStep(4)} variant="contained" color="primary" style={{ backgroundColor: "goldenrod", margin: "20px", padding: "10px 80px" }}>Search</Button>
            </div >
            <div>
                <Button onClick={() => setCurrentStep(2)} variant="contained" color="secondary">Back</Button>
            </div >
        </div>
    );
}

export default ThirdStep;