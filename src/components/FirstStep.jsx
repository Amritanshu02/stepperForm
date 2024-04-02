import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { multiStepContext } from '../StepContext';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import PropaneOutlinedIcon from '@mui/icons-material/PropaneOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';

const FirstStep = () => {
    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext);

    return (
        <div >
            <div>
                <h3 style={{ color: "gray" }}>Which fuel powers your boiler?</h3>
            </div>
            <div style={{ display: "flex" }}>
                <Button onClick={() => {
                    setCurrentStep(2)
                    setUserData({ ...userData, "fuelpower": "Mains Gas" })
                }} value={userData["fuelpower"]} variant="outlined" color="primary" style={{ display: "flex", flexDirection: "column", padding: "30px 50px", margin: "20px", color: "gray", borderColor: "gray" }}>
                    <LocalFireDepartmentOutlinedIcon style={{ fontSize: "90px" }} />
                    <p>Mains Gas</p>
                </Button>
                <Button onClick={() => {
                    setCurrentStep(2)
                    setUserData({ ...userData, "fuelpower": "LPG" })
                }} value={userData["fuelpower"]} variant="outlined" color="primary" style={{ display: "flex", flexDirection: "column", padding: "30px 50px", margin: "20px", color: "gray", borderColor: "gray" }}>
                    <PropaneOutlinedIcon style={{ fontSize: "90px" }} />
                    <p>LPG</p>
                </Button>
                <Button onClick={() => {
                    setCurrentStep(2)
                    setUserData({ ...userData, "fuelpower": "Other" })
                }} value={userData["fuelpower"]} variant="outlined" color="primary" style={{ display: "flex", flexDirection: "column", padding: "30px 50px", margin: "20px", color: "gray", borderColor: "gray" }}>
                    <QuestionMarkOutlinedIcon style={{ fontSize: "90px" }} />
                    <p>Other</p>
                </Button>
            </div>
            {/* <div>
                <Button onClick={() => setCurrentStep(2)} variant="contained" color="primary">Next</Button>
            </div> */}
        </div>
    );
};

export default FirstStep;