import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Üst Navigasyon Menüsü */}
      <AppBar position="static" color="primary" elevation={2}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Kurumsal Yönetim Paneli
          </Typography>
          <Button color="inherit" onClick={() => navigate('/')}>
            Çıkış Yap
          </Button>
        </Toolbar>
      </AppBar>

      {/* Ana İçerik Alanı */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={2} sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h5" gutterBottom sx={{ borderBottom: '1px solid #eee', pb: 1 }}>
            Sistem Özeti
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Özelleştirilebilir form yapıları ve dinamik veri tabloları bu alana yerleştirilecek.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}