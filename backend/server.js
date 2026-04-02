import express from 'express';
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

import productRoutes from "./routes/product_route.js";


dotenv.config();

const app = express(); // app is express application
const PORT = process.env.PORT || 5000

app.use(express.json()); // allows us to accept json data in the req.body
// runs before a response is sent back to the client


// example_app.get(path, callback)

//used to define routes on server that handle http get requests
//this example listens for GET requests at /products, and when accs
// responds with showing the products
//app.get("/products", (req, res) => {});

app.use("/api/products", productRoutes)

//example_app.listen(port, host, backlg, callback}

//starts the server and lsitens for requests on a given port
//waits for users to send requests to app
//sends back a response when a request is recieved
// in this case, its the console func
app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});

console.log(process.env.MONGO_URI);