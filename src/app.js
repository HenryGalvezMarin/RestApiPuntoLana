import express from "express";
import morgan from "morgan";
import cors from "cors";

// Routes
import productsRoutes from "./routes/products.routes";
import watsonRoutes from "./routes/watson.routes";
import usuarioRoutes from "./routes/usuarios.routes";
const app= express();

//Settings
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000', 'https://agreeable-field-0ddf53910.3.azurestaticapps.net']
}));

//Routes
app.use('/api/products', productsRoutes);
app.use('/api/watson', watsonRoutes)
app.use('/api/usuarios',usuarioRoutes)

export default app;