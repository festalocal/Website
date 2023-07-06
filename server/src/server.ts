import express from 'express';
import evenementRoutes from './routes/evenement.route';

const app = express();
const port = 3000;

// Mounting the Evenement routes to the API server.
app.use('/api', evenementRoutes);

// Starting the server
app.listen(port, () => {
  console.log('Server running');
  console.log({"port": port});
})