import prisma from "../DB/db.config.js";

// * Show Posts
export const fetchPosts = async (req, res) => {
    const posts = await prisma.post.findMany({
        // 1 * shows posts with its comment
        // include: {
        //     comment: true
        // }

        // 2 * shows posts with its comment and only user name who is made
        include: {
            comment: {
                include: {
                    user: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        },

        // * filtering
        orderBy: { // The show in decending order means the last post shown firest
            id: "desc"
        }
    });
    return res.json({ status: 200, posts: posts })
}

// * Show Post
export const fetchPost = async (req, res) => {
    const postId = req.params.id
    const post = await prisma.post.findFirst({
        where: {
            id: Number(postId)
        }
    })
    return res.json({ status: 200, post: post })
}

// * Create a Post
export const createPost = async (req, res) => {

    const { user_id, title, description } = req.body;

    //creating a new post 
    const newPost = await prisma.post.create({

        //to create a new post it will take data in object form in data property
        data: {
            user_id: Number(user_id),
            title: title,
            description: description
        }
    })

    res.json({ status: 200, data: newPost, mesage: "new post added successfully" });

}

// * Update the post
export const updatePost = async (req, res) => {
    const { title, description } = req.body;
    const postId = req.params.id;

    await prisma.post.update({

        // updating on the basis of uniqueness(which is id)
        where: {
            // converting userId into number bcz parms give string
            id: Number(postId)
        },
        //data tobe updated
        data: {
            title: title,
            description: description
        }

    })
    res.json({ status: 200, message: `Post Successfully updated` })
}

// * Delete post
export const deletePost = async (req, res) => {
    const postId = req.params.id;
    const deletePost = await prisma.post.delete({
        where: {
            id: Number(postId)
        }
    })
    res.json({ status: 200, message: "Successfully deleted" });
}// * Full-text search (it will search the description of post and return if such post is existing or not)
export const searchPost = async (req, res) => {
    const query = req.query.q
    const result = await prisma.post.findMany({
        where: {
            description: {
                search: query,
            },
        }
    })
    return res.json({ status: 200, data: result })
}
