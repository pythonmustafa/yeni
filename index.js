const express = require("express");

const app = express();

app.use(express.json());

// 📌 Statik site (frontend)
app.use(express.static("public"));

// 📌 API - test
app.get("/api", (req, res) => {
  res.json({
    status: "ok",
    message: "API çalışıyor 🚀"
  });
});

// 📌 API - kullanıcılar
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Ali" },
    { id: 2, name: "Ayşe" }
  ]);
});

// 📌 API - veri alma (POST)
app.post("/api/users", (req, res) => {
  const user = req.body;

  res.json({
    message: "Kullanıcı alındı",
    user: user
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server çalışıyor: ${PORT}`);
});
