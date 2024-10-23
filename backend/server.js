const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kutuphane'
});

app.post('/kayit', (req, res) => {
    const isim = req.body.isim;
    const kullaniciadi = req.body.kullaniciadi;
    const sifre = req.body.sifre;
    const q = "INSERT INTO kullanicilar (isim, kadi, sifre) VALUES (?, ?, ?)";
    const q2 = "SELECT * FROM kullanicilar WHERE `kadi`=?";
    
    db.query(q2, [kullaniciadi], (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Hata" });
        }
        if (data.length > 0) {
            return res.status(409).json({ message: "Kullanici var" });
        } else {
            db.query(q, [isim, kullaniciadi, sifre], (err, data) => {
                if (err) {
                    return res.status(500).json({ message: "Hata" });
                }
                return res.status(201).json({ message: "Girebilir" });
            });
        }
    });
});
app.get('/kitaplar', (req, res) => {
    db.query('SELECT * FROM kitaplar', (err, results) => {
      if (err) {
        console.error('Veri tabanından kitapları çekerken hata oluştu:', err);
        return res.status(500).json({ message: 'Veri çekme hatası' });
      }
      res.status(200).json(results); 
    });
  });

app.post('/login', (req, res) => {
    const kullaniciadi = req.body.kullaniciadi;
    const sifre = req.body.sifre;
    const q = "SELECT * FROM kullanicilar WHERE `kadi`=? AND `sifre`=?";
    
    db.query(q, [kullaniciadi, sifre], (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Hata" });
        }
        if (data.length === 0) {
            return res.status(404).json({ message: "Kullanıcı adı veya şifre yanlış" });
        }
        return res.status(200).json({ message: "Basarili" });
    });
});


const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8081, () => {
    console.log('server 8081 portunda çalışıyor');
});