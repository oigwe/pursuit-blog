
//NODE MODULES
const express = require('express');
const publicRouter = express.Router();

//DEVELOPER SERVER
const PublicUserService = require('../services/public/publicUser');
const PublicCommentService = require('../services/public/publicComment');
const PublicPostService = require('../services/public/publicPost');

//ROUTERS


//ROUTES
    //USER
        //POST-CREATE USER
            publicRouter.post('/user', (req,res)=>{
                const {username, email, password} = req.body;
                PublicUserService.createUser(username, email, password)
                .then(data=>{
                    res.json({
                        success: `${username} has been created`
                    })
                }).catch(err=>{
                    res.json(err.toString());
                })
            })

        //LOGIN USER
        publicRouter.post('/login', (req,res)=>{
            PublicUserService.loginUser()
            .then(data=>{
                res.json({})
            }).catch(err=>{
                res.json(err.toString());
            })
        })
        //GET USER
            publicRouter.get('/user/:user_id',(req,res)=>{
                const {user_id} = req.params;
                PublicUserService.readUser(user_id)
                    .then(data=>{
                        res.json({
                            data
                        })
                    }).catch(err=>{
                        res.json(err.toString());
                    })
                
            })
        //GET USER ALL POSTS
        publicRouter.get('/user/:user_id/posts',(req,res)=>{
            const {user_id} = req.params;           
            PublicUserService.readUserAllPosts(user_id)
                .then(data=>{
                    res.json({data})
                }).catch(err=>{
                    res.json(err.toString());
                })
            
        })
        //GET USER INDIVIDUAL POST
        publicRouter.get('/user/:user_id/posts/:post_id',(req,res)=>{
            const {user_id, post_id} = req.params;
            PublicUserService.readUserIndividualPost(user_id, post_id)
                .then(data=>{
                    res.json({data})
                }).catch(err=>{
                    res.json(err.toString());
                })
            
        })
        //GET USER ALL COMMENTS
        publicRouter.get('/user/:user_id/comments',(req,res)=>{
            const {user_id}=req.params;
            PublicUserService.readUserAllComments(user_id)
                .then(data=>{
                    res.json({data})
                }).catch(err=>{
                    res.json(err.toString());
                })
            
        })
        //GET USER INDIVIDUAL COMMENT
        publicRouter.get('/user/:user_id/comments/:comment_id',(req,res)=>{
            PublicUserService.readUserIndividualComment()
                .then(data=>{
                    res.json({data})
                }).catch(err=>{
                    res.json(err.toString());
                })
            
        })
//---------------------------------------------------------------------------------------
   
    //POSTS
        //GET INDIVIDUAL POSTS
        publicRouter.get('/post/:post_id',(req,res)=>{
            const {post_id} = req.params;           
            PublicPostService.readPost(post_id)
                .then(data=>{
                    res.json({data})
                }).catch(err=>{
                    res.json(err.toString());
                })
            
        })
        //READ ALL POST COMMENTS
        publicRouter.get('/post/:post_id/comments',(req,res)=>{
            const {post_id} = req.params;           
            PublicPostService.readAllPostComments(post_id)
                .then(data=>{
                    res.json({data})
                }).catch(err=>{
                    res.json(err.toString());
                })
        })
        //READ ALL INDIVIDUAL COMMENT FROM INDIVIDUAL POST
         publicRouter.get('/post/:post_id/comments/comment_id',(req,res)=>{
            const {post_id, comment_id} = req.params; 
            PublicPostService.readIndividualCommentFromPost(post_id, comment_id)
                .then(data=>{
                    res.json({data})
                    console.log(3)
                }).catch(err=>{
                    res.json(err.toString());
                })
            })           
        
    //COMMENT
             //UPDATE
             publicRouter.get('/comment/:comment_id', (req,res)=>{
                const {comment_id} = req.params; 
                PublicCommentService.readComment(comment_id)
                    .then(data=>{
                        res.json({data})
                    }).catch(err=>{
                        res.json(err.toString());
                    })
                })


module.exports = publicRouter;