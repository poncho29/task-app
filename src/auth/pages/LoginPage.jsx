import { useDispatch } from "react-redux"
import { Google } from "@mui/icons-material"
import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { checkingAuthentication } from "../../store/auth"

export const LoginPage = () => {
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "", password: ""
  });

  const onSubmit = (event) => {
    event.preventDefault();

    console.log({ email, password })
    dispatch(checkingAuthentication())
  }

  const onGoogleSingIn = () => {}

  return (
    <AuthLayout title='Iniciar Sesión'>
      <form onSubmit={onSubmit}>
        <Grid 
          container
        >
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField
              fullWidth
              name="email"
              type="email"
              label="Correo"
              placeholder="correo@gmail.com"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <TextField
              fullWidth
              name="password"
              type="password"
              label="Contraseña"
              placeholder="Contraseña"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid
            container
            spacing={2}
            sx={{mb: 2, mt: 1}}  
          >
            <Grid item xs={12} sm={6}>
              <Button fullWidth type="submit" variant="contained">
                Entrar
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button fullWidth variant="contained" onClick={onGoogleSingIn}>
                <Google />
                <Typography sx={{ml: 1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction='row'
            justifyContent='end'
          >
            <Link
              color='inherit'
              to="/auth/register"
              component={RouterLink}
            >
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
