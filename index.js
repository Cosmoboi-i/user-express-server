import express from 'express';
import { errorHandler } from './src/routes/middlewares/errorHandling.js';
import router from './src/routes/userRoutes.js';
const PORT = 3000;

const app = express();

app.use(express.json());


app.use('/', router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
