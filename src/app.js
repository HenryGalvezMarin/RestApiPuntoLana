import express from "express";
import morgan from "morgan";
import cors from "cors";

// Routes
import productsRoutes from "./routes/products.routes";

const app= express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));

//Routes
app.use('/api/products', productsRoutes);

export default app;