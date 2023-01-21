import mongoose, { mongo } from "mongoose";

const connectDb = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
    .then(() => console.log('Mongo DB Connected'))
    .catch((error) => console.log(error))
}

export default connectDb;
