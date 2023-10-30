import {handleChange, submitConnectionForm} from "../pages/connectionPage/ConnectionPageService.tsx";
import {Box, Button, Checkbox, CircularProgress, FormControlLabel, Grid, Link, TextField} from "@mui/material";

export function ConnectionForm({ formData, errors, loading, setFormData, setErrors, setLoading }) {

    const hasInvalidCredentials = errors.invalidCredentials && !loading;
    const isNotInvalidCredentials = !errors.invalidCredentials && !loading;

    return (
        <Box component="form" onSubmit={(e) => submitConnectionForm(e, setErrors, formData, setLoading)} noValidate sx={{ mt: 1 }}>
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
                InputProps={{ style: { borderRadius: 6 } }}
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
                InputProps={{ style: { borderRadius: 6 } }}
            />
            <FormControlLabel
                control={<Checkbox
                    name="remember"
                    checked={formData.remember}
                    onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                    color="primary"
                />}
                label="Rester connecté"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2, borderRadius: 1.5, textTransform: "none", fontSize: "1.05rem", fontWeight: 600 }}
                className={hasInvalidCredentials ? "!bg-red-700 !transform-none" : "!bg-[#5062f6]"}
            >
                {hasInvalidCredentials && "Identifiants incorrects"}
                {isNotInvalidCredentials && "Se connecter"}
                {loading && <CircularProgress size={24} sx={{ color: "white", ml: 2 }} />}
            </Button>

            <Grid sx={{ textAlign: "center" }}>
                <Link href="#" variant="body2" sx={{ textDecoration: "none", fontWeight: "500" }}>
                    Mot de passe oublié ?
                </Link>
            </Grid>
        </Box>
    );
}