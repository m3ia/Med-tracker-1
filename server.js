const express = require('express');

const model = require('./model.js');
const { Medication } = require('./model.js');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running port ${port}...`)
})

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.route('/medications').get((req, res) => {
  res.send(model.Medication.all);
  console.log(model.Medication.all);
});

// 