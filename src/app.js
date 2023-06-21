import express from "express";
import morgan from "morgan";

// Routes
import productsRoutes from "./routes/products.routes";

const app= express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/products', productsRoutes);

export default app;