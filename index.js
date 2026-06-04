// index.js
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
// Render, ortam değişkeni olarak kendi PORT'unu atar.
const PORT = process.env.PORT || 3000; 

app.use(cors());
app.use(express.json());

// Örnek bir API Endpoint'i
app.get('/api/merhaba', (req, res) => {
  res.json({ message: 'Express backend üzerinden selamlar!' });
});

// --- RENDER DEPLOYMENT İÇİN ÖNEMLİ KISIM ---
// React projesinin derlenmiş dosyalarını statik olarak sunar (Vite kullanacağımız için klasör adı 'dist')
app.use(express.static(path.join(__dirname, 'client/dist')));

// API haricindeki tüm istekleri React'e yönlendirir (React Router kullanırsanız sayfa yenilemede hata almamak için şarttır)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});