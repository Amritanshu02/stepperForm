import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { multiStepContext } from '../StepContext';

const FourthStep = () => {
    const { setCurrentStep, userData, setUserData, submitData } = useContext(multiStepContext);

    return (
        <div>
            <div>
                <TextField onChange={(e) => setUserData({ ...userData, "firstname": e.target.value })} value={userData["firstname"]} label="First name" margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField onChange={(e) => setUserData({ ...userData, "lastname": e.target.value })} value={userData["lastname"]} label="Last name" margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField onChange={(e) => setUserData({ ...userData, "email": e.target.value })} value={userData["email"]} label="Email" margin="normal" variant="outlined" color="secondary" />
            </div >
            <div>
                <TextField onChange={(e) => setUserData({ ...userData, "phone": e.target.value })} value={userData["phone"]} label="Phone Number" margin="normal" variant="outlined" color="secondary" />
            </div >
            <div>
                <Button onClick={() => setCurrentStep(3)} variant="contained" color="secondary" style={{ margin: "10px 20px" }}>Back</Button>
                <Button onClick={submitData} variant="contained" color="primary">Submit</Button>
            </div >
        </div>
    );
}

export default FourthStep;