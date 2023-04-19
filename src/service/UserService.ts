import User from '../models/User';

type UserType = {
    _id: string,
    name: string;
    password: string;
    email: string;
    type: number
}

export async function getUsers() {
    const usuarios = await User.find({})
    return usuarios;
}

export async function getUserByEmailAndPassword(user: UserType) {
    const usuario = await User.findOne({ email: user.email, password: user.password })
    return usuario;
}

export async function addUser(newUser: UserType) {
    return await User.create(newUser)
}

export async function updateUser(user: UserType) {
    let _id = user._id
    let userTemp = await User.findOne({ _id })
    if (userTemp != null) {
        userTemp.name = user.name;
        userTemp.email = user.email;
        userTemp.password = user.password;

        await userTemp.save();
    }
}

export async function delUser(_id: string) {
    return await User.findByIdAndDelete({ _id })
}


