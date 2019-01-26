const checkForToken = (request, response, next) => {
    if(request.headers['token']) next();
    else{
        response.status(401)
        response.send({"error": "No Token Found"})
    }
    }

    module.exports = {
        checkForToken,
    }
    