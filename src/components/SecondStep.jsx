import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { multiStepContext } from '../StepContext';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';

const SecondStep = () => {
    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext);

    return (
        <div>
            <div>
                <h3 style={{ color: "gray" }}>How many bathtubs does it have?</h3>
            </div>
            <div style={{ display: "flex" }}>
                <Button onClick={() => {
                    setCurrentStep(3)
                    setUserData({ ...userData, "bathtub": "No Bathtubs" })
                }} value={userData["bathtub"]} variant="outlined" color="primary" style={{ display: "flex", flexDirection: "column", padding: "30px 50px", margin: "20px", color: "gray", borderColor: "gray" }}>
                    <CancelOutlinedIcon style={{ fontSize: "90px" }} />
                    <p>No Bathtubs</p>
                </Button>
                <Button onClick={() => {
                    setCurrentStep(3)
                    setUserData({ ...userData, "bathtub": "One Bathtub" })
                }} value={userData["bathtub"]} variant="outlined" color="primary" style={{ display: "flex", flexDirection: "column", padding: "30px 50px", margin: "20px", color: "gray", borderColor: "gray" }}>
                    <BathtubOutlinedIcon style={{ fontSize: "90px" }} />
                    <p>One Bathtub</p>
                </Button>
                <Button onClick={() => {
                    setCurrentStep(3)
                    setUserData({ ...userData, "bathtub": "Two Bathtubs" })
                }} value={userData["bathtub"]} variant="outlined" color="primary" style={{ display: "flex", flexDirection: "column", padding: "30px 50px", margin: "20px", color: "gray", borderColor: "gray" }}>
                    <BathtubOutlinedIcon style={{ fontSize: "90px" }} />
                    <p>Two Bathtubs</p>
                </Button>
                <Button onClick={() => {
                    setCurrentStep(3)
                    setUserData({ ...userData, "bathtub": "Three+ Bathtubs" })
                }} value={userData["bathtub"]} variant="outlined" color="primary" style={{ display: "flex", flexDirection: "column", padding: "30px 50px", margin: "20px", color: "gray", borderColor: "gray" }}>
                    <BathtubOutlinedIcon style={{ fontSize: "90px" }} />
                    <p>Three+ Bathtubs</p>
                </Button>
            </div>
            <div>
                <Button onClick={() => setCurrentStep(1)} variant="contained" color="secondary">Back</Button>
                {/* <Button onClick={() => setCurrentStep(3)} variant="contained" color="primary">Next</Button> */}
            </div >
        </div>
    )
}

export default SecondStep;