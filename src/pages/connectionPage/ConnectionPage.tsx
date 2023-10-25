import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {handleChange, submitConnectionForm} from "./ConnectionPageService.tsx";
import './connectionPage.css'
import {fetchConnection} from "./ConnectionPageApi.tsx";

export default function ConnectionPage() {

    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        remember: false,
    });

    const [errors, setErrors] = React.useState({
        email: '',
        password: '',
    });

    return (
        <div className={"background"}>
            <Container sx={{height: " 100vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <h1 style={{margin: "0 auto 40px auto", display: "block"}}>
                    Digital
                    <span style={{color: "#58B5EF"}}>Express</span>
                </h1>
                <Container component="main" maxWidth="sm"
                           sx={{backgroundColor: "white", padding: 3, borderRadius: 4, boxShadow: "rgba(0, 0, 0, 0.08) 0px 6px 30px"}}>
                    <CssBaseline/>

                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>

                        <Grid sx={{alignSelf: "self-start"}}>
                            <Typography sx={{fontWeight: "bold"}} component="h1" variant="h5">
                                Connexion
                            </Typography>
                        </Grid>

                        <Box component="form" onSubmit={(e) => submitConnectionForm(e, setErrors, formData)} noValidate
                             sx={{mt: 1}}>
                            <TextField
                                error={!!errors.email}
                                helperText={errors.email}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Adresse email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={formData.email}
                                onChange={(e) => handleChange(e, setFormData, formData, setErrors, errors)}
                                InputProps={{style: {borderRadius: 6}}}
                            />
                            <TextField
                                error={!!errors.password}
                                helperText={errors.password}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Mot de passe"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={formData.password}
                                onChange={(e) => handleChange(e, setFormData, formData, setErrors, errors)}
                                InputProps={{style: {borderRadius: 6}}}
                            />
                            <FormControlLabel
                                control={<Checkbox
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={(e) => setFormData({...formData, remember: e.target.checked})}
                                    color="primary"
                                />}
                                label="Rester connecté"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                onClick={() => { fetchConnection(formData.email, formData.password) }}
                                sx={{mt: 1, mb: 2, borderRadius: 3, backgroundColor: "#5062f6"}}>
                                Se connecter
                            </Button>

                            <Grid sx={{textAlign: "center"}}>
                                <Link href="#" variant="body2" sx={{textDecoration: "none", fontWeight: "500"}}>
                                    Mot de passe oublié ?
                                </Link>
                            </Grid>
                        </Box>

                    </Box>
                </Container>
            </Container>
        </div>
    );
}
