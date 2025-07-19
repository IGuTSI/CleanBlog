const express = require('express');

const path = require('path');

const app = express();

const myLogger = (req, res, next) => {
  console.log('Middleware Log 1');
  next(); //middleware'ler sırayla çalışır o yüzden next çağırtırız.
};

const myLogger2 = (req, res, next) => {
  console.log('Middleware Log 2');
  next(); //middleware'ler sırayla çalışır o yüzden next çağırtırız.
};

app.use(express.static('public')); // public içerisindeki statik dosyaları kullan

app.use(myLogger);
app.use(myLogger2);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

const port = 4500;
app.listen(port, () => {
  console.log(`Sunucu ${port}'unda başlatıldı....`);
});
