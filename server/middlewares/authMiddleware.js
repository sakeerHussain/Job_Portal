import jwt from 'jsonwebtoken';
import Company from '../models/company.js';

export const protectCompany = async (req, res, next) => {
    const token = req.headers.token;  // Extract the token from the request headers

    if(!token) {
        return res.json({ success: false, message: "Not authorized, Login Again."})
    }

    // Verify the token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.company = await Company.findById(decoded.id).select('-password');// Fetch the user from DB (excluding password)
        next() // pass control to the controller
    } catch(error) {
        res.json({success: false, message: error.message});
    }
}