import React, { useState } from "react";
import {
    Container,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Button,
    Grid,
} from "@mui/material";

const BloodDonorRecipientForm = () => {
    const [userType, setUserType] = useState("donor"); // Default to donor
    const [formData, setFormData] = useState({
        name: "",
        bloodType: "",
        lastDonationDate: "",
        hospitalName: "",
    });

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted:", userType, formData);
        // You may want to make an API call to handle form submission
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Blood Donor and Recipient App
            </Typography>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth margin="normal">
                    <InputLabel>User Type</InputLabel>
                    <Select value={userType} onChange={handleUserTypeChange}>
                        <MenuItem value="donor">Donor</MenuItem>
                        <MenuItem value="recipient">Recipient</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                />

                <TextField
                    fullWidth
                    label="Blood Type"
                    name="bloodType"
                    value={formData.bloodType}
                    onChange={handleChange}
                    margin="normal"
                    required
                />

                {userType === "donor" && (
                    <TextField
                        fullWidth
                        label="Last Donation Date"
                        type="date"
                        name="lastDonationDate"
                        value={formData.lastDonationDate}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                )}

                {userType === "recipient" && (
                    <TextField
                        fullWidth
                        label="Hospital Name"
                        name="hospitalName"
                        value={formData.hospitalName}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                )}

                <Grid container justifyContent="center" spacing={2}>
                    <Grid item>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default BloodDonorRecipientForm;
