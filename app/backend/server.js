const express = require('express');
const cors = require('cors');
const productsRoutes = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;

// Habilita CORS para todos os hosts
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use('/api/products', productsRoutes);

// Rota raiz para verificar se o servidor está rodando
app.get('/', (req, res) => {
  res.json({ 
    message: 'API de Produtos',
    endpoints: {
      products: '/api/products'
    }
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📍 Acesse: http://localhost:${PORT}`);
  console.log(`📦 Produtos: http://localhost:${PORT}/api/products`);
});
