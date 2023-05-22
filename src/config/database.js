const mongoose = require("mongoose");

const connect = async () => {
    await mongoose.connect('mongodb+srv://abhi:abhiahuja@cluster0.upskn1s.mongodb.net/?retryWrites=true&w=majority');
}

module.exports = connect;