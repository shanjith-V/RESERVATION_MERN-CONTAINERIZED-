import jwt from "jsonwebtoken"; // Use import instead of require

const auth = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];  // Optional chaining to handle undefined headers

    if (!token) {
        return res.status(400).json({ error: "No Token found" });
    }

    try {
        const decoded = jwt.verify(token, "secret_token");
        req.user = decoded; // Attach the decoded user info to the request
        next(); // Continue to the next middleware
    } catch (e) {
        res.status(500).json({ error: "Invalid token" });
    }
};

export default auth; // Export the middleware
