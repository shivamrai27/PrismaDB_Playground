import prisma from "../DB/db.config.js";

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