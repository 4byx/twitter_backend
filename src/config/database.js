import mongoose from "mongoose"

export const connect = async () => {
    await mongoose.connect('mongodb+srv://abhi:abhiahuja@cluster0.upskn1s.mongodb.net/?retryWrites=true&w=majority');
}