const express = require('express');
const app = express();
const logger = (svc, msg) => console.log(JSON.stringify({time: new Date(), service: svc, message: msg}));

app.use((req, res, next) => {
  logger("backend", "Accès Base de données RSSP");
  next();
});

app.get('/', (req, res) => res.json({ service: "Backend", data: ["Networks", "Security", "DevSecOps"] }));
app.listen(3000, () => logger("backend", "Service Backend démarré sur le port 3000"));// hi