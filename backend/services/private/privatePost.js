//NODE MODULES
const pgp = require('pg-promise')({});
    //same as const app = pgp();
const db = pgp('postgres://localhost/blog');

const PrivatePostService = {};

//POST
PrivatePostService.createPost = (author, title, body) => {
    console.log(3)
    return db.any('INSERT INTO posts (author, title, body) VALUES (${author}, ${title}, ${body})', {author, title, body});
}

PrivatePostService.updatePost = (post_id, author, title, body) => {
    return db.any('UPDATE posts SET title=${title}, body=${body} WHERE id=${post_id} AND author=${author}', {post_id, author, title, body})
}
PrivatePostService.deletePost = (post_id, author) => {
    return db.any('DELETE FROM posts WHERE author=${author} AND id=${post_id}', {author, post_id})
}


module.exports = PrivatePostService;