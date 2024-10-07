
 export const authenticateUser = (req, res, next) => {
    if (req.headers.authorization === 'Bearer token123') {
    next(); // User is authenticated, proceed to the next middleware
    } else {
    res.status(403).send('Unauthorized');
    }
    };
    