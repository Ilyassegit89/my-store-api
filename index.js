const express = require('express')
const app = express();
const path = require('path');
const cors = require('cors'); // Import CORS

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS for all routes
app.use(cors({
  origin: 'http://127.0.0.1:5174', // Allow only your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow cookies and credentials
}));

const products = [
    { category : "men's Clothing", id: 1 ,image: "https://my-store-api-blush.vercel.app/ProductsImg/p1.png" ,price: 25.25 , title: "Mushroom shirt"},
    { category : "men's Clothing", id: 2 ,image: "https://my-store-api-blush.vercel.app/ProductsImg/p2.png" ,price: 15.5 , title: "Tshirt Cat"},
    { category : "men's Clothing", id: 3 ,image: "https://my-store-api-blush.vercel.app/ProductsImg/p3.png" ,price: 15.2 , title: "Planet Tshirt"},
    { category : "men's Clothing", id: 4 ,image: "https://my-store-api-blush.vercel.app/ProductsImg/p4.png" ,price: 15.4 , title: "Dragon Tshirt"},
    { category : "men's Clothing", id: 5 ,image: "https://my-store-api-blush.vercel.app/ProductsImg/p5.png" ,price: 30.25 , title: "Blue blaze Butterfly shirt"},
    { category : "women's Clothing", id: 6 ,image: "https://my-store-api-blush.vercel.app/ProductsImg/p6.png" ,price: 25.5 , title: "Butterfly shirt Women"},
    { category : "men's Clothing", id: 7 ,image: "https://my-store-api-blush.vercel.app/ProductsImg/p7.png" ,price: 40 , title: "Fire Hoodie Black"},
    { category : "men's Clothing", id: 8 ,image: "https://my-store-api-blush.vercel.app/ProductsImg/p8.png" ,price: 36.2 , title: "Fire Hoodie White 'Expect'"},
    { category : "men's Clothing", id: 9 ,image: "https://my-store-api-blush.vercel.app/ProductsImg/p9.png" ,price: 45.65 , title: "Winter Coat BLack"},
    { category : "men's Clothing", id: 10 ,image: "https://my-store-api-blush.vercel.app/ProductsImg/p10.png" ,price: 55.5 , title: "Winter Coat Gray"},
    { category : "men's Clothing", id: 11 ,image: "https://my-store-api-blush.vercel.app/ProductsImg/p11.png" ,price: 60.2 , title: "Winter Coat White"},
    { category : "men's Clothing", id: 12 ,image: "https://my-store-api-blush.vercel.app/ProductsImg/p12.png" ,price: 66.2 , title: "Winter Coat Green"},
    { category : "men's Clothing", id: 13 ,image: "https://my-store-api-blush.vercel.app/ProductsImg/p13.png" ,price: 50.54 , title: "Winter Coat Blue"},
    { category : "men's Clothing", id: 14 ,image: "https://my-store-api-blush.vercel.app/ProductsImg/p14.png" ,price: 7.65 , title: "Hat Polo"},
    { category : "women's Clothing", id: 15 ,image: "https://my-store-api-blush.vercel.app/ProductsImg/p15.png" ,price: 25.25 , title: "White: Scarf, Gloves, Hat"},
    { category : "women's Clothing", id: 16 ,image: "https://my-store-api-blush.vercel.app/ProductsImg/p16.png" ,price: 30.5 , title: "Pink: Scarf, Gloves, Hat"},
    {category:  "men's clothing", id: 17 , image : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" ,price : 109.95 ,title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"},
    { category: "men's clothing" , id: 18 , image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" ,price: 22.3 ,title : "Mens Casual Premium Slim Fit T-Shirts "},
    {category: "men's clothing", id: 19 , image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" ,price: 55.99 ,title: "Mens Cotton Jacket"},
    {category:  "men's clothing", id: 20, image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" , price: 15.99 , title: "Mens Casual Slim Fit"},
    {category: "jewelery" , id: 21 , image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" ,price: 695 ,title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"},
    {category: "jewelery", id: 22 , image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", price: 168 ,title: "Solid Gold Petite Micropave "},
    {category: "jewelery", id: 23, image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg", price:  9.99 ,title: "White Gold Plated Princess"},
    {category: "jewelery", id: 24, image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" , price: 10.99 ,title: "Pierced Owl Rose Gold Plated Stainless Steel Double"},
    {category: "women's clothing" ,id: 25, image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" ,price: 56.99 ,title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats"},
    {category: "women's clothing", id: 26, image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" , price: 29.9 ,title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket"},
    {category: "women's clothing" ,id: 27, image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" ,price: 39.99, title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats"},
    {category: "women's clothing", id: 28, image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg", price: 9.85, title: "MBJ Women's Solid Short Sleeve Boat Neck V "},
    {category: "women's clothing", id: 29, image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg", price: 7.95, title: "Opna Women's Short Sleeve Moisture"},
    {category: "women's clothing", id: 30, image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg", price: 12.99, title: "DANVOUY Womens T Shirt Casual Cotton Short"}

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

module.exports = app;