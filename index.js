const express = require('express');
const app = express();
const port = 20202;
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/api', userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
