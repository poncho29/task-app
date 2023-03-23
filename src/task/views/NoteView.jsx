import { Button, Grid, Typography } from "@mui/material"

export const NoteView = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography
          fontSize={39}
          fontWeight='light'
        >
          28 de agsoto, 2023
        </Typography>
      </Grid>

      <Grid item>
        <Button></Button>
      </Grid>
    </Grid>
  )
}
