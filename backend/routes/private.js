
//NODE MODULES
const express = require('express');
const privateRouter = express.Router();

//DEVELOPER SERVER
const PrivateUserService = require('../services/private/privateUser');
const PrivateCommentService = require('../services/private/privateComment');
const PrivatePostService = require('../services/private/privatePost');


//ROUTES
    //USER
        //UPDATE
            privateRouter.put('/user/:user_id', (req,res)=>{

                const {user_id} = req.params;
                const {username, email, password} = req.body;
                PrivateUserService.putUser(user_id, username, email, password)
                .then(data=>{
                    res.json({
                        success:`user with name ${username} updated`,
                    })
                }).catch(err=>{
                    res.json(err.toString());
                })
            })
        //DELETE
            privateRouter.delete('/user/:user_id',(req,res)=>{
                const {user_id} = req.params;
                PrivateUserService.deleteUser(user_id)
                    .then(data=>{
                        res.json({
                            success: `user ${user_id} has been removed`
                        })
                    }).catch(err=>{
                        res.json(err.toString());
                    })
                
            })
//POST
        //POST-CREATE
            privateRouter.post('/post', (req,res)=>{
                const {author, title, body} = req.body;
                console.log(1)
                PrivatePostService.createPost(author, title, body)
                    .then(data=>{
                        console.log(4)
                        res.json({
                            success: `the post for ${author} has been created`
                        })
                    }).catch(err=>{
                        res.json(err.toString());
                    })
                })
             //UPDATE
                privateRouter.put('/post/:post_id', (req,res)=>{
                    const {post_id} = req.params;
                    const {author, title, body} = req.body;
                    PrivatePostService.updatePost(post_id,author,title,body)
                    .then(data=>{
                        res.json({
                            success:`post ${post_id} has been updated`
                        })
                    }).catch(err=>{
                        res.json(err.toString());
                    })
                })
            //DELETE
                privateRouter.delete('/post/:post_id', (req,res)=>{
                    const {post_id} = req.params;
                    const {author} = req.body;
                    PrivatePostService.deletePost(post_id, author)
                    .then(data=>{
                        res.json({
                            success: `post ${post_id} has been deleted`
                        })
                    }).catch(err=>{
                        res.json(err.toString());
                    })
                })
    //COMMENT
                //POST-CREATE
                privateRouter.post('/comment', (req,res)=>{
                    const {author, post_id, title, body} = req.body;
                    PrivateCommentService.createComment(author, post_id, title, body)
                    .then(data=>{
                        res.json({
                            success:`author ${author}, your comment has been posted`
                        })
                    }).catch(err=>{
                        res.json(err.toString());
                    })
                })
             //UPDATE
                privateRouter.put('/comment/:comment_id', (req,res)=>{
                    const {comment_id} = req.params;
                    const {author, post_id, title, body} = req.body;
                    PrivateCommentService.updateComment(comment_id, author, post_id, title, body)
                    .then(data=>{
                        res.json({
                            success:`author ${author}, your comment has been updated`
                        })
                    }).catch(err=>{
                        res.json(err.toString());
                    })
                })
            //DELETE
                privateRouter.delete('/comment/:comment_id', (req,res)=>{
                    const {comment_id} = req.params;
                    const {post_id, author} = req.body;
                    PrivateCommentService.deleteComment(comment_id, post_id, author)
                    .then(data=>{
                        res.json({
                            success: `comment ${comment_id} has been deleted`
                        })
                    }).catch(err=>{
                        res.json(err.toString());
                    })
                })


module.exports = privateRouter;