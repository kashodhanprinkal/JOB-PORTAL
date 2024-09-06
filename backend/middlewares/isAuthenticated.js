import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            });
        }

        // Verify the token
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    message: "Invalid or expired token",
                    success: false,
                });
            }

            // Token is valid
            req.id = decoded.userId;
            next();
        });

    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(500).json({
            message: "Internal server error during authentication",
            success: false,
        });
    }
};

export default isAuthenticated;
