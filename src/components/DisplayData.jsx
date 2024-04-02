import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { multiStepContext } from '../StepContext';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { multiStepContext } from '../StepContext';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const DisplayData = () => {
    // const { setCurrentStep, finalData } = useContext(multiStepContext);
    const { setCurrentStep, userData, setUserData, finalData } = useContext(multiStepContext);

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Fuel Power</StyledTableCell>
                            <StyledTableCell align="right">Bathtubs</StyledTableCell>
                            <StyledTableCell align="right">Post Code</StyledTableCell>
                            <StyledTableCell align="right">First Name</StyledTableCell>
                            <StyledTableCell align="right">Last Name</StyledTableCell>
                            <StyledTableCell align="right">Email</StyledTableCell>
                            <StyledTableCell align="right">Phone Number</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {finalData.map((row) => (
                            <StyledTableRow key={row.firstname}>
                                <StyledTableCell component="th" scope="row">
                                    {row.fuelpower}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.bathtub}</StyledTableCell>
                                <StyledTableCell align="right">{row.postcode}</StyledTableCell>
                                <StyledTableCell align="right">{row.firstname}</StyledTableCell>
                                <StyledTableCell align="right">{row.lastname}</StyledTableCell>
                                <StyledTableCell align="right">{row.email}</StyledTableCell>
                                <StyledTableCell align="right">{row.phone}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div>
                <Button onClick={() => setCurrentStep(1)} variant="contained" color="primary" style={{ margin: "20px" }}>Fill Another Form</Button>
            </div>
        </div>
    )
}

export default DisplayData;