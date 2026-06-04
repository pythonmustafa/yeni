// index.js
require('dotenv').config(); // .env dosyasını okumak için
const express = require('express');
const path = require('path');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

// Supabase Bağlantısı
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(cors());
app.use(express.json());

// --- YENİ EKLENEN API: Carileri Getir ---
app.get('/api/cariler', async (req, res) => {
  try {
    // Supabase'den cariler tablosundaki tüm verileri çekiyoruz
    const { data, error } = await supabase
      .from('cariler')
      .select('*');

    if (error) throw error;
    
    // Veriyi React'e gönderiyoruz
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// React projesinin derlenmiş dosyalarını statik olarak sunar
app.use(express.static(path.join(__dirname, 'client/dist')));

// API haricindeki tüm istekleri React'e yönlendirir
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});