import mongoose from 'mongoose';

//this lists the fields / properites that a collection model will have
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true // adds createdAt, updatedAt fields to model
});

// model('collection_name', collectionSchema) tells mongoose to create a collection/model
const Product = mongoose.model('Product', productSchema);
// mongoose will make 'Product' plural on its own

export default Product;