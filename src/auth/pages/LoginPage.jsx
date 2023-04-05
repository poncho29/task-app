import Swal from "sweetalert2"
import { useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField } from "@mui/material"

import { useForm } from "../../hooks/useForm"
import { useAuthStore } from "../../hooks/useAuthStore"

import { AuthLayout } from "../layout/AuthLayout"

const loginForm = {
  email: "",
  password: ""
}

export const LoginPage = () => {
  // REDUX
  const { status, errorMessage } = useSelector(state => state.auth);

  // CUSTOM HOOKS
  const { startLogin } = useAuthStore()
  const { email, password, onInputChange } = useForm(loginForm);

  // MEMOS
  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  // EFFECTS
  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire('Ups, algo fallo al iniciar sesión', errorMessage, 'error')
    }
  }, [errorMessage])

  // FUNCTIONS
  const onSubmit = (event) => {
    event.preventDefault();

    // console.log({ email, password });
    startLogin({ username: email, password });
  }

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
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={isAuthenticating}
              >
                Entrar
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
