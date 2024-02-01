import prisma from "../DB/db.config.js";

// * Show Users
export const fetchUsers = async (req, res) => {
    const users = await prisma.user.findMany({});
    return res.json({ status: 200, users: users })
}

// * Show user
export const fetchUser = async (req, res) => {
    const userId = req.params.id
    const user = await prisma.user.findFirst({
        where: {
            id: Number(userId)
        }
    })
    return res.json({ status: 200, user: user })
}

// * Create a new user
export const createUser = async (req, res) => {

    const { name, email, password } = req.body;

    //before creating user, finding if email already exist or not ?
    const findUser = await prisma.user.findUnique({
        //one email of column matched with coming data from body and destructured in email
        where: { email: email }
    })

    //if exist return the response
    if (findUser) {
        return res.json({ status: 400, message: "User already exists" })
    }

    //creating a new user 
    const newUser = await prisma.user.create({

        //to create a new user it will take data in object form in data property
        data: {
            name: name,
            email: email,
            password: password
        }
    })

    res.json({ status: 200, data: newUser, mesage: "new user created successfully" });
}

// * Update the user
export const updateUser = async (req, res) => {
    const { name, email, password } = req.body;
    const userId = req.params.id;

    await prisma.user.update({

        // updating on the basis of uniqueness(which is id)
        where: {
            // converting userId into number bcz parms give string
            id: Number(userId)
        },
        //data tobe updated
        data: {
            name: name,
            email: email,
            password: password
        }

    })
    res.json({ status: 200, message: `Successfully updated` })
}

// * Delete user
export const deleteUser = async (req, res) => {
    const userId = req.params.id;
    const deleteUser = await prisma.user.delete({
        where: {
            id: Number(userId)
        }
    })
    res.json({ status: 200, message: "Successfully deleted" });
}