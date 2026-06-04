import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Container, Tab, Tabs, Typography, Paper } from '@mui/material';
import CariKartFormu from '../components/CariKartFormu';
import CariHareketTablosu from '../components/CariHareketTablosu';
import { useNavigate } from 'react-router-dom';

export default function CariYonetimi() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    
    <Container maxWidth="lg" sx={{ mt: 4 }}>
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
      </Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Cari Hesap Yönetimi
      </Typography>
      
      <Paper elevation={2} sx={{ width: '100%', mt: 2 }}>
        {/* Sekme Başlıkları */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={activeTab} onChange={handleTabChange} aria-label="cari islemleri">
            <Tab label="Cari Kart Bilgileri" />
            <Tab label="Cari Hareketler (Ekstre)" />
          </Tabs>
        </Box>

        {/* Sekme İçerikleri */}
        <Box sx={{ p: 3 }}>
          {activeTab === 0 && <CariKartFormu />}
          {activeTab === 1 && <CariHareketTablosu />}
        </Box>
      </Paper>
    </Container>
  );
}
