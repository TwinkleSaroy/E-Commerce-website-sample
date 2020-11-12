const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')
('sk_test_51HYoYWFcQTuAeGI58kaIqWU55yKc2AruYKT3jNywQqCXxwcjqmDjtMe0Jok6h1AUChiQRxqOum0qBZX5XMPieZrp00gpdO5G95')

//API

//-App config
const app = express();

//-Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//-API routes
app.use('/',(request,response) => response.status(200).send('hello world'));

app.post('/payments/create',async (request,response) => {
   const total = request.query,total;
   
   console.log('Payment Request Recieved Thanks!! for this amount >>>',total)

   const paymentIntent =await stripe.paymentIntents.create({
       amount:total, //submits of the currency
       currency:'usd',
   });

   //OK - created
   response.status(201).send({
       clientSecret:paymentIntent.clientSecret,
   })
})
//-Listen command
exports.api = functions.https.onRequest(app)

//example endpoint
// http://localhost:5001/clone-ef663/us-central1/api 