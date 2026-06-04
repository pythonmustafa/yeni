import React from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';

export default function CariKartFormu() {
  return (
    <Box component="form" sx={{ mt: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Cari Kodu" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Cari Ünvanı" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Vergi Dairesi" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Vergi Numarası" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">Kaydet</Button>
        </Grid>
      </Grid>
    </Box>
  );
}