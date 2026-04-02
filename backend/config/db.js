import mongoose from "mongoose"

//first we export a variable called connectDB which is an async function
export const connectDB = async () => {
    // mongoose package that allows for the connection to the database
    try {
        // await keyword pauses execution of code until promise 
        //ie mongoose.connect() is resolved or rejected
        // mongoose.connect() 
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        //tells the Node to terminate the process synchronously with exit status of {code}
        // default or 0 means 'success', 1 means failure
        process.exit(1);
    }
}