import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// Importing Evenement API routes
import evenementRoutes from './routes/evenement.route';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enabling CORS Cross Origin Ressource Sharing
app.use(cors());

// Mounting the Evenement routes to the API server.
app.use('/api', evenementRoutes);

// Starting the server
app.listen(port, () => {
  console.log('Server running');
  console.log({'port': port});
});