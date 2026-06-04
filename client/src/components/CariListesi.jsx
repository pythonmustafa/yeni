import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Box } from '@mui/material';

export default function CariListesi() {
  const [cariler, setCariler] = useState([]);
  const [yukleniyor, setYukleniyor] = useState(true);

  // Sayfa yüklendiğinde veritabanından carileri çeken fonksiyon
  useEffect(() => {
    const fetchCariler = async () => {
      try {
        const response = await fetch('/api/cariler');
        if (!response.ok) throw new Error('Veriler getirilemedi');
        
        const data = await response.json();
        setCariler(data); // Gelen veriyi state'e kaydediyoruz
      } catch (error) {
        console.error("Hata:", error);
      } finally {
        setYukleniyor(false); // Yükleme animasyonunu durdur
      }
    };

    fetchCariler();
  }, []);

  // Veriler yüklenirken ekranda dönen bir animasyon göster
  if (yukleniyor) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #eee', mt: 2 }}>
      <Table>
        <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Cari Kodu</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Cari Ünvanı</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Vergi Dairesi</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Vergi Numarası</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cariler.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} align="center">
                Henüz kayıtlı cari bulunmamaktadır.
              </TableCell>
            </TableRow>
          ) : (
            cariler.map((cari) => (
              <TableRow key={cari.id} hover>
                <TableCell>{cari.cari_kodu}</TableCell>
                <TableCell>{cari.unvan}</TableCell>
                <TableCell>{cari.vergi_dairesi}</TableCell>
                <TableCell>{cari.vergi_no}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}