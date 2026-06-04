// ==========================================
// 1. API ROTALARI
// ==========================================

// Mevcut GET Rotası (Carileri Listeleme)
app.get('/api/cariler', async (req, res) => {
  try {
    const { data, error } = await supabase.from('cariler').select('*');
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// YENİ: POST Rotası (Yeni Cari Ekleme)
app.post('/api/cariler', async (req, res) => {
  try {
    // React'ten (Frontend) gelen verileri alıyoruz
    const { cari_kodu, unvan, vergi_dairesi, vergi_no } = req.body;

    // Supabase 'cariler' tablosuna yeni satır olarak ekliyoruz
    const { data, error } = await supabase
      .from('cariler')
      .insert([
        { cari_kodu, unvan, vergi_dairesi, vergi_no }
      ])
      .select(); // Eklenen veriyi geri döndürmesi için

    if (error) throw error;

    // Başarılı olursa 201 (Oluşturuldu) koduyla veriyi geri gönderiyoruz
    res.status(201).json(data[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==========================================
// 2. REACT (FRONTEND) STATİK DOSYALARI ...