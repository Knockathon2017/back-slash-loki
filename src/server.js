import express from 'express';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || 'localhost';


app.use('/', routes);

const server = app.listen(PORT, () => {
      console.log(`Server is running at ${PORT}, CG is configured at ${HOST}`);
});
server.timeout = 0;
