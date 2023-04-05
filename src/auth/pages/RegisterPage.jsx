import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

import { useForm } from "../../hooks/useForm"

import { AuthLayout } from "../layout/AuthLayout"

const formData = {
  name: "",
  email: "",
  password: ""
}

const formValidations = {
  name: [(value) => value.length >= 1, 'La nombre es obligatorio'],
  email: [(value) => value.includes('@'), 'Email no es valido, debe tener una @'],
  password: [(value) => value.length >= 6, 'La contraseña debe contener más de 6 caracteres'],
}

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { formState, errors, isFormValid, onInputChange } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      setFormSubmitted(true);
      return
    }

    console.log(formState);
  }

  return (
    <AuthLayout title='Registro'>
      <form onSubmit={onSubmit}>
        <Grid 
          container
        >
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField
              fullWidth
              type="text"
              name="name"
              label="Nombre completo"
              placeholder="Tú nombre"
              value={formState.name}
              onChange={onInputChange}
              error={!!errors.name && formSubmitted}
              helperText={formSubmitted ? errors.name : ''}
            />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <TextField
              fullWidth
              type="email"
              name="email"
              label="Correo"
              placeholder="correo@gmail.com"
              value={formState.email}
              onChange={onInputChange}
              error={!!errors.email && formSubmitted}
              helperText={formSubmitted ? errors.email : ''}
            />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <TextField
              fullWidth
              type="password"
              name="password"
              label="Contraseña"
              placeholder="Contraseña"
              value={formState.password}
              onChange={onInputChange}
              error={!!errors.password && formSubmitted}
              helperText={formSubmitted ? errors.password : ''}
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
              >
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
