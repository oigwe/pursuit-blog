const PrivateUserService = require('./services/private/privateUser');

const checkForToken = (request, response, next) => {
    if (request.headers['token']) next();
    else {
        response.status(401)
        response.send({
            "error": "No Token Found"
        })
    }
}
const checkTokenCorrect = (req, res, next) => {
    const {
        id
    } = req.params;
    const token = PrivateUserService.getToken(id).token
    if (req.header.token === token) next();
    else res.json('Error You\'re noy the correct user');
}


module.exports = {
    checkForToken,
    checkTokenCorrect

}




/*
app.get('/:id', checkForToken, checkTokenCorrect)
*/