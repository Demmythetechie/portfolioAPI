import express from 'express';
import workRoutes from "./routes/work.js";

const app = express();

app.use('/work', workRoutes);

app.listen(4000);