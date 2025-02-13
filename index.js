const express = require('express')
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));



const products = [
    { category : "men's clothing", id: 1 ,image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" ,price: 109.95 , title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"},
    { category : "men's clothing", id: 2 ,image: "http://localhost:3000/productsIMg/p1.png" ,price: 109.95 , title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"},
]

app.get('/', function (req, res) {
  res.send('Hello Every body')
})
app.get('/api/products', (req, res) => {
    res.json(products);
})
app.get('/api/products/:id', (req, res) => {
  const foundProd = products.find(p => p.id === parseInt(req.params.id));
  
  if (!foundProd) {
    return res.status(404).json({ message: 'The product with the given ID was not found.' });
  }

  res.json(foundProd); // Use res.json() to send JSON data
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))