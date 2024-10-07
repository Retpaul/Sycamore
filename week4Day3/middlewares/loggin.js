

export const logRequest = (req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next(); // Continue to the next middleware
    };
    