export default (req, res, next) => {
    return res.status(200).json({
        success: true,
        response: true,
        message: "Token Validation Success"
    });
}