const express = require('express');
const app = express();
const logger = (svc, msg) => console.log(JSON.stringify({time: new Date(), service: svc, message: msg}));

app.use((req, res, next) => {
  logger("frontend", "Visite du Dashboard Safae");
  next();
});

app.get('/', (req, res) => res.send('<h1>Dashboard Safae - RSSP Engineering</h1><p>Status: Cluster Ready</p>'));
app.listen(3000, () => logger("frontend", "Service Frontend démarré sur le port 3000"));
