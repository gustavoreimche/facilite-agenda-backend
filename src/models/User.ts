import { Schema, model, Model, connection } from "mongoose";


type UserType = {
    name: string;
    password: string;
    email: string;
    type: number
}

const schema = new Schema<UserType>({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    type: { type: Number, required: true }
})

const modelName: string = 'user';

export default (connection && connection.models[modelName]) ? connection.models[modelName] as Model<UserType>: model<UserType>(modelName, schema);
