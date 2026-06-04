require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

// 1. ÖNCE UYGULAMAYI TANIMLIYORUZ (Hatanın çözümü burada)
const app = express();
const PORT = process.env.PORT || 3000;

// 2. SUPABASE BAĞLANTISI VE AYARLAR
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(cors());
app.use(express.json());

// ==========================================
// 3. API ROTALARI (Mutlaka app tanımlandıktan sonra olmalı)
// ==========================================

// Carileri Listeleme (GET)
app.get('/api/cariler', async (req, res) => {
  try {
    const { data, error } = await supabase.from('cariler').select('*');
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Yeni Cari Ekleme (POST)
app.post('/api/cariler', async (req, res) => {
  try {
    const { cari_kodu, unvan, vergi_dairesi, vergi_no } = req.body;

    const { data, error } = await supabase
      .from('cariler')
      .insert([
        { cari_kodu, unvan, vergi_dairesi, vergi_no }
      ])
      .select(); 

    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==========================================
// 4. REACT (FRONTEND) STATİK DOSYALARI
// ==========================================
app.use(express.static(path.join(__dirname, 'client/dist')));

// ==========================================
// 5. REACT ROUTER (Tüm istekleri Frontend'e yönlendir)
// ==========================================
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

// ==========================================
// 6. SUNUCUYU BAŞLAT
// ==========================================
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});