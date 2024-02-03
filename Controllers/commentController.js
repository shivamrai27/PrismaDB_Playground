import prisma from "../DB/db.config.js";

// * Show Posts
export const fetchComments = async (req, res) => {
    const comments = await prisma.comment.findMany({

        // * This will show comment which user is done and on which post (and which user is posted that post)
        include: {
            user: true, // which user is commented
            post: {  // comment is on which post 
                include: {
                    user: { // which user is done the post
                        select: {
                            name: true // its name of the user
                        }
                    }
                }
            }
        }
    });
    return res.json({ status: 200, comments: comments })
}

// * Show Post
export const fetchComment = async (req, res) => {
    const postId = req.params.id
    const post = await prisma.comment.findFirst({
        where: {
            id: Number(postId)
        }
    })
    return res.json({ status: 200, comment: comment })
}

// * Create a comment
export const createComment = async (req, res) => {

    const { user_id, post_id, comment } = req.body;

    // Increment comment counter on specific post
    await prisma.post.update({
        where: {
            id: Number(post_id)
        },
        data: {
            comment_count: {
                increment: 1
            }
        }
    })

    //creating a new comment 
    const newComment = await prisma.comment.create({

        //to create a new post it will take data in object form in data property
        data: {
            user_id: Number(user_id),
            post_id: Number(post_id),
            comment: comment
        }
    })

    res.json({ status: 200, data: newComment, mesage: "comment added successfully" });

}

// * Update the comment
export const updateComment = async (req, res) => {
    const { comment } = req.body;
    const commentId = req.params.id;

    await prisma.comment.update({

        // updating on the basis of uniqueness(which is id)
        where: {
            // converting commentIdId into number bcz parms give string
            id: Number(commentId)
        },
        //data tobe updated
        data: {
            comment,
        }

    })
    res.json({ status: 200, message: `CommentId Successfully updated` })
}

// * Delete comment
export const deleteComment = async (req, res) => {
    const commentId = req.params.id;

    // decrement the comment counter on specific post when user deleted the comment
    await prisma.post.update({
        where: {
            id: Number(post_id)
        },
        data: {
            comment_count: {
                decrement: 1
            }
        }
    })
    const deleteCommnet = await prisma.comment.delete({
        where: {
            id: Number(commentId)
        }
    })
    res.json({ status: 200, message: "Successfully deleted" });
}