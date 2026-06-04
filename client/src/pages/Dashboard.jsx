import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h1>Yönetim Paneli</h1>
      <p>Burada veri tabloları ve formlar yer alacak.</p>
      <Link to="/">Ana Sayfaya Dön</Link>
    </div>
  );
}