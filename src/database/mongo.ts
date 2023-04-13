import { connect } from 'mongoose'
import dotenv from 'dotenv'
import User from '../models/User';

dotenv.config();

export const mongoConnect = async () => {

    try {
        await connect(process.env.MONGO_URL as string);
        console.log('CONECTED')
    } catch (error) {
        console.log(error)
    }
}