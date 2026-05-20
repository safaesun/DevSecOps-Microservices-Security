const express = require('express');
const app = express();
const logger = (svc, msg) => console.log(JSON.stringify({time: new Date(), service: svc, message: msg}));

app.use((req, res, next) => {
  logger("auth", "Validation de session");
  next();
});

app.get('/', (req, res) => res.json({ service: "Auth", status: "Secure", user: "Safae" }));
app.listen(3000, () => logger("auth", "Service Auth démarré sur le port 3000"));
