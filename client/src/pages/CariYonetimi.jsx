import React, { useState } from 'react';
import { Box, Container, Tab, Tabs, Typography, Paper } from '@mui/material';

// Bileşenlerimizi içe aktarıyoruz
import CariListesi from '../components/CariListesi';
import CariKartFormu from '../components/CariKartFormu';
import CariHareketTablosu from '../components/CariHareketTablosu';

export default function CariYonetimi() {
  // activeTab'i varsayılan olarak 0 (Cari Listesi) yapıyoruz
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Cari Hesap Yönetimi
      </Typography>
      
      <Paper elevation={2} sx={{ width: '100%', mt: 2 }}>
        {/* Sekme Başlıkları */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="Cari Listesi" />
            <Tab label="Yeni Cari Ekle" />
            <Tab label="Cari Hareketler (Ekstre)" />
          </Tabs>
        </Box>

        {/* Sekme İçerikleri */}
        <Box sx={{ p: 3 }}>
          {/* 0. Sekme: Supabase'den gelen gerçek veriler */}
          {activeTab === 0 && <CariListesi />}
          
          {/* 1. Sekme: Yeni kayıt formu */}
          {activeTab === 1 && <CariKartFormu />}
          
          {/* 2. Sekme: Şimdilik statik olan ekstre tablosu */}
          {activeTab === 2 && <CariHareketTablosu />}
        </Box>
      </Paper>
    </Container>
  );
}