import { Google } from "@mui/icons-material"
import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title='Registro'>
      <form>
        <Grid 
          container
        >
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField
              type="text"
              label="Nombre completo"
              placeholder="Tú nombre"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <TextField
              type="email"
              label="Correo"
              placeholder="correo@gmail.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <TextField
              type="password"
              label="Contraseña"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>

          <Grid
            container
            spacing={2}
            sx={{mb: 2, mt: 1}}  
          >
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction='row'
            justifyContent='end'
          >
            <Typography sx={{mr: 1}}>¿Ya tienes una cuneta?</Typography>
            <Link
              color='inherit'
              to="/auth/login"
              component={RouterLink}
            >
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
