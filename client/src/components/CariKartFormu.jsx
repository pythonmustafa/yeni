import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Snackbar, Alert } from '@mui/material';

export default function CariKartFormu() {
  // Form verilerini tutacağımız React State'i
  const [formData, setFormData] = useState({
    cari_kodu: '',
    unvan: '',
    vergi_dairesi: '',
    vergi_no: ''
  });

  // Başarılı/Başarısız bildirimleri için State
  const [bildirim, setBildirim] = useState({ acik: false, mesaj: '', tur: 'success' });

  // Inputlara veri girildikçe State'i güncelleyen fonksiyon
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // "Kaydet" butonuna basıldığında çalışacak fonksiyon
  const handleSubmit = async (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini engeller

    try {
      // Backend'imize POST isteği atıyoruz
      const response = await fetch('/api/cariler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Kayıt işlemi başarısız oldu.');
      }

      // Başarılı olursa formu temizle ve bildirim göster
      setBildirim({ acik: true, mesaj: 'Cari Kart Başarıyla Kaydedildi!', tur: 'success' });
      setFormData({ cari_kodu: '', unvan: '', vergi_dairesi: '', vergi_no: '' });

    } catch (error) {
      setBildirim({ acik: true, mesaj: error.message, tur: 'error' });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField required fullWidth label="Cari Kodu" name="cari_kodu" value={formData.cari_kodu} onChange={handleChange} variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required fullWidth label="Cari Ünvanı" name="unvan" value={formData.unvan} onChange={handleChange} variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Vergi Dairesi" name="vergi_dairesi" value={formData.vergi_dairesi} onChange={handleChange} variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Vergi Numarası" name="vergi_no" value={formData.vergi_no} onChange={handleChange} variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" size="large">
            Kaydet
          </Button>
        </Grid>
      </Grid>

      {/* Ekranın altında çıkacak olan küçük bilgi mesajı (Toast) */}
      <Snackbar open={bildirim.acik} autoHideDuration={4000} onClose={() => setBildirim({ ...bildirim, acik: false })}>
        <Alert severity={bildirim.tur} sx={{ width: '100%' }}>
          {bildirim.mesaj}
        </Alert>
      </Snackbar>
    </Box>
  );
}