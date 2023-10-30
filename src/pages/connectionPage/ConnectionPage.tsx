// Import necessary dependencies
import { useState } from 'react';
import {
    Container,
    CssBaseline,
    Grid,
    Box,
    Typography,
} from '@mui/material';
import './ConnectionPage.css';
import {ConnectionForm} from "../../components/ConnectionForm.tsx";

// Define the main connection page component
export default function ConnectionPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        invalidCredentials: false,
    });

    const [loading, setLoading] = useState(false);

    return (
        <div className={"background"}>
            <Container sx={{ height: " 100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h1 style={{ margin: "0 auto 40px auto", display: "block" }}>
                    Digital
                    <span style={{ color: "#58B5EF" }}>Express</span>
                </h1>
                <Container component="main" maxWidth="sm" sx={{ backgroundColor: "white", padding: 3, borderRadius: 4, boxShadow: "rgba(0, 0, 0, 0.08) 0px 6px 30px" }}>
                    <CssBaseline />
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                        <Grid sx={{ alignSelf: "self-start" }}>
                            <Typography sx={{ fontWeight: "600" }} component="h1" variant="h5">
                                Connexion
                            </Typography>
                        </Grid>
                        <ConnectionForm
                            formData={formData}
                            errors={errors}
                            loading={loading}
                            setFormData={setFormData}
                            setErrors={setErrors}
                            setLoading={setLoading}
                        />
                    </Box>
                </Container>
            </Container>
        </div>
    );
}
