import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Ana Sayfa</h1>
      <p>Sisteme hoş geldiniz.</p>
      <Link to="/dashboard">Yönetim Paneline Git</Link>
    </div>
  );
}