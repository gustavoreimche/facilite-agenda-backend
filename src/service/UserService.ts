import User from '../models/User';


export async function getUsers() {
    const usuarios = await User.find({})
    return usuarios;
}

export async function addUser(newUser: any) {

    await User.create({
        name: newUser.name,
        password: newUser.password,
        email: newUser.email,
        type: newUser.type
    })
}

export async function updateUser(id: string, user: any) {
    let userTemp = await User.findOne({ id })
    if (userTemp != null) {
        userTemp.name = user.name;
        userTemp.email = user.email;
        userTemp.password = user.password;

        await userTemp.save();
    }
}


