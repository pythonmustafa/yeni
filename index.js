require('dotenv').config();
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

// ==========================================
// 1. ÖNCE API ROTALARI BURAYA YAZILMALIDIR
// ==========================================
app.get('/api/cariler', async (req, res) => {
  try {
    const { data, error } = await supabase.from('cariler').select('*');
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==========================================
// 2. SONRA REACT (FRONTEND) DOSYALARI SUNULMALIDIR
// ==========================================
app.use(express.static(path.join(__dirname, 'client/dist')));

// ==========================================
// 3. EN SON REACT ROUTER YÖNLENDİRMESİ YAPILMALIDIR
// ==========================================
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});