const express = require('express')
const ViteExpress = require('vite-express')

const app = express();

//middleware
app.use(express.json())

app.use('/api', require('./api/index.cjs'))
// app.use('/auth', require('/auth/index.cjs'))

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
