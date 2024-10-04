import jwt from "jsonwebtoken";

const generateAccessToken = (user) =>
    jwt.sign(user, process.env.jwtTokenSecret, { expiresIn: "1d"});

const verifyAccessToken = (token) =>
    jwt.verify(token, process.env.jwtTokenSecret);

export default {
    generateAccessToken,
    verifyAccessToken
};