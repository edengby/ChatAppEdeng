const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(`mongodb://localhost:27017/users`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    }, (err) => {
        if(err){
            console.log(err);
        } else {
            console.log("connected successfully to MongoDB");
        }
    });
}

module.exports = connectDB;