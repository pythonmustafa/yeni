import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

export default function CariHareketTablosu() {
  // Örnek statik veri (Daha sonra backend'den gelecek)
  const rows = [
    { id: 1, tarih: '2026-06-01', aciklama: 'Devir Bakiyesi', borc: 15000, alacak: 0 },
    { id: 2, tarih: '2026-06-02', aciklama: 'Mal Alım Faturası', borc: 0, alacak: 5000 },
  ];

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }} elevation={0}>
      <Table>
        <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
          <TableRow>
            <TableCell>Tarih</TableCell>
            <TableCell>Açıklama</TableCell>
            <TableCell align="right">Borç</TableCell>
            <TableCell align="right">Alacak</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.tarih}</TableCell>
              <TableCell>{row.aciklama}</TableCell>
              <TableCell align="right">{row.borc.toLocaleString('tr-TR')} TL</TableCell>
              <TableCell align="right">{row.alacak.toLocaleString('tr-TR')} TL</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}